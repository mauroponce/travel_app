Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create] do
        collection do
          get :logged_in
          delete :logout
        end
      end
      resources :registrations, only: [:create]
      resources :trips
    end
  end
end
