class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :sandwiches

  def sandwiches
    
    # self => Instance of a UserSerializer
    # self.object => User instance

    self.object.reviews.map do |review|
      SandwichSerializer.new(review.sandwich).as_json.merge(review.serialized)
    end
  end

end
