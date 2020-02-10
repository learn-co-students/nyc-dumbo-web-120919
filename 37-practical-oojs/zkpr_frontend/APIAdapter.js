class APIAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.defaultHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }

  fetchAndParse(url, options) {
    return fetch(url, options).then(r => r.json())
  }

  getAnimals() {
    return this.fetchAndParse(this.baseUrl + "/animals")
  }

  deleteAnimal(id) {
    return this.fetchAndParse(this.baseUrl + `/animals/${id}`, {
      method: "DELETE"
    })
  }

  updateAnimal(id, donations) {
    return this.fetchAndParse(this.baseUrl + `/animals/${id}`, {
      method: "PATCH",
      headers: this.defaultHeaders,
      body: JSON.stringify({
        donations: donations
      })
    })
  }

  createAnimal(newAnimal) {
    return this.fetchAndParse(this.baseUrl + "/animals", {
      method: "POST",
      headers: this.defaultHeaders,
      body: JSON.stringify(newAnimal)
    })
  }
}