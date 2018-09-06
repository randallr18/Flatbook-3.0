class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:show]
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      payload = {user_id: @user.id}
      token = encode_token(payload)
      render json: { user: UserSerializer.new(@user), jwt: token }
    else
      render json: { error: "Invalid username or password"}
    end
  end

  def show
    render json: @user
  end


  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
