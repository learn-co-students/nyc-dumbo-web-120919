class User < ApplicationRecord

  validates :username, uniqueness: true
  validates :username, presence: true

  has_many :snacks
  has_secure_password
end
