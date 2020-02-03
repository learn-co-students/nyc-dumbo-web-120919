document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  // const newJokeLi = document.createElement('li') // what is this, why?

  let hi = "wat"
  console.log(hi)

  let joke; // check this later
  // console.log({
  //   form: form,
  //   jokeList: jokeList,
  //   newJokeLi: newJokeLi
  // })

  function fetchJoke() {
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
  }

  function jokeRenderer(username, joke) {
    const newJokeLi = document.createElement('li')

    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = document.getElementById('name-input').value // check this later

    hi = "pls work"
    debugger

    if (username === "") return;

    // console.log("joke before fetch", joke)
    fetchJoke()
      .then(jokeData => {
        jokeRenderer(username, jokeData.joke)
      }) // aysnc

    // console.log("joke after fetch", joke)

    // jokeRenderer(username, joke)

    // const newJokeLi = document.createElement('li')

    // newJokeLi.innerHTML = `
    // <span class="username">${username} says:</span> ${joke}
    // `
    // jokeList.appendChild(newJokeLi)
  })
})
