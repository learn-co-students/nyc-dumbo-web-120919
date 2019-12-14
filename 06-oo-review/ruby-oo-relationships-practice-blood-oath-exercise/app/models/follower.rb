class Follower
  attr_reader :name, :age, :life_motto
  
  @@all = []

  def initialize(name, age, life_motto)
    @name = name
    @age = age
    @life_motto = life_motto

    @@all << self
  end

  # 1. get all the blood oaths that belong to this follower
  # this is a refactor of the code we wrote in the cults method that gives us a helper method for just finding the blood oaths
  def blood_oaths
    BloodOath.all.select do |blood_oath|
      blood_oath.follower == self
    end
  end

  # 2. From those blood oaths, figure out which cults they belong to
  def cults
    # the code on the line below is the same as:
    # self.blood_oaths.map do |blood_oath|
    #   blood_oath.cult
    # end
    self.blood_oaths.map(&:cult)
  end

  # takes in an argument of a `Cult` instance and adds this follower to the cult's list of followers
  def join_cult(cult)
    if self.age >= cult.minimum_age
      BloodOath.new("2019-12-13", self, follower)
    else
      puts "You're too young for this cult!"
    end
  end

  # prints out all of the slogans for this follower's cults
  def my_cults_slogans
    self.cults.each do |cult|
      puts cult.slogan
    end
  end

  # returns a unique `Array` of followers who are in the same cults as you
  def fellow_cult_members
    # we want a list of followers, so SELECT is a good tool
    # .any? will return true or false if ANY elements return true for the block
    # .include? will see if an array includes a given element
    Follower.all.select do |follower|
      follower != self && follower.cults.any? do |cult|
        self.cults.include?(cult)
      end
    end
  end

  # class methods
  def self.all
    @@all
  end

  # takes a `Integer` argument that is an age and returns an `Array` of followers who are the given age or older
  def self.of_a_certain_age(age)
    self.all.select do |follower|
      follower.age >= age
    end
  end

  # returns the `Follower` instance who has joined the most cults
  def self.most_active
    self.all.max_by do |follower|
      follower.cults.count
    end
  end

  # returns an `Array` of followers; they are the ten most active followers
  def self.top_ten
    # sort the followers by the number of cults they've joined
    sorted_followers = self.all.sort_by do |follower|
      follower.cults.count
    end
    # sort from highest to lowest
    sorted_followers = sorted_followers.reverse
    # we want the first 10 from the sorted array
    sorted_followers[0..9]
  end

end
