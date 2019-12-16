class Author
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  # should return all of the books an author has written
  def books
    Book.all.select do |book_instance|
      book_instance.author == self
    end
  end

  # should take arguments of a title and word count and make a new Book instance associated with this author
  def write_book(title, word_count)
    Book.new(self, title, word_count)
  end

  # should return the total number of words that author has written across all of their authored books.
  def total_words
    # get all the books this author has written
    # word_counts = []
    # # get all the word counts for this author's books
    #   # create an array to store the word counts
    # self.books.each do |book_instance|
    #   word_counts << book_instance.word_count
    # end

    # # add them up (add to total)
    # total_words = 0
    # word_counts.each do |word_count|
    #   total_words += word_count
    # end

    # total_words = 0
    # self.books.each do |book|
    #   total_words += book.word_count
    # end
    # total_words

    # self.books.sum(&:word_count)

    # total_words
    word_counts = books.map do |book_instance|
      book_instance.word_count
    end
    word_counts.sum
  end

  # should return the author instance who has written the most words
  def self.most_words
    # sort_by
    # sorted_authors = self.all.sort_by do |author_instance|
    #   author_instance.total_words
    # end
    # sorted_authors[-1]

    # max_by
    self.all.max_by do |author_instance|
      author_instance.total_words
    end
  end

  def self.all
    @@all
  end 

end

### `Author`
# Build the following methods on the Author class

# - `Author#total_words`
# should return the total number of words that author has written across all of their authored books.
# - `Author.most_words`
# should return the author instance who has written the most words