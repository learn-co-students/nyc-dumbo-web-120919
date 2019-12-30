# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

require 'rest-client'
# faraday, httparty
# require 'json'
require 'pry'

# * Write an application that takes a search term from a user
puts "Welcome to our Book Searcher!"
puts "Please enter a search term:"
search_term = gets.chomp

# * Make a Request to the GoogleBooks API and get back some results
url = "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"

response = RestClient.get url
body = response.body
parsed_body = JSON.parse(body)

# * Display the titles, author names joined by an &, and first 100 characters of the description for each book
books = parsed_body["items"]
books.each do |book_hash|
  title = book_hash["volumeInfo"]["title"]
  authors = book_hash["volumeInfo"]["authors"]
  description = book_hash["volumeInfo"]["description"]

  if authors.nil?
    author_text = "No Authors"
  else
    author_text = authors.join(" & ")
  end

  if description.nil?
    description_text = "No description"
  else
    description_text = description[0...100]
  end

  puts "Title: #{title}"
  puts "Author: #{author_text}"
  puts "Description: #{description_text}..."
  puts "*" * 15
end

#   * Docs: https://developers.google.com/books/docs/v1/using#PerformingSearch
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming