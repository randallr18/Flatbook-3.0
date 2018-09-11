class Api::V1::CommentsController < ApplicationController

  def create
    @comment = Comment.create(comment_params)
    if @comment.valid?
      @reviews = Review.all
      render json: @reviews, include: '*.*'
    else
    render json: { error: "Unsuccessful update"}
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :review_id, :body)
  end
end
