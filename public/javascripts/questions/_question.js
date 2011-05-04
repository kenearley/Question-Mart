(function($) {  
  
  QM.Question = Spine.Controller.create({

    elements: {"form.button_to": "deleteButton"},
    events: {"submit form.button_to": "deleteQuestion"},
    proxied: ["deleteQuestion"],
    
    deleteQuestion: function(event) {
      event.preventDefault();
      var question = this;
      $.ajax({
        url: this.deleteButton.attr("action"),
        type: this.deleteButton.attr("method"),
        data: this.deleteButton.serialize(),
        success: function(response) {
          question.el.slideUp('slow', function() { question.el.remove(); });
          question.el.trigger('questionDeleted');
        }
      });
    }

  });

})(jQuery);
