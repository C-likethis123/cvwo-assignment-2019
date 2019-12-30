class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string :key
      t.string :title

      t.timestamps
    end
  end
end
