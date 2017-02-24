'use strict';

(function(module) {
  const portfolioController = {};
  portfolioController.init = () => {
    $('main > section').hide();
    $('#projects').show();
    Project.requestMyRepos();
  }
  module.portfolioController = portfolioController;
})(window);
