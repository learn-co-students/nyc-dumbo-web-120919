class UsersController < ApplicationController
  before_action :authorized, only: [:persist]

  def show
    # YOUR PROJECTS SHOULD NOT INCLUDE A SHOW ACTION
    @user = User.find(params[:id])
    render json: @user
  end

  def persist
    wristband = encode_token({user_id: @user.id})
    render json: { user: UserSerializer.new(@user), token: wristband }
  end


  def create
    @user = User.create(user_params)
    if @user.valid?
      wristband = encode_token({user_id: @user.id})
      render json: { user: UserSerializer.new(@user), token: wristband }, status: 201
    else
      render json: {message: "NICE TRY"}, status: 401
    end
  end


  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      wristband = encode_token({user_id: @user.id})
      render json: { user: UserSerializer.new(@user), token: wristband }
    else
      render json: {message: "NICE TRY"}, status: 401
    end
  end


  private

  def user_params
    params.permit(:username, :password)
  end

end
