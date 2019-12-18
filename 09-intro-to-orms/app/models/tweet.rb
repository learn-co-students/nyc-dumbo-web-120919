class Tweet
  attr_accessor :username, :message

  @@all = []

  def initialize(username, message)
    @username = username
    @message = message

    # TODO: replace with database!
    @@all << self
  end

  # TODO: replace with database!
  def self.all
    @@all
  end

end