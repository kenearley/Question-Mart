(function($) {  
  
  function question($element) {
    
    /* PRIVATE VARIABLES */
    
    var $mainContainer,
        $deleteButton;
        
    /* PRIVATE METHODS */
    
    // constructor
    function init() {
      $mainContainer = $element;
      $deleteButton = $('input[type=submit]', $mainContainer);
      bindEvents();
      console.log('question created');
    }
    
    function bindEvents() {
      $deleteButton.submit(function(e) {
        e.preventDefault();
        alert('deleted');
      });
    }
    
    // run constructor
    init();
    
    /* PUBLIC METHODS */
    
    return {
      delete: function() {
        $mainContainer.trigger('questionDeleted');
        $mainContainer.remove();
      }
    };
    
  }
  
  // jQuery plugin method
  $.fn.question = function() {
    return this.each(function() {
      var $this = $(this);
      
      // If not already stored, store plugin object in this element's data
      if (!$this.data('question')) {
        $this.data('question', question($this));
      }
    });
  };
    
})(jQuery);



