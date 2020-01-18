Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do 
     resources :lists, only: [:index, :create, :update, :destroy] do
      resources :tasks, only: [:index, :create, :update, :destroy]
     end
    end 
  end

  root to: 'home#index'
  get '/signup', to: 'home#signup'
end
