'use strict';

(function(module) {
  const indexController = {};
  indexController.init = () => {
    $('main > section').hide();
    $('#about').show();
  }
  module.indexController = indexController;
})(window);
