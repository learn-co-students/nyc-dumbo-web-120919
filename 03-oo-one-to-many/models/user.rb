class User
  attr_reader :username
  attr_accessor :bio

  @@all = []

  def initialize(username, bio)
    @username = username
    @bio = bio

    @@all << self
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet_instance|
      tweet_instance.user == self
    end
  end

  # for a given user, find the tweet with the matching message
  def find_tweet_by_message(message)
    Tweet.all.find do |tweet_instance|
      tweet_instance.user == self && tweet_instance.message == message
    end
  end

  def self.all
    @@all
  end
end # end of User class
