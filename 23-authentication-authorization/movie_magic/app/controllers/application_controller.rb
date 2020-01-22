class ApplicationController < ActionController::Base
  before_action :current_user
  before_action :authorize


  private 
  
  def current_user
    @logged_in_user = User.find_by(id: session[:user_id]) 
  end 

  def authorize
    if @logged_in_user 
      #do the normal thing
    else
      flash[:errors] = ["you need to be logged in to preform that action"] 

      redirect_to login_path
    end 
  end 

end
