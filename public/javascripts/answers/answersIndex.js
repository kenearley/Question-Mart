(function($) {  
  
  function answersIndex($element) {
    
    /* PRIVATE VARIABLES */
    
    var $mainContainer,
        $answers,
        $newAnswerForm;
        
    /* PRIVATE METHODS */
    
    // constructor
    function init() {
      $mainContainer = $element;
      $answers = $('div.answer', $mainContainer).answer();
      $newAnswerForm = $('form.answer');
      bindEvents();
    }

    function bindEvents() {
      $newAnswerForm.submit(function(e) {
        e.preventDefault();
        addAnswer();

      });
    }

    function addAnswer() {
      $.ajax({
        url: $newAnswerForm.attr("action"),
        type: $newAnswerForm.attr("method"),
        data: $newAnswerForm.serialize(),
        success: function(response) {
          var $newAnswer = $(response).hide();
          $('#answersWrapper', $mainContainer).append($newAnswer);
          $newAnswer.slideDown().answer();
        }
      });
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

