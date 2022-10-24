# frozen_string_literal: true

class Api::V1::RegistrationsController < DeviseTokenAuth::RegistrationsController
  before_action :configure_permitted_parameters

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name])
  end

  def render_create_success
    render json: {
      id: resource_data['id'].to_s,
      name: resource_data['name']
    }
  end

  def render_create_error
    render json: {
      messages: resource_errors[:full_messages]
    }, status: :unprocessable_entity
  end
end
