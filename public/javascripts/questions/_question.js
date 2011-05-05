(function($) {  
  
  QM.Question = Spine.Controller.create({

    events: {"submit form.button_to": "deleteQuestion"},
    
    deleteQuestion: function(event) {
      event.preventDefault();
      var question = this,
          form = $(event.target);
      $.ajax({
        url: form.attr("action"),
        type: form.attr("method"),
        data: form.serialize(),
        success: function(response) {
          question.el.slideUp('slow', function() { question.el.remove(); });
          question.el.trigger('questionDeleted');
        }
      });
    }

  });

})(jQuery);
