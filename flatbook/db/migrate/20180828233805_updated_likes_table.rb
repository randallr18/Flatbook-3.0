class UpdatedLikesTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :likes, :reviews_id, :review_id
  end
end
