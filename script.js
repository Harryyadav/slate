var apiUrl = 'https://api.github.com/repos/sdelements/slate/tags';
var linkUrl = 'https://cdn.rawgit.com/sdelements/slate/<TAG>/index.html';
var devUrl = 'https://cdn.rawgit.com/sdelements/slate/gh-pages-releases/index.html';

function getTags(cb) {
  $.get(apiUrl, function(data) {
    var tags = data.map(function(tag) {
      return {
        name: tag.name,
        url: linkUrl.replace('<TAG>', tag.name)
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
  var $menu = $('.menu p');

  var tagHtml = tags.map(function(tag) {
    return '<a target="iframe" href="' + tag.url + '">' + tag.name + '</a>';
  }).join(' <span>|</span> ');

  $menu.append(tagHtml);
}

function registerEvents() {
  var $menuLinks = $('.menu p a');
  $menuLinks.click(function() {
    $menuLinks.removeClass('active');
    $(this).addClass('active');
  });
}

function initState() {
    var firstLink = $('.menu p a').first();
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
