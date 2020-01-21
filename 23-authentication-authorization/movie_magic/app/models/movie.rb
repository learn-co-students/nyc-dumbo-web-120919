class Movie < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

  # accepts_nested_attributes_for :reviews

  # validates :title, :release_year, presence: true


  
  # validates :title, uniqueness: {case_sensitive: false}
  # validates :release_year, numericality: {less_than: 2010, greater_than_or_equal_to: 2000}

  # validate :movie_cant_equal_a_hashtag

  def movie_cant_equal_a_hashtag
    if self.title && self.title == "#"
      self.errors.add(:title, "Thats not a real title!!!!!!!!")
    end 
  end 

end
