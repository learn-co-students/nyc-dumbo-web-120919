class SnacksController < ApplicationController
  before_action :authorized, only: [:create]

  def create
    @snack = @user.snacks.create(snack_params)
    # @snack = Snack.new(snack_params)
    # @snack.user = @user
    # @snack.save

    render json: @snack
  end


  private

  def snack_params
    params.permit(:name)
  end


end
