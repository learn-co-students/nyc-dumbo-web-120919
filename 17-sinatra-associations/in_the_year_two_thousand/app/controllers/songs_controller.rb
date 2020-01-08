class SongsController < ApplicationController
  
  #INDEX action/method
  get "/songs" do
    @songs = Song.all
    erb :"songs/index"
  end

  #NEW action/method
  get "/songs/new" do 
    erb :"songs/new" 
  end 

  #SHOW action/method
  get "/songs/:id" do
    @song = Song.find(params[:id])
    erb :"songs/show"
  end

  #CREATE action/method
  post "/songs" do 
    song = Song.create(params)

    redirect to "/songs/#{song.id}"
  end

  #EDIT action/method
  get "/songs/:id/edit" do
    @song = Song.find(params[:id])

    erb :"songs/edit"
  end

  #UPDATE action/method
  patch  "/songs/:id" do 
    song = Song.find(params[:id])
    song.update(params[:song])

    redirect to "/songs/#{song.id}"
  end

  #DELETE action/method
  delete '/songs/:id' do
    song = Song.find(params[:id])
    song.destroy 

    redirect to "/songs"
  end

end
