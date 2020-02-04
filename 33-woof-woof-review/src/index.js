
// when (the page load) event happens ✅
console.log("our code is running!")

let pups = []
let filterOn = false

// when (the filter button is click)
const filterButton = document.querySelector("#good-dog-filter")
filterButton.addEventListener("click", () => {
  // slap (the updated pups list) on the DOM
  // console.log(pups)
  filterOn = !filterOn
  if (filterOn) {
    filterButton.innerText = "Filter good dogs: On"
  } else {
    filterButton.innerText = "Filter good dogs: OFF"
  }
  // need the array of pups
  // once we have the array we need to filter it: 
  const filteredPups = pups.filter(pup => {
    // based on isGoodDog attribute, compare it to the filterOn variable
    if (filterOn) {
      return pup.isGoodDog
    } else {
      return true
    }
  })
  console.log(filteredPups)
  // once we have our filtered list, slap it on the the DOM
  let pupsList = document.querySelector("#dog-bar")
  pupsList.innerHTML = ""
  renderPups(filteredPups)
})


// do (a get for all pups) fetch
fetch("http://localhost:3000/pups")
  .then(r => r.json())
  .then(pupsArray => {
    pups = pupsArray
    // gently tap (each pup) on the DOM
    renderPups(pupsArray)
  })

function renderPups(pupsArray) {
  // find out where you want to add the pups to (use querySelector)
  let pupsList = document.querySelector("#dog-bar")

  // create an element for each pup (<span>Mr. Bonkers</span>)
  pupsArray.forEach(pup => {
    let pupsSpan = document.createElement("span")
    pupsSpan.innerText = pup.name
    // append the element to our container
    pupsList.append(pupsSpan)

    // when (a click on a dog span) event happens
    pupsSpan.addEventListener('click', () => {

      // slap (the dog details) on the DOM
      // grab the container that will show the dog details
      let dogInfo = document.querySelector("#dog-info")

      // add this HTML to the container:
      {/* <img src=dog_image_url>
      <h2>Mr. Bonkers</h2>
      <button>Good Dog!</button> */}
      dogInfo.innerHTML = `
        <img src=${pup.image}>
        <h2>${pup.name}</h2>
        <button>${pup.isGoodDog} Dog!</button>
      `
      const button = dogInfo.querySelector("button")

      if (pup.isGoodDog === true) {
        button.innerText = "Good Dog!"
      } else {
        button.innerText = "Bad Dog!"
      }

      // when (a click on the dog button) event happens
      button.addEventListener("click", () => {
        pup.isGoodDog = !pup.isGoodDog
        const updatedDogInfo = { isGoodDog: pup.isGoodDog }

        // do (a patch) fetch
        fetch(`http://localhost:3000/pups/${pup.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(updatedDogInfo)
        })
          .then(r => r.json())
          .then(newPupInfo => {
            // slap (the updated dog info) on the DOM
            if (newPupInfo.isGoodDog === true) {
              button.innerText = "Good Dog!"
            } else {
              button.innerText = "Bad Dog!"
            }
          })

      })


    })
  })
}

