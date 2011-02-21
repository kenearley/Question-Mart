(function($) {  
  
  function answersIndex($element) {
    
    /* PRIVATE VARIABLES */
    
    var $mainContainer,
        $answers,
        $answerCount,
        $newAnswerForm;
        
    /* PRIVATE METHODS */
    
    // constructor
    function init() {
      $mainContainer = $element;
      $answers = $('div.answer', $mainContainer).answer();
      $answerCount = $('h3 span.count');
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
          $newAnswerForm.find('textarea').val("");
          var $newAnswer = $(response).hide();
          $('#answersWrapper', $mainContainer).append($newAnswer);
          $newAnswer.slideDown().answer();
          $answers.push($newAnswer);
          $answerCount.html($answers.length);
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

