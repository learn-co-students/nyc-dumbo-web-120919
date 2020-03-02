class OrderSerializer < ActiveModel::Serializer
  attributes :id, :created_at
  has_many :burgers

end
