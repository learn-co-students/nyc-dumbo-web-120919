class Animal < ApplicationRecord
  belongs_to :species
  enum diet: [:carnivore, :herbivore, :omnivore]

  validates :name, presence: true

  def species_name
    species.name
  end
end
