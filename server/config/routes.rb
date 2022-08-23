Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_scope :admin do
        post '/sign_up', to: 'registrations#create'
        post '/sign_in', to: 'sessions#create'
        delete '/sign_out', to: 'sessions#destroy'
      end
    end
  end
end
