class WordSerializer < ActiveModel::Serializer
  attributes :id, :content, :category
  has_many :definitions

end
