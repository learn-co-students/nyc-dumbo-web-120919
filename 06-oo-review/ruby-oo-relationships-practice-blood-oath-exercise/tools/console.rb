require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

# Cult.new(name, location, founding_year, slogan)
c1 = Cult.new("Ian", "Mod 1", 2019, "OOPs")
c2 = Cult.new("Eric", "Mod 3", 2019, "razzamataz")
c3 = Cult.new("Graham", "Mod 4", 2019, "graham is nice")
c4 = Cult.new("Leizl", "Mod 4", 2019, "vacay")

# Follower.new(name, age, life_motto)
f1 = Follower.new("Gracie", 100, "magic")
f2 = Follower.new("Mazen", 101, "octopus")
f3 = Follower.new("Rei", 102, "small stuff matters")

# BloodOath.new(initiation_date, cult, follower)
b1 = BloodOath.new("2019-12-10", c1, f1)
b2 = BloodOath.new("2019-12-11", c1, f2)
b3 = BloodOath.new("2019-12-12", c2, f3)
b4 = BloodOath.new("2019-12-03", c3, f2)

binding.pry

puts "Mwahahaha!" # just in case pry is buggy and exits
