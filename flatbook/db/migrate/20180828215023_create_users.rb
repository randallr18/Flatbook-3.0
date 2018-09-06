class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.date :birth_date
      t.string :hometown
      t.string :story
      t.string :fun_fact
      t.string :occupation
      t.string :pictures

      t.timestamps
    end
  end
end
