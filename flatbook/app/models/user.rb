class User < ApplicationRecord
  has_many :reviews
  has_many :comments
  has_many :user_projects
  has_many :projects, through: :user_projects
  has_many :review_likes
  has_many :comment_likes
  has_many :project_likes
  has_secure_password

  validates :username, uniqueness: true
end
