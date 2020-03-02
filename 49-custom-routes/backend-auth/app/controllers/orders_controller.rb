class OrdersController < ApplicationController
  before_action :authorized, only: [:create]

  def create
    # @user comes from `authorized` method
    @order = Order.create(user: @user)
    @order.create_associations_to_these_burgers(params[:burger_ids])

    render json: @order
  end

end
