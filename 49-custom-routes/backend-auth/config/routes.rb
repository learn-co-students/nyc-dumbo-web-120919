Rails.application.routes.draw do
  resources :burgers, only: [:index]
  resources :users, only: [:create, :show]
  post "/login", to: "users#login"
  get "/persist", to: "users#persist"

end
