class ReviewsController < ApplicationController
  before_action :authorized, only: [:create]


  def create
    # byebug
    @review = @user.reviews.create(review_params)
    render json: SandwichSerializer.new(@review.sandwich).as_json.merge(@review.serialized)

  end


  private
  def review_params
    params.permit(:sandwich_id, :rating)
  end

end
