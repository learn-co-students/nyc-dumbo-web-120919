import { calc } from './utils/calculate.js'

const fetchAnimals = async () => {
  const r = await fetch("http://localhost:3000/animals")
  const animals = await r.json()
  console.log(animals)
}

console.log("before fetch animals")
console.log(fetchAnimals())
console.log("after fetch animals")

// fetch("http://localhost:3000/animals")
//   .then(r => r.json())
//   .then(animals => console.log(animals))

// console.log(cantSeeMe)
console.log(`2 + 2 is ${calc("2 + 2")} `)

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault()
  const num1 = e.target.num1.value
  const num2 = e.target.num2.value
  const operator = e.target.operator.value

  const result = calc(`${num1} ${operator} ${num2}`)
  document.querySelector("#sum").textContent = result
})