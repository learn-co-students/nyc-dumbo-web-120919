const BASE_URL = "http://localhost:3000"

function getWords() {
  return fetch(BASE_URL + "/words")
    .then(r => r.json())
}

function postWord(word) {
  return fetch(BASE_URL + "/words", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(word)
  })
    .then(r => r.json())
}

function postDefinition(definition) {
  return fetch(BASE_URL + "/definitions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(definition)
  })
    .then(r => r.json())
}