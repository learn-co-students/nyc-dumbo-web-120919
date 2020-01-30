require 'rest-client'
require 'json'
require 'pry'

puts "Getting you a pokemon..."
response = RestClient.get("https://pokeapi.co/api/v2/pokemon/1/")
pokemon = JSON.parse(response)

puts "Your pokemon is: #{pokemon["name"]}"