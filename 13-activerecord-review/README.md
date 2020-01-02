# Object Relations Practice Code Challenge - Magazines

For this assignment, we'll be working with a Magazine domain.

We have three models: `Magazine`, `Subscription`, and `Reader`.

For our purposes, a `Magazine` has many `Subscription`s, a `Reader` has many `Subscription`s, and a `Subscription` belongs to a `Magazine` and to an `Reader`.

`Magazine` - `Reader` is a many to many relationship.

**Note**: You should draw your domain on paper or on a whiteboard _before you start coding_. Remember to identify a single source of truth for your data.

## Review
- creating a migration
  - following conventions for numbering migrations
- rolling back a migration
  - some gotchas, places where you'd see bugs
- join model: 
  - using find_by with ids
  - working with associations (has many, belongs to)
- iterating through a collection of items coming from the database
  - map/each
- using `rake console`
  - when you have to exit/reload things
  - press `q` to escape
- how to view sql data as a table

## Topics

- Active Record Migrations
- Object Relationships
- Active Record Queryng

## Instructions

To get started, run `bundle install` while inside of this directory.

Build out all of the methods listed in the deliverables. The methods are listed in a suggested order, but you can feel free to tackle the ones you think are easiest. Be careful: some of the later methods rely on earlier ones.

**Remember!** This code challenge does not have tests. You cannot run `rspec` and you cannot run `learn`. You'll need to create your own sample instances so that you can try out your code on your own. Make sure your associations and methods work in the console before submitting.

We've provided you with a tool that you can use to test your code. To use it, run `rake console` from the command line. This will start a `pry` session with your classes defined. You can test out the methods that you write here. You are also encouraged to use the `seeds.rb` file to create sample data to test your models and associations.

Writing error-free code is more important than completing all of the deliverables listed - prioritize writing methods that work over writing more methods that don't work. You should test your code in the console as you write.

Similarly, messy code that works is better than clean code that doesn't. First, prioritize getting things working. Then, if there is time at the end, refactor your code to adhere to best practices. 

**Before you submit!** Save and run your code to verify that it works as you expect. If you have any methods that are not working yet, feel free to leave comments describing your progress.

## What You Already Have

The starter code has migrations and models for the initial `Reader`, `Magazine` and `Subscription` models, and seed data for some `Reader`s and `Magazine`s. The schema currently looks like this: 

#### `readers` Table
| Column      | Type      |
| ------------| ----------|
| name        | String    |
| email       | String    |

#### `magazines` Table
| Column                | Type      |
| -----------           | --------- |
| title                 | String    |

You will need to create the migration for the `subscriptions` table using the attributes specified in the deliverables below.

## Deliverables

Write the following methods in the classes in the files provided. Feel free to build out any helper methods if needed.

Deliverables use the notation `#` for instance methods, and `.` for class methods.

Remember: Active Record give your classes access to a lot of built-in methods! Keep in mind what methods Active Record gives you access to on each of your classes when you're approaching the deliverables below.

### Migrations

Before working on the rest of the deliverables, you will need to create a migration for the `subscriptions` table. 

subscription
- string for the reader instance
- string for the magazine instance
- integer for the price
- timestamps (nice to have)

- A `Subscription` belongs to a `Magazine`, and a `Subscription` also belongs to an `Reader`. In your migration, create any columns your `subscriptions` table will need to establish these relationships.
- The `subscriptions` table should also have a `price` column that stores an integer.

After creating your migration, use the `seeds.rb` file to create instances of your `Subscription` class so you can test your code.

**Once you've set up your `Subscription` class**, work on building out the following deliverables. Use Active Record association macros and Active Record query methods where appropriate.

### Object Relationship Methods

#### Subscription

- `Subscription#reader`
  - should return the `Reader` instance for this subscription
- `Subscription#magazine`
  - should return the `Magazine` instance for this subscription

#### Magazine

- `Magazine#subscriptions`
  - returns a collection of all `Subscription` instances for this magazine
- `Magazine#readers`
  - returns a collection of all `Reader` instances who are subscribed to this magazine

#### Reader

- `Reader#subscriptions`
  - should return a collection of all `Subscription` instances for this reader
- `Reader#magazines`
  - should return a collection of all `Magazine` instances that this reader is subscribed to

**TEST EVERYTHING HERE**

### Aggregate and Association Methods

#### Subscription
- `Subscription#print_details`
  - `puts` a string to the terminal to display the details of the subscription
  - the string should be formatted like this: `{reader name} subscribed to {magazine title} for ${subscription price}`

#### Reader

- `Reader#subscribe(magazine, price)`
  - takes a `magazine` (an instance of the `Magazine` class) and a `price` (integer) as arguments, and creates a new `subscription` in the database associated with the magazine and the reader
- `Reader#total_subcription_price`
  - returns the total price for all the reader's subscriptions
- `Reader#cancel_subscription(magazine)`
  - takes a `magazine` instance and removes the subscription for this reader
  - you will have to delete a row from the `subscriptions` table to get this to work!

#### Magazine

- `Magazine#email_list`
  - returns a `String` of a semi-colon separated list of emails for all the readers subscribed to this magazine
  - the string should be formatted like this: `email1@example.com;email2@example.com;email3@example.com`
- `Magazine.most_popular`
  - returns the `Magazine` instance with the most subscribers


## Rubric

### Active Record Associations

1. No associations, no foreign key on the table.
2. Associations attempted in the model but are incorrect; foreign key is on a table but in the wrong spot.
3. Relationships properly created. Associations lead to the correct behavior but may have used `has_one` or manually written out the methods the macro builds for us.
4. Relationships properly created, save minor mistakes in advanced deliverables. May implement advanced query methods with iterators instead of using built-in methods.
5. Relationships properly created. Advanced query methods use appropriate built-in methods.
