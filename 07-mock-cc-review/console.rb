require 'pry'
require_relative './book'
require_relative './author'

a1 = Author.new("Leizl")
a2 = Author.new("Mazen")
a3 = Author.new("Rei")

# Book.new(author, title, word_count)
b1 = Book.new(a1, "The book of Mod 1", 1000)
b2 = Book.new(a1, "How 2 Mod 2", 2000)
b3 = Book.new(a2, "Trips to Bulgaria", 500)
b4 = Book.new(a3, "Pokemon Go for Pros", 1_000_000)

binding.pry
"let's be safe"

