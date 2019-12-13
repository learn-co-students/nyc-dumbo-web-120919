class Animal
  attr_reader :name
  attr_accessor :mood
  
  def initialize(name)
    puts "Animal INIT"
    @name = name
    @mood = "nervous"
  end

  def speak
    puts "Hi i'm an animal"
  end

end