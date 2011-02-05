class Answer < ActiveRecord::Base
  belongs_to :question

  validates :answer, :question_id, :presence => true
end
