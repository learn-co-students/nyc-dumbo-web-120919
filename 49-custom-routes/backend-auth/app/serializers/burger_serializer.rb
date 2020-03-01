class BurgerSerializer < ActiveModel::Serializer
  attributes :id, :name, :string, :description, :price
end
