'use strict';

(function(module) {
  const blogController = {};
  blogController.init = () => {
    $('main > section').hide();
    $('#blog').show();
  }
  module.blogController = blogController;
})(window);
