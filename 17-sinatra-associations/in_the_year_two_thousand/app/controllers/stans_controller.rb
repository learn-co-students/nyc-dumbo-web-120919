class StansController < ApplicationController
  get '/stans' do
    @stans = Stan.all
    erb :"stans/index"
  end

  get '/stans/new' do
    @songs = Song.all

    erb :"stans/new"
  end

  post '/stans' do  
    Stan.create(params)
    
    redirect to "/stans"
  end 
end
