/****************  DOM Elements ****************/
const lightSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")
const animalList = document.querySelector("#animal-list")


/**************** Event Listeners ****************/
lightSwitch.addEventListener("click", handleLightSwitchClick)
animalForm.addEventListener("submit", handleFormSubmit)


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

  outerLi.innerHTML = `
    <div class="image">
      <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
    </div>
    <div class="content">
      <div class="name">${animalObj.name}</div>
      <div class="donations">
        $<span class="donation-count">${animalObj.donations}</span> Donated
      </div>
      <div class="description">${animalObj.description}</div>
    </div>
    <button class="donate button">
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