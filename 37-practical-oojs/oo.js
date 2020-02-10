// Bronze Age OOJS
// function Dog(name, favSnacks) {
//   this.name = name
//   this.favSnacks = favSnacks
//   this.speak = function () {
//     console.log("look whos talkin now")
//   }
// }

// Dog.all = []

// Dog.getAll = function () {
//   return Dog.all
// }

// Dog.prototype.speak = function () {
//   console.log(`woof my name is ${this.name}`)
// }

// Dog.prototype.trick = function () {
//   console.log(`doing a backflip`)
// }

// const dog = new Dog("fezzik", ['peanut butter', 'soccer balls'])
// const dog2 = new Dog("spinny", ['spinach', 'tennis balls'])

















// dog instanceof Dog
// Object.getPrototypeOf(dog)

class Dog {

  static all = []

  numberOfLegs = 4

  constructor(name, favSnacks) {
    this.name = name
    this.favSnacks = favSnacks

    Dog.all.push(this)
  }

  someCallback = () => {
    console.log("arrow fn", this)
  }

  render() {

  }

  speak() {
    console.log(`woof my name is ${this.name}`)
  }

  static find(name) {
    return Dog.all.find(dog => name === dog.name)
  }

}

// const dog = new Dog(obj.name, obj.favSnacks)
// dog.render()

// Dog.prototype.speak = function () {
//   console.log(`woof my name is ${this.name}`)
// }

// Dog.prototype.trick = function () {
//   console.log(`doing a backflip`)
// }

const dog = new Dog("fezzik", ['peanut butter', 'soccer balls'])
const dog2 = new Dog("spinny", ['spinach', 'tennis balls'])
