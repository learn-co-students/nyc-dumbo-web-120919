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
    const outerLi = e.target.closest(".card")
    const donationCount = outerLi.querySelector(".donation-count")
    const newDonations = parseInt(donationCount.textContent) + 10
    donationCount.textContent = newDonations
  }

  // Delete button clicked
  if (e.target.dataset.action === "freeToTheWild") {
    const outerLi = e.target.closest(".card")
    outerLi.remove()
  }
})

/**************** Event Handlers ****************/
function handleLightSwitchClick() {
  document.body.classList.toggle("dark-mode")
}

function handleFormSubmit(event) {
  // always prevent the default action for submit events!
  event.preventDefault()

  // get the form input
  const animalName = event.target["name"].value
  const animalImage = event.target["image_url"].value
  const animalDescription = event.target["description"].value

  const newAnimal = {
    name: animalName,
    imageUrl: animalImage,
    description: animalDescription,
    donations: 0
  }

  // slap on the DOM
  renderOneAnimal(newAnimal)
}

/**************** Render Helpers ****************/
function renderOneAnimal(animalObj) {
  const outerLi = document.createElement('li')
  outerLi.className = "card"
  outerLi.dataset.id = animalObj.id

  outerLi.innerHTML = `
    <div class="image">
      <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
      <button data-action="freeToTheWild" class="delete button">X</button>
    </div>
    <div class="content">
      <div class="name">${animalObj.name}</div>
      <div class="donations">
        $<span class="donation-count">${animalObj.donations}</span> Donated
      </div>
      <div class="description">${animalObj.description}</div>
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
renderAllAnimals(animalData)