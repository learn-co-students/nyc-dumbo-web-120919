document.addEventListener("DOMContentLoaded", () => {
  getAllDogs()
})

function getAllDogs() {
  // fetch all dogs from the API (endpoint = "/dogs") 
  // and render a list of each dogs' mood in #side-bar
  fetch("http://localhost:3000/dogs")
    .then(r => r.json())
    .then(dogs => {

      renderMainDog(dogs[0])

      renderAllDogsSidebar(dogs)

    })
}

function renderAllDogsSidebar(dogsArray) {
  dogsArray.forEach(dog => renderOneDogLi(dog))
}

function renderOneDogLi(dogObj) {
  // <li class='doggo-li'> Dog's mood goes here </li>
  const sideBar = document.querySelector("#side-bar")
  const dogLi = document.createElement("li")
  dogLi.className = "doggo-li"
  dogLi.textContent = dogObj.mood
  sideBar.append(dogLi)

  // When a user clicks an li in #side-bar it should render that dog's information in #main-container
  dogLi.addEventListener("click", () => {
    renderMainDog(dogObj)
  })
}

function renderMainDog(dogObj) {
  document.querySelector("#main-container").innerHTML = `
    <img src="${dogObj.img}" alt="${dogObj.mood}" />
    <h2>${dogObj.mood}</h2>
    <ul class="nickname-list" id="nickname-list">
      <h3> Nicknames </h3>
    </ul>
    <form id="new-nickname-form">
      <input type="text" name="nickname" id="input" />
      <input type="submit" value="Add new nickname" />
    </form>
  `
  renderNicknames(dogObj.nicknames)
  const nicksList = document.querySelector("#nickname-list")
  // dogObj.nicknames.forEach(nickname => {
  //   nicksList.innerHTML += `<li class="nick-li"> ${nickname.content} </li>`
  // })

  // 5. A user should be able to add a new nickname to a dog using the 
  // `#new-nickname-form`. To do this, you need to 
  // send a POST request to `'/nicknames'` endpoint.

  // when (the form submit) event happens
  //  add an event listener to the form
  //  write a fn to capture the information from the form
  // do (post) fetch
  // slap (the nickname) on the DOM

  const nicknameForm = document.querySelector("#new-nickname-form")

  nicknameForm.addEventListener("submit", event => {
    event.preventDefault()
    // get form info
    // <input type="text" name="nickname" />
    // const input = document.getElementById("input").value
    const input = event.target.nickname.value

    fetch('http://localhost:3000/nicknames', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        dog_id: dogObj.id,
        content: input
      })
    })
    // .then(r => r.json())
    // .then(nickname => {
    //   nicksList.innerHTML += `<li class="nick-li"> ${nickname.content} </li>`

    //   event.target.reset()
    // })

    // optimistic
    const newLi = document.createElement('li')
    newLi.className = "nick-li"
    newLi.textContent = input
    nicksList.append(newLi)

    // nicksList.innerHTML += `<li class="nick-li"> ${input} </li>`
    event.target.reset()


  })
}

function renderNicknames(nicksArray) {
  const nicksList = document.querySelector("#nickname-list")
  nicksList.innerHTML = ""
  nicksArray.forEach(renderOneNickname)
}

function renderOneNickname(nicknameObj) {
  const nicksList = document.querySelector("#nickname-list")
  nicksList.innerHTML += `<li class="nick-li"> ${nicknameObj.content} </li>`
}