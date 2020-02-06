class Word < ApplicationRecord
  has_many :definitions

  def uppercase_content
    self.content.upcase
  end
end
