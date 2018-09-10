class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :category
  has_many :review_likes
  has_many :comments
end
