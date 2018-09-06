class Api::V1::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render json: @reviews, include: '*.*'
  end
  
end
