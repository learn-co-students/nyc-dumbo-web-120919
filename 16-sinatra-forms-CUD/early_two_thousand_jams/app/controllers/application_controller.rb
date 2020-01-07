require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  #INDEX action/method
  get "/songs" do
    @songs = Song.all
    erb :index
  end

  #NEW action/method
  get "/songs/new" do 
    erb :new 
  end 

  #SHOW action/method
  get "/songs/:id" do
    @song = Song.find(params[:id])
    erb :show
  end

  #CREATE action/method
  post "/songs" do 
    song = Song.create(params)

    redirect to "/songs/#{song.id}"
  end

  #EDIT action/method
  get "/songs/:id/edit" do
    @song = Song.find(params[:id])

    erb :edit
  end

  patch  "/songs/:id" do 
    song = Song.find(params[:id])
    song.update(params[:song])

    redirect to "/songs/#{song.id}"
  end


end
