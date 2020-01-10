class MoviesController < ApplicationController
  
  def index
    @movies = Movie.all
    render :index
  end

  
  def show 
    @movie = Movie.find(params[:id])
    # render :show
  end 

  def new 
    @movie = Movie.new
    # render :new
  end 

  def create  
    movie = Movie.create(movie_params)

    redirect_to movie_path(movie.id)
  end

  def edit 
    @movie = Movie.find(params[:id])

    render :edit
  end 

  def update 
    movie = Movie.find(params[:id])
    movie.update(movie_params)

    redirect_to movie_path(movie.id)
    # redirect_to movie
  end 
  
  private 

  def movie_params
    params.require(:movie).permit(:title, :genre, :director, :release_year)
  end 
end
