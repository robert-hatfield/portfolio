'use strict';

let portfolioView = {};
let currentTab = 1;

portfolioView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function(e) {
    e.preventDefault();
    $('section').filter('.main-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  })
  $('.main-nav .tab:first').click();
}

portfolioView.initPage = function() {
  Project.all.forEach(function(htmlObject) {
    $('#projects').append(htmlObject.toHtml());
  });
  portfolioView.handleMainNav();
}
