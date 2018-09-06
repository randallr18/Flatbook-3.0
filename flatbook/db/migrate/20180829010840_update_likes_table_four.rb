class UpdateLikesTableFour < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :likes, :reviews
  end
end
