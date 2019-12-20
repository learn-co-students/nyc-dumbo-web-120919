class Player < ActiveRecord::Base
  has_many :reviews
  has_many :games, through: :reviews

end