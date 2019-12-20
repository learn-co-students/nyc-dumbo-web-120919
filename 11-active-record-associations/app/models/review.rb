class Review < ActiveRecord::Base
  belongs_to :game

  # def game
  #   # Game.all.find do |game_instance|
  #   #   game_instance.id == self.game_id
  #   # end
  #   Game.find_by(id: self.game_id)
  # end

  belongs_to :player
  # def player
  #   # Game.all.find do |game_instance|
  #   #   game_instance.id == self.game_id
  #   # end
  #   Player.find(self.player_id)
  # end

end