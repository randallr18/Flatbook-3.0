class UpdateLikesTableThree < ActiveRecord::Migration[5.2]
  def change
    add_reference :likes, :review, index: true
  end
end
