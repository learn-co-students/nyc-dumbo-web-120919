
/**** wat ****/
// typeof {}
// typeof []
// Array.isArray([])
// "hello" * 3 // NaN
// typeof NaN
// NaN === NaN
// isNaN(NaN)

/**** data types ****/

/**** truthy/falsey values ****/
let truthy = 123
// !! will coerce to boolean
console.log(!!truthy)

let array = [1, 2, 3]
// control flow
if (array.length) {
  console.log("ye")
} else {
  console.log("ne")
}

/**** pass by reference vs pass by value ****/
// double equals vs triple equals
// find an example
console.log(100 === 100)
console.log("23" === "23")
console.log({} === {})
console.log([] === [])
let a = 5
let b = a
a++
// what is a? what is b?
let myLunch = {
  food: "taco",
  drink: "fruit water"
}
let notMyLunch = myLunch
notMyLunch.drink = "cola"
// what is myLunch.drink?

/**** arrays and objects ****/


/**** function definition vs invocation ****/
// compare to Ruby
function jimmy() {
  console.log("Hi i'm james nice to meet you")
}

// what is this?
jimmy

// what is this?
jimmy()

// what is the RETURN VALUE of this?
jimmy()

typeof jimmy // function

jimmy.pizza = "hi"

// functions are objects

// another way to define functions
const alsoJimmy = function () {
  console.log("I'm also jimmy")
}

