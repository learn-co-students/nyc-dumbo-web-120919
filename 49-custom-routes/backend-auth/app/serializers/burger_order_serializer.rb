class BurgerOrderSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :burger
end
