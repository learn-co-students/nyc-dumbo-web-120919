Active Record Associations
===

## SWBATs
* Explain how Active Record works for non-related models
* Implement one-to-many relationships using Active Record has_many and belongs_to
* Implement many-to-many relationships using Active Record has_many, :through
* Describe the methods that the relationship macros add to a model
* Practice looking up library documentation for Active Record Migrations, Queries and Association Macros

## Active Record
- Pros: simplicity, only need a basic understanding of SQL, takes away boilerplate code, automates certain jobs: rake makes it easier to work with Active Record
- Cons: harder to make changes (migrations), LOTS of new syntax, a lot of convention to learn (singular/plural), abstraction is scary, what's going on under the hood?

Game -< Review >- Player

## Outline
* Review migrations
  * `db:migrate` and `db:rollback`, `db:migrate:status`
    * see a rollback again (and reasons to make a new migration)
    * what to do if there's an error with rolling back
  * `add_column` migration
  * Demonstrate `seeds.rb`
* Review CRUD
* Association methods
  * Before ActiveRecord, how did we write association methods?
  * How can we use ActiveRecord to write SQL to find associations?
  * What do `has_many` and `belongs_to` do for us?

### Active Record Setup Checklist

0. Setup the connection to the database
1. Create migration file (`rake db:create_migration NAME=migration_name`)
2. Write the migration code
3. Run the migration and check the schema/status (`rake db:migrate` && `rake db:migrate:status`)
4. Create the Ruby class to connect to the table
5. Test the Ruby class in `rake console`

### Example App

Let's make a game review app so players can review the games they've played. For our domain, we'll need a many-to-many relationship between `Players` and `Games`, where an `Player` has many `Games` through `Reviews` and a `Game` has many `Players` through `Reviews`. `Reviews` will be the join between `Players` and `Games`, so our `Reviews` table will need foreign keys for the game_id and review_id.

Our database tables would look something like this:

#### games table
| id | title          |
|----|----------------|
| 1  | Mario Kart     |
| 2  | Stardew Valley |
| 3  | Pokemon Go     |

#### players table
| id | name           |
|----|----------------|
| 1  | Ian            |
| 2  | Leizl          |
| 3  | Rei            |

#### reviews table
| id | game_id  | player_id | review           |
|----|----------|-----------|------------------|
| 1  | 1        | 1         | Great!           |
| 2  | 1        | 2         | Also great!      |
| 3  | 1        | 3         | No good.         |
| 4  | 2        | 1         | The best 10/10   |
| 5  | 3        | 3         | This is my jam.  |

### Association Methods

In our domain, we've described the relationships on our classes. This gives us a sense of how to query for data from one class to another - in SQL, this involves writing queries using the _foreign key_ to join between tables. We can also express this with Ruby code.

Since a _review_ belongs to a _game_ and a _player_, we can use ActiveRecord to write instance methods that let us access data across our different model:

```rb
class Review < ActiveRecord::Base

  def game
    Game.find(self.game_id)
  end

  def player
    Player.find(self.player_id)
  end

end
```

And since a _game_ has many _reviews_, and has many _players_ through _reviews_, we can also use ActiveRecord to query across classes from a game instance:

```rb
class Game < ActiveRecord::Base

  def reviews
    Review.all.select do |review|
      review.game_id == self.id
    end

    # or, using Active Record querying:
    # Review.where(game_id: self.id)
  end

  def players
    # and to return the players:
    reviews.map do |review|
      review.player
    end
  end

end
```

Since these kinds of relationship are very common in domain modeling, ActiveRecord also gives us some additional association helper methods to write this code for us:

```rb
class Review < ActiveRecord::Base
  belongs_to :game
  # lets us call an instance method Review#game to return the Game instance

  belongs_to :player
  # lets us call an instance method Review#player to return the Player instance
end
```

```rb
class Game < ActiveRecord::Base
  has_many :reviews
  # lets us call an instance method Game#reviews to return a collection of Review instances

  has_many :players, through: :reviews
  # lets us call an instance method Game#players to return a collection of Player instances
end
```

Pay close attention to the naming conventions! *belongs_to* should always take a _singular_ name as an argument, and *has_many_ should always take a _plural_ name as an argument.

### Resources
[Active Record Associations](https://guides.rubyonrails.org/association_basics.html)