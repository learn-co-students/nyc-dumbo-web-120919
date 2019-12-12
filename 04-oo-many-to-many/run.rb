require 'pry'
require_relative 'models/alien_species'
require_relative 'models/colony'
require_relative 'models/planet'


humans = AlienSpecies.new("human", "all of them", "iPhones", "good & evil")
kryptonian = AlienSpecies.new("Kryptonian", "sounds like English", "Rockets & crystals", "passionate")

earth = Planet.new("earth", "all kinds")
mars = Planet.new("mars", "dusty")
jupiter = Planet.new("jupiter", "gassy")

nyc = Colony.new("nyc", 8_000_000, earth, humans)
skrull = Colony.new("skrull", 8_000_000, jupiter, humans)
district9 = Colony.new("district 9", 500, earth, kryptonian)

binding.pry
"ok"