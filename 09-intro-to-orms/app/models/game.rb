class Game
  attr_accessor :id, :title, :genre, :price

  # @@all = []

  # TODO: if there's time, refactor using mass assignment
  def initialize(id, title, genre, price)
    @id = id
    @title = title
    @genre = genre
    @price = price

    # TODO: replace with database!
    # @@all << self
  end

  def save
    sql = "INSERT INTO games (title, genre, price) VALUES (?, ?, ?);"
    DB[:conn].execute(sql, self.title, self.genre, self.price)
  end

  # TODO: replace with database!
  def self.all
    # @@all
    sql = "SELECT * FROM games;"
    results = DB[:conn].execute(sql)

    results.map do |row|
      Game.new(row["id"], row["title"], row["genre"], row["price"])
    end
  end

end