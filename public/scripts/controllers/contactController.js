'use strict';

(function(module) {
  const contactController = {};
  contactController.init = () => {
    $('main > section').hide();
    $('#contact').show();
  }
  module.contactController = contactController;
})(window);
