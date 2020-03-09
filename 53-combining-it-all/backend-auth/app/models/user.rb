class User < ApplicationRecord
  validates :username, uniqueness: true
  validates :username, presence: true
  has_secure_password
  
  has_many :reviews
  has_many :sandwiches, through: :reviews

end
