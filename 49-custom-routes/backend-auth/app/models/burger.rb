class Burger < ApplicationRecord
  has_many :burger_orders
  has_many :orders, through: :burger_orders
end
