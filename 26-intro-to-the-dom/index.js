// Read
// get ONE element (the first that matches)
// const h1 = document.querySelector("h1")
// const animalsList = document.querySelector("#animal-list")
// // get a Node List of MULTIPLE ELEMENTS
// const cards = animalsList.querySelectorAll(".card")

// console.log(h1)

// // Update
// h1.textContent = "Welcome to zkpr"
// h1.style.color = "red"

// Delete
// call .remove on an individual element to remove it from the DOM
// cards.forEach(function(li) {
//   li.remove()
// })

// Create
// 1. create individual dom nodes with document.createElement
// const outerLi = document.createElement('li')
// outerLi.className = "card"

// const div1 = document.createElement("div")
// div1.className = "image"

// 2. innerHTML = a string with the new HTML

// 3. combine document.createElement with inner HTML
// const outerLi = document.createElement('li')
// outerLi.className = "card"

// outerLi.innerHTML = `
//   <div class="image">
//     <img src="https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1" alt="Red Panda">
//   </div>
//   <div class="content">
//     <div class="name">Red Panda</div>
//     <div class="description">not actually a panda</div>
//   </div>
//   <button class="button donate-button" data-action="donate">
//     $<span class="donation-count">0</span> Donated
//   </button>
// `
// animalsList.append(outerLi)

/* <li class="card">
  <div class="image">
    <img src="https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1" alt="Red Panda">
  </div>
  <div class="content">
    <div class="name">Red Panda</div>
    <div class="description">not actually a panda</div>
  </div>
  <button class="button donate-button" data-action="donate">
    $<span class="donation-count">0</span> Donated
  </button>
</li> */









// DOM element
const animalList = document.querySelector("#animal-list")
console.log(animalList)

const animalData = [
  {
    name: "Red Panda",
    imageUrl: "https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1",
    description: "not actually a panda",
    donations: 0
  },
  {
    name: "Pangolin",
    imageUrl: "https://i.pinimg.com/originals/bf/ff/93/bfff9395c6ae0d24534f030580924c7e.jpg",
    description: "The Pangolin, otherwise known as the scaly anteater, is the only mammal in the world to be covered from head to toe in keratin scales (the same as human finger nails).",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  }
]

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

animalData.forEach(function (animalObj) {
  renderOneAnimal(animalObj)
})

animalData.forEach(renderOneAnimal)