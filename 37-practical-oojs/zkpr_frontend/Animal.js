class Animal {

  static all = []

  constructor(animalObj) {
    this.id = animalObj.id
    this.name = animalObj.name
    this.donations = animalObj.donations
    this.description = animalObj.description
    this.image_url = animalObj.image_url
    this.diet = animalObj.diet
    this.species_name = animalObj.species_name

    Animal.all.push(this)
  }

  render(animalList) {
    const outerLi = document.createElement('li')
    outerLi.className = "card"
    outerLi.dataset.id = this.id

    outerLi.innerHTML = `
      <div class="image">
        <img src="${this.image_url}" alt="${this.name}">
        <button data-action="freeToTheWild" class="delete button">X</button>
      </div>
      <div class="content">
        <div class="name">${this.name}</div>
        <div class="donations">
          $<span class="donation-count">${this.donations}</span> Donated
        </div>
        <div class="description">${this.description}</div>
        <div class="tags">
          <span>${this.species_name}</span>
          <span class="${this.diet}">${this.diet}</span>
        </div>
      </div>
      <button data-action="donate" class="donate button">
        Donate $10
      </button>
    `

    this.element = outerLi

    animalList.append(outerLi)
  }

  delete() {
    this.element.remove()
    Animal.all = Animal.all.filter(animal => animal !== this)
  }

  donate() {
    this.donations += 10
    this.element.querySelector(".donation-count").textContent = this.donations
  }

  static find(id) {
    return Animal.all.find(animal => animal.id === id)
  }
}