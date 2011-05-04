// Namespace
QM = {};

(function($) {  
  $.fn.initPlugin = function(options) {
    return this.each(function() {
      var $this = $(this);
      
      // If not already stored, store plugin object in this element's data
      if (!$this.data(options.pluginName)) {
        $this.data(options.pluginName, options.controller.init({el: $this}));
      }
    });
  };

  // adding the ability to attach the controller object to the DOM node
  Spine.Controller.extend({
    bindToDom: function(dataName, collection) {  
      var controller = this;
      return collection.each(function() {
        var $this = $(this);
        
        // If not already stored, store plugin object in this element's data
        if (!$this.data(dataName)) {
          $this.data(dataName, controller.init({el: $this}));
        }
      });
    }
  });

})(jQuery);
