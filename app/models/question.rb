class Question < ActiveRecord::Base
  attr_accessible :question

  has_many :answers, :dependent => :destroy
end
