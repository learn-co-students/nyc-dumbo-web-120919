class Cult
  attr_reader :name, :location, :founding_year, :slogan, :minimum_age
  
  @@all = []

  def initialize(name, location, founding_year, slogan, minimum_age)
    @name = name
    @location = location
    @founding_year = founding_year
    @slogan = slogan
    @minimum_age = minimum_age

    @@all << self
  end

  # * takes in an argument of a `Follower` instance and adds them to this cult's list of followers
  # * NOW this is changed such that if the given `Follower` instance is not of age:
  # * do not let them join the cult
  # * print out a friendly message informing them that they are too young
  def recruit_follower(follower)
    if follower.age >= self.minimum_age
      BloodOath.new("2019-12-13", self, follower)
    else
      puts "You're too young for this cult!"
    end
  end

  def cult_population
    self.followers.length
  end

  # helper method for finding all the blood oaths for this cult
  def blood_oaths
    BloodOath.all.select do |blood_oath|
      blood_oath.cult == self
    end
  end
  
  # helper method for finding all the followers for this cult
  def followers
    all_followers = self.blood_oaths.map do |blood_oath|
      blood_oath.follower
    end
    # if we wanted to make sure this returns a UNIQUE array of followers, we could do:
    all_followers.uniq
  end

  # returns a `Float` that is the average age of this cult's followers
  def average_age
    # get the total age
    total_ages = self.followers.sum do |follower|
      follower.age
    end
    # you could also write the block above out using two steps, first get an array of ages and then get the sum:
    # follower_ages = self.followers.map do |follower|
    #   follower.age
    # end
    # total_ages = follower_ages.sum
    
    # convert to a Float 
    total_ages.to_f / cult_population
  end

  # prints out all of the mottos for this cult's followers
  def my_followers_mottos
    self.followers.each do |follower|
      puts follower.life_motto
    end
  end

  # class methods
  def self.all
    @@all
  end

  # takes a `String` argument that is a name and returns a `Cult` instance whose name matches that argument
  def self.find_by_name(name)
    self.all.find do |cult|
      cult.name == name
    end
  end

  # takes a `String` argument that is a location and returns an `Array` of cults that are in that location
  def self.find_by_location(location)
    self.all.select do |cult|
      cult.location == location
    end
  end

  # takes a `Fixnum` argument that is a year and returns all of the cults founded in that year
  def self.find_by_founding_year(year)
    self.all.select do |cult|
      cult.founding_year == year
    end
  end
  
  # * returns the `Cult` instance who has the least number of followers :(
  def self.least_popular
    # you could sort the cults by their population and then return the first element from the sorted array
    # sorted_cults = self.all.sort_by do |cult|
    #   cult.cult_population
    # end
    # sorted_cults[0]

    # min_by is a little more efficient, it will return the smallest thing from an array
    self.all.min_by do |cult|
      cult.cult_population
    end
  end

  # returns a `String` that is the location with the most cults
  def self.most_common_location
    # this one is tricky! 
    # # one approach: set up a hash to count each location
    # locations = {}
    # self.all.each do |cult|
    #   if !locations[cult.location]
    #     locations[cult.location] = 1
    #   else
    #     locations[cult.location] += 1
    #   end
    # end
    # # then find the location with the highest count
    # most_common_location = locations.max_by do |location, count|
    #   count
    # end
    # # this will return an array with [location, count] - we just want the location:
    # most_common_location[0]

    # https://ruby-doc.org/core-2.6.5/Enumerable.html#method-i-group_by
    # Ruby also has a group_by method that we can use set up the hash grouped by location:
    location_hash = self.all.group_by do |cult| 
      cult.location 
    end
    # put a binding.pry here to see what location_hash has in it!
    # once we have the hash, we want to find the location with the most cults
    most_common_location = location_hash.max_by do |location, cults| 
      cults.count 
    end
    # # this will return an array with [location, count] - we just want the location:
    most_common_location[0]
  end

end