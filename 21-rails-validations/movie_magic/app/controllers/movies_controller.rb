class MoviesController < ApplicationController
  before_action :find_movie, only: [:show, :edit, :update, :destroy]

  def index
    @movies = Movie.all
    render :index
  end

  
  def show 
    # @movie = Movie.find(params[:id])
   
    # render :show
  end 

  def new 
    @movie = Movie.new

    @users = User.all
    @reviews = @movie.reviews
    # render :new
  end 

  def create  
    @movie = Movie.create(movie_params)

    if @movie.valid?
      redirect_to movie_path(@movie.id)
    else 
      flash[:errors] = @movie.errors.full_messages
      
      redirect_to new_movie_path #"/movies/new"
    end 
  end 

  def edit 
    # @movie = Movie.find(params[:id])

    render :edit
  end 

  def update 
    # @movie = Movie.find(params[:id])
    if @movie.update(movie_params)
      redirect_to movie_path(@movie.id)
    else 
      flash[:errors] = @movie.errors.full_messages
      
      redirect_to edit_movie_path #"/movies/new"
    end 
    # redirect_to movie
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
