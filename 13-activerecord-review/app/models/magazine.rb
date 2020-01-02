class Magazine < ActiveRecord::Base
  has_many :subscriptions
  has_many :readers, through: :subscriptions

  # def subscriptions
  # finding the subscriptions for self
  # end
end
