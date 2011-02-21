(function($) {  
  
  function answer($element) {
    
    /* PRIVATE VARIABLES */
    
    var $mainContainer;
        
    /* PRIVATE METHODS */
    
    // constructor
    function init() {
      $mainContainer = $element;
    }

    // run constructor
    init();
    
    /* PUBLIC METHODS */
    
    return {
      delete: function() {
        $mainContainer.trigger('answerDeleted');
        $mainContainer.remove();
      }
    };
    
  }
  
  // jQuery plugin method
  $.fn.answer = function() {
    return this.each(function() {
      var $this = $(this);
      
      // If not already stored, store plugin object in this element's data
      if (!$this.data('answer')) {
        $this.data('answer', answer($this));
      }
    });
  };
    
})(jQuery);


