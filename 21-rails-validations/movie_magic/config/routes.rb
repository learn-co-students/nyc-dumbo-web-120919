Rails.application.routes.draw do
  resources :reviews
  resources :users
  resources :movies #, only: [:index, :show, :new, :create, :edit, :update]
  # resources :movies, except: [:delete]


  # HTTP Verb   URL   Controller#Action
  # get '/movies', to: 'movies#index', as: 'movies
  # get '/movies/:id', to: 'movies#show', as: 'movie'
  # get '/movies/new', to: 'movies#new', as: 'new_movie'
  # post '/movies', to: 'movies#create'
  # get '/movies/:id/edit', to: 'movies#edit'
  # patch '/movies/:id', to: 'movies#update'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
