Rails.application.routes.draw do
  resources :snacks, only: [:index]

  # This is the route to register a user
  resources :users, only: [:create]


  # This is the route to log in a user

  post "/login", to: "users#login"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
