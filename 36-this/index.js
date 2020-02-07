function whatsThis() {
  console.log("THIS IS:", this)
}

function speak() {
  console.log(`woof my name is ${this.firstName}`)
}

const speakArrow = () => {
  console.log(`woof my name is ${this.firstName}`)
}

// const dog = {
//   firstName: 'fezzik',
//   favSnacks: ['peanut butter', 'soccer balls'],
//   speak: speak,
//   speakArrow: speakArrow,
//   thisIs: this,
//   speakArrowInObj: () => {
//     console.log(`woof my name is ${this.firstName}`)
//   },
//   boundSayThisFn: function () {
//     console.log(`woof my name is ${this.firstName}`)
//   }.bind(this),
//   sayFavSnax: sayFavSnax
// }

// const dog2 = {
//   firstName: 'spinny',
//   favSnacks: ['spinach', 'tennis balls'],
//   speak: speak,
//   sayFavSnax: sayFavSnax
// }

// PREHISTORIC OOJS
// function createDog(name, favSnacks) {

//   return {
//     firstName: name,
//     favSnacks: favSnacks,
//     speak: speak
//   }
// }
// const dog = createDog("fezzik", ['peanut butter', 'soccer balls'])
// const dog2 = createDog("spinny", ['spinach', 'tennis balls'])

// Bronze Age OOJS
// function Dog(name, favSnacks) {
//   this.firstName = name
//   this.favSnacks = favSnacks
//   this.speak = speak
// }

// const dog = new Dog("fezzik", ['peanut butter', 'soccer balls'])
// const dog2 = new Dog("spinny", ['spinach', 'tennis balls'])

// Modern OOJS
class Dog {
  constructor(name, favSnacks) {
    this.firstName = name
    this.favSnacks = favSnacks
    this.speak = speak
  }
}

const dog = new Dog("fezzik", ['peanut butter', 'soccer balls'])
const dog2 = new Dog("spinny", ['spinach', 'tennis balls'])
