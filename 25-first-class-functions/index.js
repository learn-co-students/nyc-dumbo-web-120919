/******* 1st Class Functions *******/
// 1. functions can be assigned to a variable
function pie() {
  console.log("delish, pumpkin")
  return "pie"
}

const alsoPie = pie

// alsoPie()

// functions are objects too!
alsoPie.tasty = "depends"

// 2. functions can be passed around as arguments to other functions
function fnCaller(callback) {
  callback()
}

function notPie() {
  console.log("cake 4 life")
}

// fnCaller(alsoPie)
// fnCaller(alsoPie())
// fnCaller("pie")

// 3. functions can be returned from functions
// function multiplyBy2(num) {
//   return num * 2
// }

// function multiplyBy3(num) {
//   return num * 3
// }

function multiplyByX(x) {
  // x in the inner fn is tied to the argument being passed in
  return function (num) {
    return num * x
  }
}

const multiplyBy2 = multiplyByX(2)
// function (num) {
//   return num * 2
// }

const multiplyBy3 = multiplyByX(3)
const multiplyBy300 = multiplyByX(300)

multiplyBy2 // function definition
multiplyBy2(10) // function invocation

// console.log(multiplyBy2(2))
// console.log(multiplyBy3(2))

/******* Array methods *******/
const arr = [1, 2, 3]
// const name = "ian"

function logger(element, index, originalArray) {
  console.log(element, index, originalArray)
}

arr.forEach(logger)

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

myForEach(arr, logger)





/******* JS vs Ruby *******/

// global scope
// let name = "ian"

// function sayHi() {
//   // function scope
//   const name = "mazen"

//   if (true) {
//     // block scope
//     const cherry = "sweet"
//     console.log("in the block", cherry)
//     console.log("name in block", name)
//   }

//   function alsoAFunction() {
//     console.log(cherry)
//   }

//   alsoAFunction()

//   console.log("outside the block", cherry)
// }

// console.log("BEFORE sayHi()", name)

// sayHi()

// console.log("AFTER sayHi()", name)

// sayHi


// console.log(a)

// console.log(a)























/******* Hoisting *******/

/******* var, let, const, (global) *******/

/******* Lexical Scoping *******/

/******* global vs function vs block scope *******/

/******* scope in nested functions *******/

