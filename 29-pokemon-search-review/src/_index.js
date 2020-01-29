document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  // dom elements
  const pokeBowl = document.querySelector("#pokemon-container")
  const pokeSearch = document.querySelector("#pokemon-search-input")

  // event listeners
  pokeSearch.addEventListener("input", e => {
    // FILTERING POKEMON 1: Array Manipulation/rerender
    // 1. get the input value to see what the user typed in
    const input = e.target.value
    // 2. filter the array of pokemon to find the ones whose name matches
    const filteredPokemons = POKEMON.filter(p => p.name.includes(input))
    // 3. reset the inner html (remove the cards)
    pokeBowl.innerHTML = ""
    // 4. render the filtered list
    renderAllPokemon(filteredPokemons)

    // FILTERING POKEMON 2: Toggle Display Attribute
    // 1. Get all the cards
    // const cards = pokeBowl.querySelectorAll(".pokemon-card")
    // 2. Iterate over each card
    // cards.forEach(card => {
    //   3. check if the pokemon's name on the card matches
    //   const name = card.querySelector(".center-text").textContent
    //   if (!name.includes(input)) {
    //     card.style.display = "none"
    //   } else {
    //     card.style.display = ""
    //   }
    // })
  })

  // FLIP POKEMON 1: DELEGATION
  // 1. Identify the closest stable parent
  pokeBowl.addEventListener("click", e => {
    // 2. Use dataset to identify if the clicked element is something you care about
    if (e.target.dataset.action === "flip") {
      // get the ID of the pokemon that was clicked
      const pokeId = parseInt(e.target.dataset.id)
      // find the pokemon using the ID so we can access the sprites
      const foundPokemon = POKEMON.find(poke => poke.id === pokeId)
      // toggle the sprites!
      if (e.target.src === foundPokemon.sprites.front) {
        e.target.src = foundPokemon.sprites.back
      } else {
        e.target.src = foundPokemon.sprites.front
      }
    }
  })

  // render helpers
  function renderPokemon(pokemon) {
    // 1. Create outer element and add attributes
    const pokeCard = document.createElement("div")
    pokeCard.classList.add("pokemon-card")

    // 2. Create inner elements using innerHTML
    pokeCard.innerHTML = `
      <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
        </div>
      </div>
    `

    // 3. Append to parent
    pokeBowl.append(pokeCard)

    // FLIP POKEMON 2: NESTED LISTENERS
    // 1. find the image element inside the pokeCard
    // const img = pokeCard.querySelector("img")
    // 2. add an event listener for clicks and create a NESTED fn
    // img.addEventListener("click", () => {
    //   3. use variables from higher in scope to check flip the sprite
    //   if (img.src === pokemon.sprites.front) {
    //     img.src = pokemon.sprites.back
    //   } else {
    //     img.src = pokemon.sprites.front
    //   }
    // })
  }

  function renderAllPokemon(pokemons) {
    pokemons.forEach(renderPokemon)
  }

  // initial render
  renderAllPokemon(POKEMON)
})
