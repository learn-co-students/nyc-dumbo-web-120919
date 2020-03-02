class Order < ApplicationRecord
  belongs_to :user

  has_many :burger_orders
  has_many :burgers, through: :burger_orders


  def create_associations_to_these_burgers(array_of_ids)
    array_of_ids.each do |burger_id|
      BurgerOrder.create(order_id: self.id, burger_id: burger_id)
    end
  end

  def nice_timestamp_for_grandma
    self.created_at.strftime("Ordered at %I:%M%p")
  end


end
