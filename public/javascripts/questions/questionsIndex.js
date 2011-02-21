(function($) {  
  
  function questionsIndex($element) {
    
    /* PRIVATE VARIABLES */
    
    var $mainContainer,
        $questions;
        
    /* PRIVATE METHODS */
    
    // constructor
    function init() {
      $mainContainer = $element;
      $questions = $('.question', $mainContainer).question();
    }
    
    // run constructor
    init();
    
    /* PUBLIC METHODS */
    
    return {
    };
    
  }
  
  // jQuery plugin method
  $.fn.questionsIndex = function() {
    return this.each(function() {
      var $this = $(this);
      
      // If not already stored, store plugin object in this element's data
      if (!$this.data('questionsIndex')) {
        $this.data('questionsIndex', questionsIndex($this));
      }
    });
  };
    
})(jQuery);


