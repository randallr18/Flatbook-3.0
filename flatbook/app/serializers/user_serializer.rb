class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :birth_date, :hometown, :story, :fun_fact, :occupation, :pictures
end
