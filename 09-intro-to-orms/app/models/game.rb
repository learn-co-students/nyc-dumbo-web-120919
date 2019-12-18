class Game
  attr_accessor :id, :title, :publisher, :price

  @@all = []

  # TODO: if there's time, refactor using mass assignment
  def initialize(id, title, publisher, price)
    @id = id
    @title = title
    @publisher = publisher
    @price = price

    # TODO: replace with database!
    @@all << self
  end

  # TODO: replace with database!
  def self.all
    @@all
  end

end