require 'rest-client'
require 'json'
require 'pry'

puts "Welcome to our cool app"
sleep(1)

response = RestClient.get("https://pokeapi.co/api/v2/pokemon/1/")
sleep(3)
pokemon = JSON.parse(response)

puts "Your pokemon is: #{pokemon["name"]}"