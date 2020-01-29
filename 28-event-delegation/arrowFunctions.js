function sayHi(name) {
  return `whatever ${name}`
}


// multi-line
const arrowSayHi = (name) => {
  const addSomething = name + " mornings are hard"
  return `whatver ${addSomething}`
}

// one-line
const double = (num) => num * 2

// multiple args
const doubleAndAdd = (num1, num2) => {
  const newNum = num1 + num2
  return newNum * 2
}

// one arg
const double = num => num * 2

// useful for callbacks!
const arr = [1, 2, 3]
// no arrow fn
arr.map(function (num) {
  return num * 2
})
// arrow fn
arr.map(num => num * 2)