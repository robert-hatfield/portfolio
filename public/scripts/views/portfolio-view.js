'use strict';

(function (module) {
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
    $('#projects').append(`<p><em>"Fun" fact: There is a total of ${Project.words} words in the descriptions of my projects.</em></p>`)
    portfolioView.handleMainNav();
  }

module.portfolioView = portfolioView;
})(window);
