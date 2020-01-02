class Reader < ActiveRecord::Base
  has_many :subscriptions
  has_many :magazines, through: :subscriptions

  def subscribe(magazine, price)
    # Subscription.create(price, magazine, self)
    Subscription.create(
      reader_id: self.id,
      magazine_id: magazine.id,
      price: price
    )
  end

  def cancel_subscription(magazine)
    # find the subscriptions to delete
    subs_to_delete = self.subscriptions.where(magazine_id: magazine.id)
    # delete them
    subs_to_delete.destroy_all

    # for just one subscription to delete
    # sub_to_delete = self.subscriptions.find_by(magazine_id: magazine.id)
    # sub_to_delete.destroy
  end

  def total_subcription_price
    # total = 0
    # self.subscriptions.each do |subscription|
    #   total += subscription.price
    # end
    # total
    self.subscriptions.sum(:price)
  end
end


# - `Reader#total_subcription_price`
#   - returns the total price for all the reader's subscriptions
# - `Reader#cancel_subscription(magazine)`
#   - takes a `magazine` instance and removes the subscription for this reader
#   - you will have to delete a row from the `subscriptions` table to get this to work!
