Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do 
     resources :lists, only: [:index, :create, :update, :destroy] do
      resources :tasks, only: [:index, :create, :update, :destroy]
     end
     resources :users, only: [:create]
    end 
  end

  root to: 'home#index'
  get '/signup', to: 'home#signup'
  get '/login', to: 'home#login'
end
