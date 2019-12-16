# To Review
- has many/belongs to
- passing instances of classes as arguments to methods
- Single Source of Truth
- Deliverables: how read deliverables, understand what kind of data they should return
- Testing code using `binding.pry` - debugging inside of methods - also show using `puts`/`p` to test data

# Common Issues
- initializing a Book with a string for the author name -> doesn't meet the requirementst for the domain (a book _belongs to_ an author instance)
  - `Book.new("Title", "Author", 100)` -> not gonna work :(
- creating an array of books as an instance variable in the Author class -> Violates single source of truth
  - `@books = []` -> this means we have to keep track of multiple arrays of books, not gonna work :(
- `map` vs `select`
  - Using map to filter a list -> not gonna work :(
  - Using select to transform a list -> not gonna work :(

# Mini Mock Code Challenge

The topics covered in each module build upon the topics covered in the last.  For example, in Module 2 you will learn about the Ruby on Rails framework. To build an application in Rails one should have a solid foundation in Ruby.  In Module 3, covering JavaScript, you will continue to use Rails as a backend and build upon the foundations of how web applications work covered in Module 2. Learning React in Module 4 will require understanding of both functional and object oriented JavaScript.

But we're getting ahead of ourselves...

We understand that the idea of the Code Challenges can be **stressful**. We're not trying to unduly stress you out, we swear. So what's the point?

## What's the point?

Flatiron did not always have this structure of modules and code challenges.  One problem of that previous structure was that because of the way the course builds upon the previous material, if a student ever got behind during a particular week, as the class continued on to the next week and then the next, it became impossible for a student to catch up.  In the end, some students had to essentially re-do large sections of the curriculum after the course was over with more limited instructor support and without the daily classroom structure.  This is much more difficult  and ultimately takes many more weeks than if there was the opportunity for a student to pause, focus on the current material and shore up any misundersrandings, and then proceed.

The utility of the challenges is that they provide a built-in moment to review the major topics covered in the current unit.   When the code from a challenge is being looked at by instructors, they are looking for indicators of understanding of the main principles taught in the module. The guiding idea is:

- **Will this student be successful moving forward into the next module?**

The point of a code challenge is **NOT** to:

- Stump students with a trick question
- 'Grade' the results in the sense of '-3 points here, which means this student has received an 82%'
- Penalize for every small mistake.  Having functioning code will make your job significantly easier as you complete the challenge because you will be able to _run and test your work_. Having said that, if there is one feature that you couldn't get working and it is apparent from your work that you were attempting to do the right thing but made a small syntax error somewhere, the instructors may still be able to determine that you demonstrated your understanding of the material.

## Mock Challenge

_Do not expect every module to have a mock version of the code challenge. We are providing an example for the first module only as a way to familiarize you with the feel and structure of our code challenges. We want to remove some of the stress leading up to the first code challenge so that the results can be more indicative of what you have learned and less about how you may handle 'exam stress'.  Generally, we are careful not to 'teach to the test' and while we will be able to indicate what are the main areas to focus on we will not provide an example version of the code challenge_

The information below is what you might expect to see when taking a new code challenge. One point of note is that the code challenges _will not have tests_.  This is intentional. It is really important to practice writing and running code outside of the framework of the labs and tests. 

## Topics

- Classes and Instances
- Object Relationships
- Single Source of Truth
- Array methods
- Class methods

## Notes

You will be building out an application that can track Authors and Books. For our purposes, assume that all books are written by one-- and only one-- author. Your goal is to build out all of the methods listed below in the deliverables. Do your best to follow Ruby best practices. For example, use higher-level array methods such as map, select, and find when appropriate in place of each. Be sure to consider whether your implementation reflects the principle of Single Source of Truth.

We've provided you with a console that you can use to test your code. To enter a console session, run `ruby console.rb`. You'll be able to test out the methods that you write here.

Author -< Book


## Deliverables

### `Book`
Build the following methods on the Book class

- `Book.all`
should return all of the books
- `Book#author`
should return the `author instance` who wrote this book
- `Book#title`
should return the title of the book
- `Book#word_count`
should return the number of words in the book

### `Author`
Build the following methods on the Author class

- `Author.all`
should return all of the authors
- `Author#name` -> return the author's name
- `Author#books`
should return all of the books an author has written
- `Author#write_book`
should take arguments of a title and word count and make a new Book instance associated with this author
- `Author#total_words`
should return the total number of words that author has written across all of their authored books.
- `Author.most_words`
should return the author instance who has written the most words

