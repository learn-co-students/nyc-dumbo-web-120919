require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  # INDEX action
  get "/songs" do
    @songs = Song.all
    erb :index
  end

# SHOW action
  get '/songs/:id' do
    @song = Song.find(params[:id])
    
    erb :show
  end

end
