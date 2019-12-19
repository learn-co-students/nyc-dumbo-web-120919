require_relative "../config/environment"

class Clown
  attr_accessor :name, :age, :fears, :skill

  def initialize(args_hash)
    args_hash.each do |key, value|
      self.send("#{key}=", value)
    end
  end

end

krusty = Clown.new(age: 2, name: "Krusty", fears: "Children", skill: "Juggling Chainsaws")

binding.pry
"yay"