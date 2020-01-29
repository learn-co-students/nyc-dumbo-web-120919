// .forEach
// .find
// .map
// .filter
// .reduce (but it's trickier)


document.addEventListener('DOMContentLoaded', () => {
  const pokeBowl = document.querySelector("#pokemon-container")
  const search = document.querySelector("#pokemon-search-input")

  search.addEventListener("input", e => {

    const userInput = e.target.value.toLowerCase()

    const filteredList = POKEMON.filter(poke => poke.name.includes(userInput))
    // console.log(filteredList)
    pokeBowl.innerHTML = ""
    renderAllPokemon(filteredList)
    // pokeBowl.querySelectorAll(".pokemon-card").forEach(card => {
    //   const header = card.querySelector("h1")
    //   if (header.textContent.includes(userInput)) {
    //     card.style.display = "block"
    //   } else {
    //     card.style.display = "none"
    //   }
    // })
  })

  // EVENT DELEGATION
  // 1. identify the closest stable parent element
  // 2. add an event listener to that element
  // pokeBowl.addEventListener("click", e => {
  //   // 3. use condititional logic to check if the thing we care about was clicked
  //   if (e.target.dataset.action === "flip") {
  //     // console.log(typeof e.target.dataset.id)
  //     const foundPoke = POKEMON.find((poke) => poke.id === parseInt(e.target.dataset.id))
  //     let currentSprite = e.target.src

  //     if (foundPoke.sprites.front === currentSprite) {
  //       currentSprite = foundPoke.sprites.back
  //     } else {
  //       currentSprite = foundPoke.sprites.front
  //     }

  //     e.target.src = currentSprite
  //   }
  // })

  function renderOnePokemon(pokemon) {
    // 2. create the element
    const div = document.createElement("div")
    div.className = "pokemon-card"

    div.innerHTML = `
      <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
        </div>
      </div>
    `

    // NESTED EVENT LISTENER
    const img = div.querySelector("img")
    img.addEventListener("click", e => {
      if (pokemon.sprites.front === img.src) {
        img.src = pokemon.sprites.back
      } else {
        img.src = pokemon.sprites.front
      }
    })

    // 3. attach our element to something on the page
    pokeBowl.append(div)
  }

  function renderAllPokemon(pokeArray) {
    pokeArray.forEach((onePokemon) => {
      renderOnePokemon(onePokemon)
    })
  }

  renderAllPokemon(POKEMON)


  // iterate over all the pokemon in the array
  // use our render fn to slap them on the DOM
  // make a render one pokemon fn

})
