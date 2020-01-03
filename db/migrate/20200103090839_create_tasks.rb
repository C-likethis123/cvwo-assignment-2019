class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.datetime :deadline
      t.boolean :isCompleted
      t.string :tags
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
