students = ["Jessica Natovich", "Annie Liao", "Angelo Poole", "Thomas Donovan", "Radouane Bahi", "Joel  Bly", "Shaquille Clarke", "Alison Quaglia", "Summer Rizzo", "Kevin Gleeson", "Sean Welsh Brown", "David Cha", "Elizabeth Kim", "Jeremy Perry", "Isaac Avilez", "Monsur Khan"]
consoles = ["Switch", "XBox", "PS4", "PC"]
puts "Seeding players..."
students.each do |student|
  # create a new Player for each student in the students array
  Player.create(
    name: student,
    age: rand(1..18),
    console: consoles.sample
  )
end

# TODO: add Faker gem
