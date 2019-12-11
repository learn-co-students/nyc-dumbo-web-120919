require 'pry'

class Clown
  attr_accessor :name, :age, :skills
  # attr_reader :fears

  @@all = []

  def initialize(name, age, skills, fears)
    @name = name
    @age = age
    @skills = skills
    @fears = fears
    
    @@all << self
  end

  def say_hi
    puts "Hello my name is #{self.name}. I'm #{self.age} years old. I'm good at #{self.skills} and terrified of #{self.fears}."
  end

  def fears
    @fears.downcase
  end

  def juggle
    puts "🎳" * 5
  end

  def overcome_fears
    @fears = "NOTHING"
  end

  def self.all
    @@all
  end

  def self.find_by_name(name)
    self.all.find do |clown_instance|
      binding.pry
      clown_instance.name == name
    end
  end

end # end of clown class

Clown.new("Krusty", 55, "Drinking", "Failure")
Clown.new("Pennywise", "eternal", "Stealing Souls", "Children")
Clown.new("Bobo", 21, "Juggling", "self")

binding.pry
0