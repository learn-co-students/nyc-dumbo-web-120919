class UsersController < ApplicationController

  def index 
    @users = User.all
  end 


  def show
    @user = User.find(params[:id])
  end 

  # ------------------ Added for Authorization --------------

  def new
    @user = User.new 
  end 

  def create 
    user = User.create(user_params)

    if user.valid? 
      session[:user_id] = user.id
      redirect_to user_path(user.id)
    else 
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path
    end 
  end
  
  private 

  def user_params 
    params.require(:user).permit(:name, :img_url, :password)
  end 

end
