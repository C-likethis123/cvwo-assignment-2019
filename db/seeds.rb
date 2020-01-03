# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Creating lists
# lists = [['Dailies', 1], ['One off tasks', 2]] 
# lists.each{|list| List.create({title: list[0], key: "#{list[1]}"})}

# Creating To Dos
# lists = List.all
# for i in 0...2
#     for j in 0...5
#         lists[i].tasks.create(
#             {title: "Do something #{j}",
#             description: "Description #{j}",
#             deadline: DateTime.now,
#             isCompleted: false,
#             isDailies: lists[i].title == 'Dailies',
#             tags: "do now, something else"})
#     end
# end