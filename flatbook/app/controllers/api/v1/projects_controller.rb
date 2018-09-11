class Api::V1::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render json: @projects
  end

  def create
    byebug
    @project = Project.create(project_params)
    @user_project = UserProject.create(user_id: params["user_id"], project_id: @project.id)
    if @project.valid? && @user_project.valid?
      @projects = Project.all
      render json: @projects
    else
    render json: { error: "Unsuccessful update"}
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :category, :github)
  end

  # def user_project_params
  #   params.require(:user_project).permit(:user_id)
  # end

end
