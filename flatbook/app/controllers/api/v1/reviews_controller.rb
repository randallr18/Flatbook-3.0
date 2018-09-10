class Api::V1::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render json: @reviews, include: '*.*'
  end

  def create
    @review = Review.create(review_params)
    if @review.valid?
      @reviews = Review.all
      render json: @reviews, include: '*.*'
    else
    render json: { error: "Unsuccessful update"}
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :category, :body, :user_id)
  end

end
