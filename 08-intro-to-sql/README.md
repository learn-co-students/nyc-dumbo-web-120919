Intro to SQL
===

## SWBATs

* [ ] Explain persistence and the need for using SQL
* [ ] Define SQL
* [ ] Explain the difference between SQLite3 and SQL
* [ ] Explore provided data through SQLite Browser
* [ ] Define CRUD
* [ ] Perform CRUD actions on a single table
* [ ] Perform CRUD actions across related tables

## Outline
* 25 mins: discussion of databases and SQL
* 20 mins: look at a SQL database and write some SQL

## Key Questions
* What can I do with data?
- create insights/manipulate data, analytics
- use it to identify specific users in app
- to make assessments about reality
- ask questions, make changes

* Why is persistence important? How have we been persisting data so far?
- @@all -> in memory in our program, only exists while we run the program
  - the program might go away
  - things in memory are only in one place -> doesn't scale well
  - isn't efficient
  
* What is a (relational) database?
- columns, rows of data -> bunch of spreadsheet
- multiple tables, being able to connect between them

* What kinds of databases are there?
- SQL database -> SQLite, Postgresql, Oracle, MSSQL Server, MySQL
- NoSQL database -> MongoDb (document database), Redis (key-value), GraphQL

* What is SQL?
- Structured Query Language
- Declarative language


* What is CRUD?
Create
Read
Update
Delete

* How does an app like Instagram use CRUD?
Create - posting an image, starting a group chat
Read - scrollin through the feed, reading a Comment on a post/read a message
Update - update profile, change the hashtags on a post, updating bio, profile pics
Delete - delete your account, delete a post

Tweet >- User

tweets
| id | message               | user_id |
----------------------------------------
| 1  | "love me some coffee" | 1       |
| 2  | "yay 4 coffee"        | 1       |

users
| id | username     |
| 1  | "coffee_dad" | 


* (Pair) How can we model the following domain using SQL tables?
  Game -< Review >- Player



## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `game-reviews.db` file from this repo. 
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the games table
```sql
  SELECT *
  FROM games;
```

2. Write the SQL to select the game with the title "Mario Kart 64"
```sql
  SELECT title
  FROM games
  WHERE title = "Mario Kart 64";
```

  2a. Change the query to include all games with the word 'Mario' in their title

```sql
  SELECT *
  FROM games
  WHERE title like "%mario%"
  AND title like '%64%';
```

3. Write the SQL to display an game's titles next to their review ratings
```sql
  SELECT title, genre, rating
  FROM games
  JOIN reviews ON games.id = reviews.game_id
```
  3a. Write the SQL to show the game title, the review rating, and the player's name

```sql
  SELECT title, genre, rating, players.name
  FROM games
  JOIN reviews ON games.id = reviews.game_id
  JOIN players ON players.id = reviews.player_id
```

4. Write the SQL to create a review
