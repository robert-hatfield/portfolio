'use strict';

(function(module) {
  const portfolioController = {};
  portfolioController.init = () => {
    console.log("Initializing Portfolio view...");
    $('main > section').hide();
    $('#projects').show();
    // Project.requestRepos();
  }
  module.portfolioController = portfolioController;
})(window);
