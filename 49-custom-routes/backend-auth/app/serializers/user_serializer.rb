class UserSerializer < ActiveModel::Serializer
  attributes :username, :past_orders

  def past_orders
    []
  end

end
