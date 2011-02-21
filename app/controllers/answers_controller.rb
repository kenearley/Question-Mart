class AnswersController < ApplicationController
  # GET /answers
  # GET /answers.xml
  def index
    @question = Question.find(params[:question_id])
    @answers = @question.answers.all
    @answer = Answer.new
  end

  # GET /answers/1
  # GET /answers/1.xml
  def show
    @answer = Answer.find(params[:id])
  end

  # GET /answers/new
  # GET /answers/new.xml
  def new
    @question = Question.find(params[:question_id])
    @answer = Answer.new
  end

  # GET /answers/1/edit
  def edit
    @answer = Answer.find(params[:id])
  end

  # POST /answers
  # POST /answers.xml
  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.build(params[:answer])
    if @answer.save
      if request.xhr?
        render :partial => "answer", :locals => { :answer => @answer }
      else
        redirect_to question_answers_path(@question), :notice => 'Answer was successfully created.'
      end
    else
      render :action => 'new' 
    end
  end

  # PUT /answers/1
  # PUT /answers/1.xml
  def update
    @answer = Answer.find(params[:id])
    if @answer.update_attributes(params[:answer])
      redirect_to question_answers_path(@answer.question), :notice => 'Answer was successfully updated.'
    else
      render :action => "edit"
    end
  end

  # DELETE /answers/1
  # DELETE /answers/1.xml
  def destroy
    @answer = Answer.find(params[:id])
    question_id = @answer.question_id
    @answer.destroy
    redirect_to question_answers_path(question_id)
  end
end
