class Colony
  attr_reader :name, :population, :planet, :alien

  @@all = []

  def initialize(name, population, planet, alien)
    @name = name
    @population = population
    @planet = planet
    @alien = alien

    @@all << self
  end

  def self.all
    @@all
  end

end # end of class Colony