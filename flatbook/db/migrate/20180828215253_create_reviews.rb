class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body
      t.string :title
      t.string :category
      t.string :sub_category
      t.references :user, foreign_key: true
      t.date :date

      t.timestamps
    end
  end
end
