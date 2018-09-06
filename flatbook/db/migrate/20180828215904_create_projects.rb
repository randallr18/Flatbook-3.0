class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :category
      t.string :description
      t.date :date
      t.string :github

      t.timestamps
    end
  end
end
