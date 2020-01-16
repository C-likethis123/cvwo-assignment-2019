desc "Edit names of tasks"

task :change_list_name => :environment do
    all_daily_lists = List.where({title: "Dailies"})
    all_daily_lists.update_all(:title => "Daily Tasks")

    all_one_off_lists = List.where({title: "One off tasks"})
    all_one_off_lists.update_all(:title => "One-off Tasks")
end