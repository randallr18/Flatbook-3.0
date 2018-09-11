class Api::V1::ReviewLikesController < ApplicationController


  def create
    @review_like = ReviewLike.create(review_like_params)
    if @review_like.valid?
      @reviews = Review.all
      render json: @reviews, include: '*.*'
    else
    render json: { error: "Unsuccessful update"}
    end
  end

  private

  def review_like_params
    params.require(:review_like).permit(:user_id, :review_id)
  end

end
