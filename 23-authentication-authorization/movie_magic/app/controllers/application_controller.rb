class ApplicationController < ActionController::Base
  before_action :current_user


  private 
  
  def current_user
    @logged_in_user = User.find_by(id: session[:user_id]) 
  end 

end
