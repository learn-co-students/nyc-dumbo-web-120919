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

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```rb
bank_account = { account_holder: "Ian", balance: 1000 }
```

Write an implementation of a bank account that meets the following requirements:

- can get the balance of the account
- can get the account holder's name
- can deposit money into the account
- can withdraw money from the account
- can show me all the bank accounts that have been created
*bonus*
- can find a bank account based on the account holder's name