Rails.application.routes.draw do
  post "/users/history", to: "users#history"
  resources :orders, only: [:create]

  resources :burgers, only: [:index]
  resources :users, only: [:create, :show]
  post "/login", to: "users#login"
  get "/persist", to: "users#persist"

end
