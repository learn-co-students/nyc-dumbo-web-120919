

















// // Morning Code
// // DOM Elements
// const animalList = document.querySelector("#animal-list")

// // Render Helpers
// function renderOneAnimal(animalObj) {
//   const outerLi = document.createElement('li')
//   outerLi.className = "card"

//   outerLi.innerHTML = `
//     <div class="image">
//       <img src="${animalObj.imageUrl}" alt="${animalObj.name}">
//     </div>
//     <div class="content">
//       <div class="name">${animalObj.name}</div>
//       <div class="description">${animalObj.description}</div>
//     </div>
//     <button class="button donate-button" data-action="donate">
//       $<span class="donation-count">${animalObj.donations}</span> Donated
//     </button>
//   `
//   animalList.append(outerLi)
// }

// function renderAllAnimals(animals) {
//   animals.forEach(renderOneAnimal)
// }

// // initial render
// renderAllAnimals(animalData)