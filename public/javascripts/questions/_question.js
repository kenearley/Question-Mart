(function($) {  
  
  function question($element) {
    
    /* PRIVATE VARIABLES */
    
    var $mainContainer,
        $deleteButton;
        
    /* PRIVATE METHODS */
    
    // constructor
    function init() {
      $mainContainer = $element;
      $deleteButton = $('form.button_to', $mainContainer);
      bindEvents();
    }
    
    function bindEvents() {
      $deleteButton.submit(function(e) {
        e.preventDefault();
        deleteQuestion();
      });
    }

    function deleteQuestion() {
      $.ajax({
        url: $deleteButton.attr("action"),
        type: $deleteButton.attr("method"),
        data: $deleteButton.serialize(),
        success: function(response) {
          $mainContainer.slideUp('slow', function() { $mainContainer.remove(); });
          $mainContainer.trigger('questionDeleted');
        }
      });
    }

    // run constructor
    init();
    
    /* PUBLIC METHODS */
    
    return {
      deleteQuestion: function() {
        deleteQuestion();
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



