var apiUrl = 'https://api.github.com/repos/sdelements/slate/tags';
var linkUrl = 'https://cdn.rawgit.com/sdelements/slate/<TAG>/index.html';
var devUrl = 'https://rawgit.com/sdelements/slate/gh-pages-releases/index.html';

function getTags(cb) {
  $.get(apiUrl, function(data) {
    var tags = data.map(function(tag) {
      return {
        name: tag.name,
        url: linkUrl.replace('<TAG>', tag.commit.sha)
      };
    });
    tags.push({
      name: 'dev',
      url: devUrl
    })
    cb(tags);
  });
}

function renderMenu(tags) {
  var $menu = $('.versions p');

  var tagHtml = tags.map(function(tag) {
    return '<a target="iframe" href="' + tag.url + '">' + tag.name + '</a>';
  }).join(' <span>&middot;</span> ');

  $menu.append(tagHtml);
}

function registerEvents() {
  var $menuLinks = $('.versions p a');
  $menuLinks.click(function() {
    $menuLinks.removeClass('active');
    $(this).addClass('active');
  });
}

function initState() {
    var firstLink = $('.versions p a').first();
    firstLink.addClass('active');
    $('iframe')[0].src = firstLink.attr('href');
}

$(function() {
  getTags(function(tags) {
    renderMenu(tags);
    registerEvents();
    initState();
  });
});
