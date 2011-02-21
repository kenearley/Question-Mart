(function($) {  
  
  function answersIndex($element) {
    
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
      // public method go here
    };
    
  }
  
  // jQuery plugin method
  $.fn.answersIndex = function() {
    return this.each(function() {
      var $this = $(this);
      
      // If not already stored, store plugin object in this element's data
      if (!$this.data('answersIndex')) {
        $this.data('answersIndex', answersIndex($this));
      }
    });
  };
    
})(jQuery);

