/****************  DOM Elements ****************/
const lightSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")
const animalList = document.querySelector("#animal-list")

/**************** Event Listeners ****************/
lightSwitch.addEventListener("click", handleLightSwitchClick)
animalForm.addEventListener("submit", handleFormSubmit)
animalList.addEventListener("click", e => {
  // Donate button clicked
  if (e.target.dataset.action === "donate") {
    handleDonate(e)
  }

  // Delete button clicked
  if (e.target.dataset.action === "freeToTheWild") {
    handleDelete(e)
  }
})

/**************** Event Handlers ****************/
function handleLightSwitchClick() {
  document.body.classList.toggle("dark-mode")
}

function handleFormSubmit(e) {
  // always prevent the default action for submit events!
  e.preventDefault()

  // get the form input
  const animalName = e.target["name"].value
  const animalSpeciesName = e.target["species_name"].value
  const animalImage = e.target["image_url"].value
  const animalDescription = e.target["description"].value
  const animalDiet = e.target["diet"].value

  const newAnimal = {
    name: animalName,
    species_name: animalSpeciesName,
    image_url: animalImage,
    description: animalDescription,
    diet: animalDiet,
    donations: 0
  }

  fetch("http://localhost:3000/animals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newAnimal)
  })
    .then(r => r.json())
    .then(actualNewAnimal => {
      // slap on the DOM
      renderOneAnimal(actualNewAnimal)
    })

}

function handleDonate(e) {
  const outerLi = e.target.closest(".card")
  const donationCount = outerLi.querySelector(".donation-count")
  const newDonations = parseInt(donationCount.textContent) + 10
  const animalId = outerLi.dataset.id

  fetch(`http://localhost:3000/animals/${animalId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      donations: newDonations
    })
  })

  // optimistic rendering: DOM manipulation outside of fetch
  donationCount.textContent = newDonations
}

function handleDelete(e) {
  const outerLi = e.target.closest(".card")
  const animalId = outerLi.dataset.id
  fetch(`http://localhost:3000/animals/${animalId}`, {
    method: "DELETE"
  })
    .then(r => r.json())
    .then(() => {
      // pessimistic rendering: DOM manipulation inside of fetch
      outerLi.remove()
    })
}

/**************** Render Helpers ****************/
function renderOneAnimal(animalObj) {
  const outerLi = document.createElement('li')
  outerLi.className = "card"
  outerLi.dataset.id = animalObj.id

  outerLi.innerHTML = `
    <div class="image">
      <img src="${animalObj.image_url}" alt="${animalObj.name}">
      <button data-action="freeToTheWild" class="delete button">X</button>
    </div>
    <div class="content">
      <div class="name">${animalObj.name}</div>
      <div class="donations">
        $<span class="donation-count">${animalObj.donations}</span> Donated
      </div>
      <div class="description">${animalObj.description}</div>
      <div class="tags">
        <span>${animalObj.species_name}</span>
        <span class="${animalObj.diet}">${animalObj.diet}</span>
      </div>
    </div>
    <button data-action="donate" class="donate button">
      Donate $10
    </button>
  `

  animalList.append(outerLi)
}

function renderAllAnimals(animals) {
  animals.forEach(renderOneAnimal)
}

/**************** Initial Render ****************/
// renderAllAnimals(animalData)
fetch("http://localhost:3000/animals")
  .then(r => r.json())
  .then(data => {
    // once we're here, do DOM stuff
    renderAllAnimals(data)
  })


// When X event happens
// Do Y fetch
// And slap Z on/off the DOM