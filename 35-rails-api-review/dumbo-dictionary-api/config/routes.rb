Rails.application.routes.draw do
  resources :definitions, only: [:create]
  resources :words, only: [:index, :create]

  patch "/definitions/:id/upvote", to: "definitions#upvote"
  patch "/definitions/:id/downvote", to: "definitions#downvote"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
