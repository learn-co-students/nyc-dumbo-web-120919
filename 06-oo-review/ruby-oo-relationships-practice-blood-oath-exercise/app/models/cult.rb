class Cult
  attr_reader :name, :location, :founding_year, :slogan
  
  @@all = []

  def initialize(name, location, founding_year, slogan)
    @name = name
    @location = location
    @founding_year = founding_year
    @slogan = slogan

    @@all << self
  end

  def recruit_follower(follower)
    BloodOath.new("2019-12-13", self, follower)
  end

  def cult_population

# 1. Cult, get all the blood oaths that belong to this cult
    bos = BloodOath.all.select do |blood_oath|
      blood_oath.cult == self
    end
    binding.pry
    # each
    # map
    # select
    # find

# 2. From those blood oaths, figure out which followers they belong to
    bos.length
  end

  def self.all
    @@all
  end

end

# * `Cult#cult_population`
#   * returns a `Fixnum` that is the number of followers in this cult
# * `Cult.find_by_name`
#   * takes a `String` argument that is a name and returns a `Cult` instance whose name matches that argument
# * `Cult.find_by_location`
#   * takes a `String` argument that is a location and returns an `Array` of cults that are in that location
# * `Cult.find_by_founding_year`
#   * takes a `Fixnum` argument that is a year and returns all of the cults founded in that year