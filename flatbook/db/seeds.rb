# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(name: 'John', birth_date: '05/01/1999', hometown: 'Detroit' , story: 'CODER IN THE MAKING', fun_fact: 'Dated Kloe Kardasion', occupation: 'Coder', username: "sarah@gmail.com", password: "sarah")
user2 = User.create(name: 'Sarah', birth_date: '01/18/1989', hometown: 'Houston', story: 'Learning to code', fun_fact: 'Won bingo', occupation: 'Software Engineer' )
user3 = User.create(name: 'DAVE', birth_date: '01/04/1993', hometown: 'Los Angelos', story: 'Codin', fun_fact: 'Has 9 toes', occupation: 'Coder')
user4 = User.create(name: 'Michael JORRDAN', birth_date: '01/01/1995', hometown: 'Managua', story: 'Fealt like codin' , fun_fact: 'Climed Everest', occupation: 'Coder' )
user5 = User.create(name: 'The Dude', birth_date: '11/09/1900', hometown: 'Buenos Aires', story: 'Its all in the code', fun_fact: 'Won a hot dog eating contest', occupation: 'Coder', username: "dude@gmail.com", password: "dude")


review1 = Review.create(body:'Mod one is tough', title: 'Trials and Tribulations', category: 'Modules', sub_category: 'Module 1', user_id: user1, date: '01/03/2018')
review2 = Review.create(body:'Mod two is nice', title: 'RELAx', category: 'Modules', sub_category: 'Module 2', user_id: user1.id, date: '01/05/2018')
review3 = Review.create(body:'I made it', title: 'SHEEESH', category: 'Modules', sub_category: 'Module 3', user_id: user2.id, date: '01/06/2018')
review4 = Review.create(body:'Interviewing is important but not fun', title: 'The Gotlet', category: 'Interview', sub_category: 'Module 1', user_id: user3.id, date: '01/08/2018')
review5 = Review.create(body:'Product management is overrates', title: 'Be Careful Fellow Coders', category: 'Career', sub_category: 'Module 1', user_id: user4.id, date: '01/05/2018')
review6 = Review.create(body:'CTO is nice', title: 'The Dream', category: 'Career', sub_category: 'Module 1', user_id: user3.id, date: '01/05/2018')
review7 = Review.create(body:'Mod 5 is the SHIT', title: 'Finishing Strong', category: 'Modules', sub_category: 'Module 5', user_id: user5.id, date: '01/05/2018')

project1 = Project.create(name: 'BBALL', category: 'Rails', description: 'Basketball analytics', date: '05/06/2018')
project2 = Project.create(name: 'Cats and Dogs', category: 'React', description: 'Understanding the beaty of cats and dogs', date: '05/01/2018')
project3 = Project.create(name: 'Movies Reviews', category: 'JavaSctipt', description: 'Measuring Monotonous Movies', date: '05/12/2018')
project4 = Project.create(name: 'READIN', category: 'Ruby', description: 'Reviews for the common man OR woman', date: '05/15/2018')
project5 = Project.create(name: 'Karadasion Krazies', category: 'Node-JS', description: 'In depth analysis of the Kardasions', date: '05/02/2018')
project6 = Project.create(name: 'Dalian Thinking', category: 'Rails', description: 'Creating effective teams', date: '05/03/2018')

comment1 = Comment.create(body: 'I agree', review_id: review2.id, user_id: user1.id)
comment2 = Comment.create(body: 'I agree', review_id: review4.id, user_id: user2.id)
comment3 = Comment.create(body: 'I agree', review_id: review2.id, user_id: user3.id)
comment4 = Comment.create(body: 'I agree', review_id: review1.id, user_id: user4.id)
comment5 = Comment.create(body: 'I disagree', review_id: review3.id, user_id: user1.id)
comment6 = Comment.create(body: 'I disagree', review_id: review4.id, user_id: user2.id)
comment7 = Comment.create(body: 'I disagree', review_id: review2.id, user_id: user4.id)
comment8 = Comment.create(body: 'I disagree', review_id: review3.id, user_id: user5.id)
comment9 = Comment.create(body: 'I agree', review_id: review1.id, user_id: user1.id)

like1 = ReviewLike.create(user_id: user1.id, review_id: review4.id)
like2 = ReviewLike.create(user_id: user1.id, review_id: review2.id)
like3 = ReviewLike.create(user_id: user1.id, review_id: review1.id)
like4 = ReviewLike.create(user_id: user2.id, review_id: review2.id)
like5 = CommentLike.create(user_id: user2.id, comment_id: comment4.id)
like6 = CommentLike.create(user_id: user3.id, comment_id: comment3.id)
like7 = CommentLike.create(user_id: user4.id, comment_id: comment4.id)
like8 = CommentLike.create(user_id: user4.id, comment_id: comment5.id)
like9 = CommentLike.create(user_id: user4.id, comment_id: comment1.id)
like10 = ProjectLike.create(user_id: user4.id, project_id: project5.id)
like11 = ProjectLike.create(user_id: user4.id, project_id: project1.id)
like12 = ProjectLike.create(user_id: user5.id, project_id: project2.id)
like13 = ProjectLike.create(user_id: user5.id, project_id: project2.id)


user_project1 = UserProject.create(user_id: user1.id, project_id: project1.id)
user_project2 = UserProject.create(user_id: user1.id, project_id: project3.id)
user_project3 = UserProject.create(user_id: user2.id, project_id: project1.id)
user_project4 = UserProject.create(user_id: user2.id, project_id: project2.id)
user_project5 = UserProject.create(user_id: user4.id, project_id: project6.id)
user_project6 = UserProject.create(user_id: user3.id, project_id: project4.id)
user_project7 = UserProject.create(user_id: user5.id, project_id: project4.id)
user_project8 = UserProject.create(user_id: user3.id, project_id: project5.id)
