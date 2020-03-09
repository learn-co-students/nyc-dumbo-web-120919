class Review < ApplicationRecord
  belongs_to :sandwich
  belongs_to :user

  def serialized
    {review_id: self.id, rating: self.rating}
  end

end
