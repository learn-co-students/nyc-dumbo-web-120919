module MyProject
  class Dog < Animal
    include MammalMobility
    attr_reader :fav_toy
    # attr_accessor :mood
    
    def initialize(name, fav_toy)
      super(name)
      @fav_toy = fav_toy
    end
  end
end
