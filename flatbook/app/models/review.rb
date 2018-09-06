class Review < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :review_likes
  # has_many :comment_likes, through: :comments
end
