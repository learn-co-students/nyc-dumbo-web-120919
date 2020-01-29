# JS Pokemon Search Assignment

![pikachu](https://media.giphy.com/media/uLnPIWsqIz2aA/giphy.gif)

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks
- Constructors and Prototypes or ES6 Classes (optional)

---

Hello, your assignment today is to re-create the functionality of our
[Pokemon search engine](https://learn-co-curriculum.github.io/js-pokemon-search-practice-assignment/).

p.s. Don't forget to include the ability to toggle the card image and reset the card image upon submission of a new
search.

---

## Instructions

- We're building out a search feature in our application (no backend persistence).

- A user should be able to search for a Pokemon and flip that Pokemon card to see its alternate sprite.

- Two files containing the same information are included: `db.json` and `pokemon.js`. If you've learned `fetch`,
  consider using `json-server` to spin up a simple RESTful API that will give you your pokemon data:
  - `$ npm install -g json-server`
  - `$ json-server --watch db.json`

- If you aren't yet familiar with `fetch`, don't worry. We've included the same data in a file called `pokemon.js`. You should see the `POKEMON` `console.log`ged when you start this app.

---

### Deliverables:

1. Render all the pokemon
1.  Implement a filter functionality for your Pokemon list.
  -  Your search should include pokemon whose names are **not** exact matches
1.  Implement a flip functionality on each Pokemon.
1.  AS A BONUS, add a way to show users details for a particular pokemon: moves, abilities, etc.

---

### Sample Markup:

Each Pokemon card might look something like this in HTML:

```html
<div class="pokemon-card">
  <div class="pokemon-frame">
    <h1 class="center-text">charizard</h1>
    <div class="pokemon-image">
      <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
    </div>
  </div>
</div>
```

Take a look at `/style.css` if you're curious about how this app is styled. Applying the classes appropriately from the snippet above should style your Pokemon cards.

---

![](https://media.giphy.com/media/HZpCCbcWc0a3u/giphy.gif)
