class Magazine < ActiveRecord::Base
  has_many :subscriptions
  has_many :readers, through: :subscriptions

  # def subscriptions
  # finding the subscriptions for self
  # end
end

# - `Magazine#subscriptions`
#   - returns a collection of all `Subscription` instances for this magazine
# - `Magazine#readers`
#   - returns a collection of all `Reader` instances who are subscribed to this magazine
