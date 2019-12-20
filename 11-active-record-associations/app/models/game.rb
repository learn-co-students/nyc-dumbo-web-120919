class Game < ActiveRecord::Base

  has_many :reviews
  has_many :players, through: :reviews

  # def reviews
  #   # 1. For a species, find all the colonies
  #   # access the single source of truth for the colonies
  #   # find the the colonies that are belong to this alien species
  #   Review.all.select do |review_instance|
  #     review_instance.game_id == self.id
  #   end
  # end

  # def players
  #   # 2. For those colonies, get the planet's info
  #   self.reviews.map do |review|
  #     review.player
  #   end
  # end

  # CRUD
  # Create
  # Game.new - creates a new Ruby instance
  # Game#save - save to the database
  # Game.create - new + save

  # Read
  # Game.all - return a collection of all games from the database
  # Game.first/last - get one instance
  # Game.find(:id) - returns one instance
  # Game.find_by(title: "Stardew Valley") - finds one instance by any attribute
  # Game.where - take a sting of SQL or a hash and return all thing that match

  # Update
  # Game#save - if the record has an id, it will update the game
  # Game#update - takes a hash and updates the database
  # Game.update - takes a hash and updates all records in the database for this table

  # Delete
  # Game#destroy - delete one row
  # Game.destroy_all - delete all rows for this table

end