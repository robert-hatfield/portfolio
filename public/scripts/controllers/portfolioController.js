'use strict';

(function(module) {
  const portfolioController = {};
  portfolioController.init = () => {
    $('main > section').hide();
    $('#projects').show();
  }
  module.portfolioController = portfolioController;
})(window);
