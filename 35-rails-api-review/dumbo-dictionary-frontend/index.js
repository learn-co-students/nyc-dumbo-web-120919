/****** Application State ******/
// Single source of truth for the frontend
// our goal: keep this bad boy updated and rerender whenever we change the data
// NOT THE SAME AS STATE IN REACT 
// but it'll get you started thinking that way :)
const state = {
  words: [],
  selectedWordId: null
}
// state = { } // not working
// state.words.push(something) // works

/****** DOM Elements ******/
const mainContainer = document.querySelector("#main-container")
const navActions = document.querySelector("#nav-actions")

/****** Event Listeners ******/
mainContainer.addEventListener("submit", e => {
  e.preventDefault()
  if (e.target.dataset.action === "create-word") {
    handleCreateWordSubmit(e)
  }
  if (e.target.dataset.action === "create-definition") {
    handleCreateDefinitionSubmit(e)
  }
})

mainContainer.addEventListener("click", e => {
  if (e.target.dataset.action === "show-word") {
    handleWordClick(e)
  }
  if (e.target.dataset.action === "like") {
    handleDefinitionLike(e)
  }
  if (e.target.dataset.action === "unlike") {
    handleDefinitionUnlike(e)
  }
})

navActions.addEventListener("click", e => {
  if (e.target.dataset.action === "show-words") {
    renderWordList()
  }
  if (e.target.dataset.action === "show-word-form") {
    renderWordForm()
  }
})

/****** Event Handlers ******/
function handleDefinitionLike(e) {
  // get the id of definition that is being clicked
  const defId = e.target.closest(".like-buttons").dataset.id
  patchLikeDefinition(defId)
    .then(updatedDef => {
      const foundWord = state.words.find(word => word.id === state.selectedWordId)
      const foundDef = foundWord.definitions.find(def => def.id === updatedDef.id)
      foundDef.likes = updatedDef.likes
      renderWordDetail()
    })
  // make PATCH /defintions/:id/upvote
  // update definition in local state 
  // rerender
}

function handleCreateWordSubmit(e) {
  // get form values
  const newWord = {
    content: e.target.content.value,
    category: e.target.category.value
  }
  // do fetch
  postWord(newWord).then(word => {
    // update list of words
    state.words.push(word)
    // rerender
    renderWordList()
  })
}

function handleCreateDefinitionSubmit(e) {
  // get form values
  const newDefinition = {
    body: e.target.body.value,
    part_of_speech: e.target.part_of_speech.value,
    word_id: state.selectedWordId
  }
  // do fetch
  postDefinition(newDefinition).then(definition => {
    // update word defiinitions
    const selectedWord = state.words.find(word => word.id === state.selectedWordId)
    selectedWord.definitions.push(definition)
    // rerender
    renderWordDetail()
  })
}

function handleWordClick(e) {
  const wordId = parseInt(e.target.dataset.id)
  // change selected word
  state.selectedWordId = wordId
  // rerender
  renderWordDetail()
}

/****** Render Helpers ******/
function definitionToHTML(definition) {
  return `
    <div class="card">
      <p>
        [${definition.part_of_speech}]: <em>${definition.body}</em>
      </p>
      <p>Likes: <span class="likes-span">${definition.likes}</span></p>
      <div data-id="${definition.id}" class="like-buttons">
        <button class="like-button" data-action="like">👍</button>
        <button class="like-button" data-action="unlike">👎</button>
      </div>
    </div>
  `
}

function renderWordCard(word) {
  const cardDiv = document.createElement("div")
  cardDiv.classList.add("card")
  cardDiv.innerHTML = `
    <h3 class="word" data-id="${word.id}" data-action="show-word">
      ${word.content}
    </h3>
    <span class="category">${word.category}</span>
  `
  mainContainer.append(cardDiv)
}

function renderWordForm() {
  mainContainer.innerHTML = `
    <div class="card">
      <form class="form" data-action="create-word">
        <label for="content">Word</label>
        <input type="text" name="content">
        <label for="category">Category</label>
        <input type="text" name="category">
        <input type="submit" value="Create Word">
      </form>
    </div>
  `
}

function renderWordDetail() {
  const selectedWord = state.words.find(word => word.id === state.selectedWordId)
  const sortedDefinitions = selectedWord.definitions.sort((wordA, wordB) => wordB.likes - wordA.likes)

  mainContainer.innerHTML = `
    <div class="card">
      <h3 class="word">${selectedWord.content}</h3>
      <span class="category">${selectedWord.category}</span>
    </div>
    ${sortedDefinitions.map(definitionToHTML).join("")}
    <div class="card">
      <form class="form" data-action="create-definition">
        <label for="body">Definition</label>
        <textarea name="body"></textarea>
        <label for="part_of_speech">Part of Speech</label>
        <input type="text" name="part_of_speech">
        <input type="submit" value="Create definition">
      </form>
    </div>
  `
}

function renderWordList() {
  mainContainer.innerHTML = ""
  state.words.forEach(renderWordCard)
}

/****** Initialize ******/
function init() {
  getWords().then(wordsArr => {
    // set word list
    state.words = wordsArr
    // render words
    renderWordList()
  })
}

init()