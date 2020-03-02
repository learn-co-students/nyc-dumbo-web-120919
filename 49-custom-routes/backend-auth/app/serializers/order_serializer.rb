class OrderSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :nice_timestamp_for_grandma
  has_many :burger_orders

end
