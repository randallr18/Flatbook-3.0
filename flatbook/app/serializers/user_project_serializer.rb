class UserProjectSerializer < ActiveModel::Serializer
  attributes :id
  has_many :users
  has_many :projects
end
