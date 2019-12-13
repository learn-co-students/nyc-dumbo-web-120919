class Follower
  attr_reader :name, :age, :life_motto
  
  @@all = []

  def initialize(name, age, life_motto)
    @name = name
    @age = age
    @life_motto = life_motto

    @@all << self
  end

  def cults

    # 1. get all the blood oaths that belong to this follower
    bos = BloodOath.all.select do |blood_oath|
      blood_oath.follower == self
    end

    # 2. From those blood oaths, figure out which cults they belong to
    bos.map(&:cult)
    # each
    # map
    # select
    # find
  end

  def self.all
    @@all
  end
end

# * `Follower#cults`
#   * returns an `Array` of this follower's cults
# * `Follower#join_cult`
#   * takes in an argument of a `Cult` instance and adds this follower to the cult's list of followers
# * `Follower.of_a_certain_age`
#   * takes a `Integer` argument that is an age and returns an `Array` of followers who are the given age or older