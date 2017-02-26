'use strict';

(function(module) {
  const portfolioController = {};
  portfolioController.init = () => {
    $('main > section').hide();
    $('#projects').show();
    Project.requestRepos();
  }
  module.portfolioController = portfolioController;
})(window);
