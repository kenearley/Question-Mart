// Namespace
QM = {};

$.fn.initPlugin = function(options) {
  return this.each(function() {
    var $this = $(this);
    
    // If not already stored, store plugin object in this element's data
    if (!$this.data(options.pluginName)) {
      $this.data(options.pluginName, options.controller.init({el: $this}));
    }
  });
};

