class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :donations, :image_url, :diet, :species_name
  # belongs_to :species
end
