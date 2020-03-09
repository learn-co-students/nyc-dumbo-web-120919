eric = User.create(username: "Eric", password: "123")
mazen = User.create(username: "Mazen", password: "123")

5.times do
  Sandwich.create(name: Faker::Food.dish)
end

2.times do
  Review.create(user: eric, sandwich: Sandwich.all.sample, rating: rand(5))
end

3.times do
  Review.create(user: mazen, sandwich: Sandwich.all.sample, rating: rand(5))
end
