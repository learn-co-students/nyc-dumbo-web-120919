Rails.application.routes.draw do
  post "/login", to: "users#login"
  get "/persist", to: "users#persist"
  resources :users, only: [:create, :show]
  resources :sandwiches, only: [:index]
  resources :reviews, only: [:create]



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
