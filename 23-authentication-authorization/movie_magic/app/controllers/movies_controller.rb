class MoviesController < ApplicationController
  before_action :find_movie, only: [:show, :edit, :update, :destroy]

  def index
    @movies = Movie.all
    # render :index
  end

  
  def show 
    # @movie = Movie.find(params[:id])
    # render :show

    # if cookies[:cookie_counter]
    #   cookies[:cookie_counter] -= 1
    # else 
    #   cookies[:cookie_counter] = 3
    # end 
  
    session[:cookie_counter] ||= 3

    session[:cookie_counter] -= 1

  end 

  def new 
    @movie = Movie.new

    # @errors = flash[:some_errors]
    # render :new
  end 

  def create  
    @movie = Movie.new(movie_params)

    if @movie.save
      redirect_to movie_path(@movie.id)
    else 
      flash[:some_errors] = @movie.errors.full_messages
      
      redirect_to new_movie_path #"/movies/new"
    end 
  end 

  def edit 
    # @movie = Movie.find(params[:id])
    # render :edit
  end 

  def update 
    # @movie = Movie.find(params[:id])
    if @movie.update(movie_params)
      redirect_to movie_path(@movie.id)
    else 
      flash[:errors] = @movie.errors.full_messages
      
      redirect_to edit_movie_path(@movie.id) #"/movies/:id/edit"
    end 
  end 

  def destroy 
    # @movie = Movie.find(params[:id])
    @movie.destroy 

    redirect_to movies_path
  end 
  
  private 

  def movie_params
    params.require(:movie).permit(:title, :overview, :img_url, :vote_count, :vote_average, :release_year)
  end 

  def find_movie
    @movie = Movie.find(params[:id])
  end 

end
