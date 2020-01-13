desc "Reset state of completed dailies"

task :restore_dailies => :environment do
    all_tasks = Task.where({isDailies: true})
    all_tasks.update_all(:isCompleted => false)
end