# Helpful ES6 Syntax to Know for React and Beyond ⚛️

![](https://media.giphy.com/media/13twUEuUnCrEju/giphy.gif)

---

## The Following are Used heavily in Mod 4 for React (and are important to know if you're writing modern JavaScript):

#### Object and Array destructuring

```js
const spaceship = {
  pilot: 'elon musk',
  guidance: 'marc zucc',
  chef: 'gordon ramsay'
}
/* from the object spaceship,
please pull out the VALUES stored at
pilot and chef */
const { pilot, chef } = spaceship

console.log(pilot) // 'elon musk'
console.log(chef) // 'gordon ramsay'

class Animal {
  constructor(animalObj) {
    this.id = animalObj.id
    this.name = animalObj.name
    this.donations = animalObj.donations
    this.imageUrl = animalObj.image_url
  }
}
//VS
class Animal {
  constructor({ id, name, donations, image_url: imageUrl }) {
    this.id = id
    this.name = name
    this.donations = donations
    this.imageUrl = imageUrl
  }
}

// nice for working with big objects, like `event`
document.body.addEventListener("mousemove", ({ screenX, screenY }) => {
  console.log(screenX, screenY)
})

// with arrays too!
const array = ["️☕", "🥯", "🍩"]
const [coffee, bagel, donut] = array

console.log(coffee) // "️☕"
console.log(bagel) // "🥯"
console.log(donut) // "🍩"

```

---

#### Object property definitions shorthand (key value assignment)

```javascript
const pizza = 'pepperoni'
const restaurant = 'sbarros authentic New York Pizza™️'

const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}

// name of key is the same as the name of the variable we wish to assign to that key
const pizzaObj2 = { pizza, restaurant }
```

---

#### ES6 Spread Operator with Objects
Important for IMMUTABILITY

- Spread Operator vs `Object.assign()`

```js
const pasta = {
  sauce: 'red',
  garlicky: true
}

// OLDer WAY
// take all the key/value pairs from mudCopy and merge them into this new TARGET OBJ, which happens to be blank
const morePasta = Object.assign({}, pasta)

pasta !== morePasta // copy of the object, not mutation

// NEW HOTNESS
// first arg is target obj; the thing i want to add properties to
const moreMorePasta = { ...pasta, cheese: 'please' }
```

#### ES6 Spread Operator With Arrays
- Spread Operator vs `array1.concat(array2)`

```js
const spices = ['cumin', 'coriander']

const spices2 = ['black pepper']

const allTheSpices = spices.concat(spices2)

const allTheSpicesAgain = [...spices, ...spices2]
```

---

#### all the forms of arrow functions

```javascript

const implicitReturn = () => 'hi'
const explicitReturn = () => {
  return 'hi'
}

const withOneArgOnly = name => `hi ${name}`
const withMultipleArgs = (name, greet) => `${greet} ${name}`

// less code ↓
const double = function (num) {
  return num * 2
}
const double = (num) => {
  return num * 2
}
const double = (num) => num * 2
const double = num => num * 2
```

---

#### function binding vs arrow functions
Important to know, refer to `this` keyword lecture!

```javascript
const dog = {
  name: 'fezzik',
  favSnacks: ['turkey', 'peanut butter', 'soccer balls'],
  sayName: function() {
    // what is this
    return this.name
  },
  barkName: () => {
    // what is this
    return this.name + ' BARK!'
  },
  sayFavFoods: function() {
    // what is this
    this.favSnacks.forEach(s => {
      // what is this
      return `${this.name} likes ${s}`
    })
  },
  sayFavFoodsNoArrow: function() {
    // what is this
    this.favSnacks.forEach(function(snack) {
      // what is this
      console.log(`${this.name} likes ${snack}`)
    })
  },
  sayFavFoodsWithBind: function() {
    // what is this
    this.favSnacks.forEach(function(s) {
      // what is this
      console.log(`${this.name} likes ${s}`)
    }.bind(this))
  }
}

dog.sayName()
dog.barkName()
dog.sayFavFoods()
dog.sayFavFoodsNoArrow()
dog.sayFavFoodsWithBind()

```

---

#### class instance properties and class syntax in general
Important to know, refer to OO lecture!

```javascript

class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  bark() {
    return this.name
  }
}

```

---

#### passing functions around as arguments (callbacks)

```javascript
const names = ['ian', 'gracie', 'mazen']

// anonymous inline callback fn
names.map((name) => name.toUpperCase())

// vs fn reference
const upperCaser = name => name.toUpperCase()
names.map(upperCaser)

// be careful of extra args!
const nums = [1,2,3]
nums.map(parseInt)
```

---
#### Iterators (map, reduce, forEach, filter, find, etc)
What iterators mutate data? (sort, splice, push, pop...) 

```js
const names = ['ian', 'gracie', 'mazen']

const noIan = names.slice(1) // non-destructive
names.splice(1) // destructive

const removedIan = names.filter(name => name !== 'ian') // non-destructive

const foundIan = names.find(name => name === 'ian') // non-destructive; returns ELEMENT not ARRAY

```

---

#### dynamic object keys

```javascript
const bingo = {}
const yaboi = 'evans'
// bracket notation
bingo[yaboi] = 'yeet'
// vs dot
bingo.yaboi = 'POWERFUL'

function dynamicSetKeys(obj, key, val) {
  // obj -> {}
  // key -> 'topping'
  // val -> 'scallions'
  obj[key] = val
  // { toppings: 'scallions' }
  return obj
}

```

### Bonus: Import/Export and ES Modules

If you have code broken up across multiple files, you can use the ES Module system to manage access to your code across different files (NOTE: this requires you to be running your frontend on a server!). This helps solve a couple of problems: separating your code across multiple files makes it easier to maintain and less cluttered, but if you're relying on loading in multiple script files in your HTML file, knowing what order they need to go in can be tricky. ES Modules let us split our code across multiple files and ensures that we have access to all the code we need, when we need it.

Let's say we have a project set up like this: 

```
├── utils/
│   ├── calculate.js
│   └── math.js
├── index.js
└── index.html
```

Our Javascript code is split across three files: `utils/calculate.js`, `utils/math.js`, and `index.js`. 

To get started using ES6 Modules, we'll just add a script tag for our main `index.js` file in `index.html` and give it a type of module:

```html
<script src="index.js" type="module">
```

(Note: modules are deferred automatically, so no need to use defer!)

Next, we'll need to specify what variables we want to `export` from each of our utility script files:

```js
// in ./utils/math.js

const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

export { add, subtract }
```

And in order to use these variables in another file, we'll need to `import` them using the exported variable names and the relative path to the other js file:

```js
// in ./utils/calculate.js
import { add, subtract } from './math.js'

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2) // using imported add fn
    case "-":
      return subtract(num1, num2) // using imported subtract fn
    default:
      return ""
  }
}
```

In the exaple above, we're using *named exports* to specify what variables we're exporting. You can also specif a default export. For example:

```js
// in ./utils/calculate.js
import { add, subtract } from './math.js'

function evaluate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2) // using imported add fn
    case "-":
      return subtract(num1, num2) // using imported subtract fn
    default:
      return ""
  }
}

export default evaluate
```

To import a default export:

```js
// in ./index.js
import evaluate from './utils/calculate.js'

console.log(evaluate(2, 2, "+"))
```


[MDN on ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
[ES Modules explained in Comics](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

### Bonus: Conditional rendering in template literals

```js
const aTruthyVariable = true
const moreContent = "some more content"

const stringWithIf = `This will break ☹️ ${if (aTruthyVariable) { moreContent }}`

const stringWithTernary = `You can use ternary in template literals if u want ${aTruthyVariable ? moreContent : ""}`

const stringWithLogicalAnd = `This technique will ALSO add some things to the string if we want ${aTruthyVariable && moreContent}`

```


### External Resources

- [Modern JavaScript](http://www.reactnativeexpress.com/modern_javascript)
- [Wes Bos Simple Guide for Undertanding Destructuring in JS](https://wesbos.com/destructuring-objects/)
- [MDN Article on ES6 Object Shorthand Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)
- [MDN Article on ES6 Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Article on Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Article on `Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [MDN Article on ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN Article on Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [MDN Article on forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN `Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN "Working with Objects"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
