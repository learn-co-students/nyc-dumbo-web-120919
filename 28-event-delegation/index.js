/****************  DOM Elements ****************/
const lightSwitch = document.querySelector("#toggle-dark-mode")
const animalForm = document.querySelector("#animal-form")
const animalList = document.querySelector("#animal-list")


/**************** Event Listeners ****************/
lightSwitch.addEventListener("click", handleLightSwitchClick)
animalForm.addEventListener("submit", handleFormSubmit)

// EVENT DELEGATION
// 1. find the closest stable parent of the elements you care about
animalList.addEventListener("click", e => {
  // 2. find a way to identify the specific element you care about
  if (e.target.dataset.action === "donate") {
    console.log(e.target)
    console.log(e.target.dataset)
    const outerLi = e.target.closest(".card") // from the target element, find the closest parent that matches the css selector
    const donationCount = outerLi.querySelector(".donation-count")
    donationCount.textContent = parseInt(donationCount.textContent) + 10
  }

  if (e.target.dataset.action === "freeToTheWild") {
    // find the card!
    const outerLi = e.target.closest(".card")
    // remove the card!
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

  // NESTED EVENT HANDLERS
  // const btn = outerLi.querySelector(".donate.button")
  // let counter = animalObj.donations

  // btn.addEventListener("click", handleDonateButton)

  // function handleDonateButton() {
  //   // incremement the donation amount
  //   counter += 10
  //   // update the DOM
  //   const donationSpan = outerLi.querySelector(".donation-count")
  //   donationSpan.textContent = counter
  // }

  animalList.append(outerLi)
}

function renderAllAnimals(animals) {
  animals.forEach(renderOneAnimal)
}

/**************** Initial Render ****************/
renderAllAnimals(animalData)

// document.body.addEventListener("click", e => {
//   console.log("BODY", e)
// })

// document.querySelector(".card").addEventListener("click", e => {
//   console.log("CARD", e)
// })

// document.querySelector(".donate.button").addEventListener("click", e => {
//   console.log("BUTTON", e)
// })

// const donateBtns = document.querySelectorAll(".donate.button")

// donateBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log(e)
//   })
// })

// donateBtns.forEach(btn => {
//   btn.addEventListener("click", e => {
//     console.log(e)
//   })
// })