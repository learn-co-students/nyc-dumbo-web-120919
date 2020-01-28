// 1. What element are we listening for events
const mewtwo = document.querySelector("#toggle-dark-mode")

// 2. What kind of event are we listening for
mewtwo.addEventListener("click", handleMewtwoClick)

// 3. What do we want to happen (what function do we want to run)
function handleMewtwoClick() {
  // div.classList.toggle("visible");
  document.body.classList.toggle("dark-mode")
}

const pokeball = document.querySelector("#animal-form")

pokeball.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(event) {
  // always prevent the default action
  event.preventDefault()
  const form = event.target
  // get the user input from the input fields
  const animalName = form["name"].value
  const animalImage = form["image_url"].value
  const animalDescription = form["description"].value

  const newAnimal = {
    name: animalName,
    imageUrl: animalImage,
    description: animalDescription,
    donations: 0
  }

  renderOneAnimal(newAnimal)
}





// Morning Code
// DOM Elements
const animalList = document.querySelector("#animal-list")

// Render Helpers
function renderOneAnimal(animalObj) {
  const outerLi = document.createElement('li')
  outerLi.className = "card"

  outerLi.innerHTML = `
    <div class="image">
      <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
    </div>
    <div class="content">
      <div class="name">${animalObj.name}</div>
      <div class="description">${animalObj.description}</div>
    </div>
    <button class="button donate-button" data-action="donate">
      $<span class="donation-count">${animalObj.donations}</span> Donated
    </button>
  `
  animalList.append(outerLi)
}

function renderAllAnimals(animals) {
  animals.forEach(renderOneAnimal)
}

// initial render
renderAllAnimals(animalData)