class Cat < Animal
  include MammalMobility

  attr_reader :number_of_lives
  # attr_reader :name
  # attr_accessor :mood
  
  def initialize(name, number_of_lives)
    puts "Cat INIT"
    super(name)
    # Animal#initialize(name)
    @number_of_lives = number_of_lives
  end

  def speak 
    super
    puts "Meow my name is #{self.name}"
  end
end
