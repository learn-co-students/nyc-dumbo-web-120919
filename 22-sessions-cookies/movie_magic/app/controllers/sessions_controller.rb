class SessionsController < ApplicationController
  def reset_session
    session[:cookie_counter] = 3
    
    # redirect_to movies_path
    redirect_back fallback_location: movies_path
  end 
end 