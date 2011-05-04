(function($) {  

  QM.QuestionsIndex = Spine.Controller.create({
    
    elements: {".question": "questions"},
    events: {"questionDeleted": "removeQuestion"},
    proxied: ["removeQuestion", "getQuestions"],
    
    init: function() {
      this.questions.initPlugin({pluginName: "question", controller: QM.Question});
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
