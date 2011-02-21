class QuestionsController < ApplicationController
  # GET /questions
  # GET /questions.xml
  def index
    @questions = Question.find(:all, :order => 'id DESC')
    @question = Question.new
  end

  # GET /questions/1
  # GET /questions/1.xml
  def show
    @question = Question.find(params[:id])
    @answers = @question.answers
    @answer = Answer.new
  end

  # GET /questions/new
  # GET /questions/new.xml
  def new
    @question = Question.new
  end

  # GET /questions/1/edit
  def edit
    @question = Question.find(params[:id])
  end

  # POST /questions
  # POST /questions.xml
  def create
    @question = Question.new(params[:question])
    if @question.save
      redirect_to root_path, :notice => 'Question was successfully created.'
    else
      render :action => "new"
    end
  end

  # PUT /questions/1
  # PUT /questions/1.xml
  def update
    @question = Question.find(params[:id])
    if @question.update_attributes(params[:question])
      redirect_to questions_path, :notice => 'Question was successfully updated.'
    else
      render :action => "edit"
    end
  end

  # DELETE /questions/1
  # DELETE /questions/1.xml
  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    if request.xhr?
      render :json => {:notice => "Answer successfully deleted."}
    else
      redirect_to root_path
    end
  end
end
