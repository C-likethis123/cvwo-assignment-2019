class RemoveListIndexFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_index :users, :list_id
    remove_column :users, :list_id
  end
end
