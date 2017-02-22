'use strict';

(function (module) {
  let portfolioView = {};
  let currentTab = 1;

  portfolioView.initPage = function() {
    Project.all.forEach(function(htmlObject) {
      $('#projects').append(htmlObject.toHtml());
    });
    $('#projects').append(`<p><em>"Fun" fact: There is a total of ${Project.words} words in the descriptions of my projects.</em></p>`)
  }

module.portfolioView = portfolioView;
})(window);
