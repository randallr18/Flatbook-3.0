class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_many :comment_likes
  belongs_to :user
end
