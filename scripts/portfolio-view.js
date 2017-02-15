'use strict';

let articleView = {};
let currentTab = 1;

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function(e) {
    e.preventDefault();
    $('section').filter('.main-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  })
  $('.main-nav .tab:first').click();
}

articleView.handleMainNav();
