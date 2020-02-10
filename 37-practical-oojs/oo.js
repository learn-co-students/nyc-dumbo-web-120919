// Bronze Age OOJS
function Dog(name, favSnacks) {
  this.name = name
  this.favSnacks = favSnacks
  this.speak = function () {
    console.log(`woof my name is ${this.name}`)
  }
}

const dog = new Dog("fezzik", ['peanut butter', 'soccer balls'])
const dog2 = new Dog("spinny", ['spinach', 'tennis balls'])

// dog instanceof Dog
// Object.getPrototypeOf(dog)

// Modern OOJS
// class Dog {
//   constructor(name, favSnacks) {
//     this.name = name
//     this.favSnacks = favSnacks
//     this.speak = speak
//   }
// }

// const dog = new Dog("fezzik", ['peanut butter', 'soccer balls'])
// const dog2 = new Dog("spinny", ['spinach', 'tennis balls'])
