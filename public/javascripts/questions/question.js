(function($) {  
  
  function question($element) {
    
    /* PRIVATE VARIABLES */
    
    var $mainContainer;
        
    /* PRIVATE METHODS */
    
    // constructor
    function init() {
      $mainContainer = $element;
      $deleteButton = $('form.button_to', $mainContainer);
      bindEvents();
      console.log('question created');
    }
    
    function bindEvents() {
      $deleteButton.submit(function(e) {
        e.preventDefault();
        deleteQuestion();
      });
    }

    function deleteQuestion() {
      $mainContainer.trigger('questionDeleted');
      $mainContainer.slideUp('slow', function() { $mainContainer.remove(); });
      
      $.ajax({
        url: $deleteButton.attr("action"),
        type: $deleteButton.attr("method"),
        data: $deleteButton.serialize(),
        success: function(response) {
          console.log(response.notice);
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



