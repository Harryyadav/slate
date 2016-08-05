var exec = require('child_process').exec;
var fs = require('fs');

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var ejs = require('gulp-ejs');
var gls = require('gulp-live-server');
var gulpif = require('gulp-if');
var open = require('gulp-open');
var prettify = require('gulp-prettify');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var del = require('del');
var highlight = require('highlight.js');
var marked = require('marked');
var yaml = require('js-yaml');

var async = require('async');
var compareVersions = require('compare-versions');
var Git = require('nodegit');


var renderer = new marked.Renderer();
var COMPRESS = true;

renderer.code = function (code, language) {
  var highlighted = language ? highlight.highlight(language, code).value
                             : highlight.highlightAuto(code).value;

  return '<pre class="highlight ' + language + '"><code>' + highlighted + '</code></pre>';
};

var readIndexYml = function(dir) {
  dir = dir || __dirname;
  return yaml.safeLoad(fs.readFileSync(dir + '/source/index.yml', 'utf8'));
};

var getPageData = function(dir, refs, ref) {
  dir = dir || __dirname;

  var config = readIndexYml();
  config.includes = readIndexYml(dir).includes;
  var includes = config.includes
        .map(function(include) { return dir +'/source/includes/' + include + '.md'; })
        .map(function(include) { return fs.readFileSync(include, 'utf8'); })
        .map(function(include) { return marked(include, { renderer: renderer }); });

  return {
    refs: refs || [{ version: 'dev', filename: 'index' }],
    ref: ref || 'dev',

    current_page: {
      data: config
    },
    page_classes: '',
    includes: includes,
    image_tag: function(filename, alt, className) {
      return '<img alt="' + alt + '" class="' + className + '" src="images/' + filename + '">';
    },
    javascript_include_tag: function(name) {
      return '<script src="javascripts/' + name + '.js" type="text/javascript"></script>';
    },
    stylesheet_link_tag: function(name, media) {
      return '<link href="stylesheets/' + name + '.css" rel="stylesheet" type="text/css" media="' + media + '" />';
    },
    langs: (config.language_tabs || []).map(function(lang) {
      return typeof lang == 'string' ? lang : lang.keys.first;
    })
  };
};

var getGitRefs = function() {
  return Git.Repository.open('.').then(function(repo) {
    return repo.getReferenceNames(3);
  }).then(function(refs) {
    return refs.filter(function(ref) {
      return ref.indexOf('refs/remotes/origin/release/') !== -1;
    }).map(function(ref) {
      var split = ref.split('/');
      return {
        ref: ref,
        version: split[split.length -1]
      };
    }).sort(function(a, b) {
      return -1 * compareVersions(a.version, b.version);
    }).concat([
      {
        ref: 'refs/heads/master',
        version: 'dev'
      }
    ])
    .map(function(ref, index) {
      ref.filename = index === 0 ? 'index' : ref.version;
      ref.folder = __dirname + '/temp/' + ref.version;
      ref.archive = 'mkdir ' + ref.folder + ' && git archive ' + ref.ref + ' | tar -x -C ' + ref.folder;
      return ref;
    });
  });
};

gulp.task('clean', function () {
  return del(['build/*', 'temp/*']);
});

gulp.task('make-temp', function (done) {
  fs.mkdir(__dirname + '/temp', function() { done(); });
});

gulp.task('fonts', function() {
  return gulp.src('./source/fonts/**/*').pipe(gulp.dest('build/fonts'));
});

gulp.task('images', function() {
  return gulp.src('./source/images/**/*').pipe(gulp.dest('build/images'));
});

gulp.task('js', function() {
  var config = readIndexYml();
  var libs = [
    './source/javascripts/lib/_energize.js',
    './source/javascripts/lib/_jquery.js',
    './source/javascripts/lib/_jquery_ui.js',
    './source/javascripts/lib/_jquery.tocify.js',
    './source/javascripts/lib/_imagesloaded.min.js',
  ];
  var scripts = [
    './source/javascripts/app/_lang.js',
    './source/javascripts/app/_toc.js',
  ];

  if (config.search) {
    libs.push('./source/javascripts/lib/_lunr.js');
    libs.push('./source/javascripts/lib/_jquery.highlight.js');
    libs.push('./source/javascripts/app/_search.js');
  }

  return gulp.src(libs.concat(scripts))
    .pipe(concat('all.js'))
    .pipe(gulpif(COMPRESS, uglify()))
    .pipe(gulp.dest('./build/javascripts'));
});

gulp.task('sass', function () {
  return gulp.src('./source/stylesheets/*.css.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ extname: ''}))
    .pipe(gulpif(COMPRESS, cleanCSS()))
    .pipe(gulp.dest('./build/stylesheets'));
});

gulp.task('highlightjs', function () {
  var config = readIndexYml();
  var path = './node_modules/highlight.js/styles/' + config.highlight_theme + '.css';
  return gulp.src(path)
    .pipe(rename({ prefix: 'highlight-'}))
    .pipe(gulpif(COMPRESS, cleanCSS()))
    .pipe(gulp.dest('./build/stylesheets'));
});

gulp.task('html', function () {
  var data = getPageData();
  return gulp.src('./source/*.html')
  	.pipe(ejs(data).on('error', gutil.log))
    .pipe(gulpif(COMPRESS, prettify({indent_size: 2})))
  	.pipe(gulp.dest('./build'));
});

gulp.task('html-publish', function(done) {
  getGitRefs().then(function(refs) {

    async.each(refs, function(ref, callback) {
      exec(ref.archive, function (err, stdout, stderr) {
        if (err) {
          return callback(err);
        }

        var data = getPageData(ref.folder, refs, ref.version);
        gulp.src('./source/*.html')
        	.pipe(ejs(data).on('error', gutil.log))
          .pipe(gulpif(COMPRESS, prettify({indent_size: 2})))
        	.pipe(rename({
            basename: ref.filename
          }))
        	.pipe(gulp.dest('./build'))
          .on('end', callback);

      });
    }, function(err) {
      done(err);
    });
  })
});

gulp.task('NO_COMPRESS', function() {
  COMPRESS = false;
});

gulp.task('default', ['clean', 'fonts', 'images', 'highlightjs', 'js', 'sass', 'html']);
gulp.task('publish', ['clean', 'make-temp', 'fonts', 'images', 'highlightjs', 'js', 'sass', 'html-publish']);

gulp.task('serve', ['NO_COMPRESS', 'default'], function() {

  gulp.watch(['./source/*.html', './source/includes/**/*'], ['html']);
  gulp.watch('./source/javascripts/**/*', ['js']);
  gulp.watch('./source/stylesheets/**/*', ['sass']);
  gulp.watch('./source/index.yml', ['highlightjs', 'js', 'html']);

  var server = gls.static('build', 4567);
  server.start();

  gulp.watch(['build/**/*'], function (file) {
    server.notify.apply(server, [file]);
  });

  gulp.src(__filename).pipe(open({uri: 'http://localhost:4567'}));
});
