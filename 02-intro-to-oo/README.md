Intro to Object Orientation
===

## SWBATs
- [ ] Explain the benefits of Object Oriented Programming
- [ ] Explain the difference between a class and an instance
- [ ] Create instance and class methods
- [ ] Understand how to use the `self` keyword
- [ ] Define attribute readers and writers using `attr_` macros
- [ ] Explain the difference between local variables, instance variables, and class variables
- [ ] Get more practice with array methods (`each`, `map`, `select`, `find`)

## Outline
- Discuss the benefits of OOP
- Discuss classes and instances
  - describe methods as the 'interface' for our class
- Demonstrate class methods and instance methods on in-built Ruby classes (String, Array)
  - methods as sending messages
  - different approaches for sending messages (dot notation, `send`)
  - Monkey patching
- Build a `BankAccount` class using the deliverables below
  - `new` and `initialize`
  - instance methods
  - instance variables
  - `attr_` macros


## Discussion Questions
- What does the phrase "Everything is an object in Ruby" mean?
- What is an object?
- What are the benefits of Object Oriented Programming?
- What is the difference between a class and an instance?

## Deliverables

Here is a naive implementation of a clown class in Ruby using only a hash which stores key-value pairs.

```rb
clown = { name: "Krusty", age: 55, skills: "Drinking", fears: "Failure" }
```

Write an implementation of a clown class that meets the following requirements:

- [x] can get the name, age, skills and fear for a clown
- [x] can say hello and print out their details to the screen
"Hello my name is Krusty. I'm 55 years old. I'm good at drinking and terrified of failure."
- [ ] can juggle -> puts some bowling pin emojis to the screen
- [ ] overcome fears
- [ ] can show me all the clowns that have been created
*bonus*
- [ ] can find a clown based on their name