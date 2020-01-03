class AddIsDailyToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :isDailies, :boolean
  end
end
