class User < ApplicationRecord
  has_many :reviews
  has_many :movies, through: :reviews

  validates :name, uniqueness: true
  validates :name, presence: true

  has_secure_password


  # def password=(secret)
  #   self.password_digest = BCrypt::Password.create(secret)
  # end 

  # def authenticate(secret)
  #   BCrypt::Password.new(self.password_digest) == secret
  # end 
end
