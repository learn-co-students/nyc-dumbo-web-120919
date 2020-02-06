class WordsController < ApplicationController
  def index
    words = Word.all

    render json: words
  end

  def create
    word = Word.create(content: params[:content], category: params[:category])

    render json: word
  end
end
