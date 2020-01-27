/******* Lexical Scoping *******/

/******* global vs function vs block scope *******/

const name = "ian" // global scope / outer scope

function sayHi() {
  const name = "not ian" // fn scope
  if (true) {
    const wat = "hm" // block scope
    var varWat = "no" // var block scope
  }
  console.log("HI " + name)
  console.log(varWat)
  console.log(wat)
}

sayHi()


/******* nested functions *******/
const newName = "also ian"

function funCeption() {
  const newName = "not ian"
  return function nested() {
    console.log(newName)
  }
}

funCeption()()

/******* var, let, const, (global) *******/

// declaration + assignment
var whatever = 'ya'
console.log(`%c whatever is ${whatever}`, 'color: red')

// reassignment
whatever = 'na'
console.log(`%c whatever is ${whatever}`, 'color: blue')

// reassignment
whatever = function () {
  return "something unexpected"
}
console.log(`%c whatever is ${whatever}`, 'color: green')

// redeclaration + reassignment
var whatever = 'this is wacky'
console.log(`%c whatever is ${whatever}`, 'color: goldenrod')

// declaration + assignment
let nice = 123
console.log(nice)

// assignment
nice = 124
console.log(nice)

// redeclaration + assignment
let nice = 125 // error!

const arr = [1, 2, 3]
arr = [1, 2, 3, 4] // breaks, can't be reassigned
arr.push(4) // works! not reassigning

/******* Hoisting *******/
console.log(`Before dog: ${dog}`)

var dog = "woof"

console.log(`After dog: ${dog}`)

willIBeHoisted()

function willIBeHoisted() {
  console.log("hmm")
}

/******* 1st Class Functions *******/
// 1. functions can be assigned to a variable
function sayHi(name) {
  console.log(`Hi ${name}`)
}

const alsoSayHi = sayHi

alsoSayHi()

// functions are objects too!
console.dir(sayHi)
sayHi.wat = "hm"
sayHi.wat

// 2. functions can be passed around as arguments to other functions
function fnCaller(fn, value) {
  return fn(value)
}

fnCaller(sayHi, "Ian")

// 3. functions can be returned from functions
function multiplyBy2(number) {
  return number * 2
}
function multiplyBy3(number) {
  return number * 3
}

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier
  }
}

const tripler = createMultiplier(3) // return a FUNCTION DEFINITION
tripler(4) // invoke it

/******* Array methods *******/
const nums = [1, 2, 3]
nums.forEach(function (num) {
  console.log(num)
})

