(function($) {  

  QM.QuestionsIndex = Spine.Controller.create({
    
    elements: {".question": "questions"},
    events: {"questionDeleted": "removeQuestion"},
    proxied: ["getQuestions"],
    
    init: function() {
      QM.Question.initAll("question", this.questions);
    },

    removeQuestion: function(event) {
      var questions = this.questions;
      questions.each(function(index) {
        if(this == event.target) {
          questions.splice(index, 1);
          return;
        }
      });
    },

    getQuestions: function() {
      return this.questions;
    }

  });

})(jQuery);
