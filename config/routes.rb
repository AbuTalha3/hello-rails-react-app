# frozen_string_literal: true

Rails.application.routes.draw do
  root 'roots#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
      get 'random_greeting', to: 'greetings#random'
    end
  end
  # Defines the root path route ("/")
  # root "posts#index"
end
