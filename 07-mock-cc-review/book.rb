class Book
  attr_reader :author, :title, :word_count

  @@all = []

  def initialize(author, title, word_count)
    @author = author
    @title = title
    @word_count = word_count

    @@all << self
  end

  def self.all
    @@all
  end 

end
