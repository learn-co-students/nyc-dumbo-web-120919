class BloodOath
  attr_reader :initiation_date, :cult, :follower
  
  @@all = []

  def initialize(initiation_date, cult, follower)
    @initiation_date = initiation_date
    @cult = cult
    @follower = follower

    @@all << self
  end

  # class methods

  def self.all
    @@all
  end

  # returns the `Follower` instance for the follower that made the very first blood oath
  def self.first_oath
    first_oath = self.all.min_by do |blood_oath|
      blood_oath.initiation_date
    end
    first_oath.follower
  end
end
