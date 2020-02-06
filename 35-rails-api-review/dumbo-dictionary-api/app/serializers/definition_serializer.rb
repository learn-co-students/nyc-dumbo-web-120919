class DefinitionSerializer < ActiveModel::Serializer
  attributes :id, :body, :part_of_speech, :likes
  
end
