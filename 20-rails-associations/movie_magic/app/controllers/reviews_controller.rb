class ReviewsController < ApplicationController
  def new 
    @review = Review.new
    @movies = Movie.all
    @users = User.all

    render :new
  end 

  def create 
    Review.create(review_params)

    redirect_to movie_path(params[:review][:movie_id])
  end 

  private 
  
  def review_params
    params.require(:review).permit(:content, :rating, :user_id, :movie_id)
  end 

end
