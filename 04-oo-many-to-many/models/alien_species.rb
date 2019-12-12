class AlienSpecies
  attr_reader :race, :language, :technology, :behavior

  @@all = []

  def initialize(race, language, technology, behavior)
    @race = race
    @language = language
    @technology = technology
    @behavior = behavior

    @@all << self
  end

  def colonies
    # 1. For a species, find all the colonies
    # access the single source of truth for the colonies
    # find the the colonies that are belong to this alien species
    Colony.all.select do |colony_instance|
      colony_instance.alien == self
    end
  end

  def planets
    # 2. For those colonies, get the planet's info
    self.colonies.map do |colony|
      colony.planet
    end
  end

  def self.all
    @@all
  end

end # end of class AlienSpecies
