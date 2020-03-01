class Order < ApplicationRecord
  belongs_to :user

  has_many :burger_orders
  has_many :burgers, through: :burger_orders

end
