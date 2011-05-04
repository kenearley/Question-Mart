(function($) {  
  
  QM.AnswersIndex = Spine.Controller.create({

    elements: {
      "div.answer": "answers",
      "h3 span.count": "answerCount",
      "form#new_answer": "newAnswerForm"
    },
    events: {"submit form#new_answer": "addAnswer"},
    proxied: ["addAnswer"],
    
    init: function() {
      QM.Answer.bindToDom("answer", this.answers);
    },

    addAnswer: function(event) {
      var el = this.el,
          form = this.newAnswerForm,
          answers = this.answers,
          answerCount = this.answerCount;

      event.preventDefault();
      $.ajax({
        url: form.attr("action"),
        type: form.attr("method"),
        data: form.serialize(),
        success: function(response) {
          form.find('textarea').val("");
          var newAnswer = $(response).hide();
          $('#answersWrapper', el).append(newAnswer);
          newAnswer.initPlugin({pluginName :"answer", controller: QM.Answer});
          newAnswer.slideDown();
          answers.push(newAnswer[0]);
          answerCount.html(answers.length);
        }
      });
    }

  });
  
})(jQuery);
