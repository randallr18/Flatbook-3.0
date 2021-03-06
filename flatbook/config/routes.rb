Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :reviews, only: [:index, :create]
      resources :users, only: [:show, :update]
      resources :projects, only: [:index, :create]
      resources :review_likes, only: [:create]
      resources :comments, only: [:create]
      post '/login', to: 'auth#create'
      post '/signup', to: 'users#create'
      get '/profile', to: 'users#profile'
    end
  end
end





# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
