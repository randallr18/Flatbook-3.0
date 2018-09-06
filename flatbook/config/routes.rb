Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :reviews, only: [:index]
      resources :users, only: [:show]
      resources :projects, only: [:index]
      post '/login', to: 'auth#create'
      post '/signup', to: 'users#create'
      get '/profile', to: 'users#profile'
    end
  end
end





# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
