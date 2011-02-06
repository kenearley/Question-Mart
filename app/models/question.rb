class Question < ActiveRecord::Base
  has_many :answers, :dependent => :destroy

  validates :title, :question, :presence => true
end
