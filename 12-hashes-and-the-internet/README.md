# Hashes and the Internet

### Define

* Request / Response
* GET requests
* Server responses
* Developer console
* APIs
- Application Programming Interface

class Book
  def title
    @title
  end

  private
  def something
    "something else"
  end

end

* JSON

### Deliverables

* Write an application that takes a search term from a user
* Make a Request to the GoogleBooks API and get back some results
  * Docs: https://developers.google.com/books/docs/v1/using#PerformingSearch
  * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
* Display the titles, author names joined by an &, and first 100 characters of the description for each book
