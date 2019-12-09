# Hashketball Review

## How to lecture
- Participation
  - Don't wait for the answer
    - Make a hypothesis (even if you don't plan on sharing it)
  - Don't be afraid to give the wrong answer
- Labs/Pacing
- Recording
- Lecture Code: clone the class repo!
- Breaks
- Question-asking hours
- Should I code along?
- Falling asleep

## Students Will Be Able To s
- Define TDD (Test Driven Development)
- Distinguish between data types in Ruby
- Show how to look up documentation for data types in Ruby
- Demonstrate the use of common Array methods: `each`, `map`, `select`, `find`
- Define the Single Responsibility Principle

## Outline
- [ ] How to lecture -> clone down class repo
- [ ] Walk through hashketball code
- [ ] Discuss rspec, learn and Ruby gems in general
- [ ] Use `binding.pry` and `puts`/`print`/`p` to debug our code
- [ ] Work on passing tests using TDD
  - Use these enumerable methods: `each`, `map`, `select`, `find`
- [ ] Discuss problem solving strategies: 
  - Read error messages
  - Short feedback loop
  - Break up the problem to steps in pseudocode
- [ ] Discuss refactoring strategies:
  - Helper methods
  - Single Responsibility Principle
  - DRY
- [ ] Class exercise!


## RSpec & TDD
- RSpec is a `gem`: someone else's Ruby code that we can use in our projects
- `rspec --fail-fast` handle one error at a time
  - Red, Green, Refactor
  - Make it work (shameless green), make it right, make it fast
- Debugging tools:
  - `binding.pry`
  - `puts` || `p` - print to terminal

## Ruby Data Types
- What do we use these data types for? What methods can we call on them?
  - String
  - Integer
  - Boolean
  - Array
  - Hash

## Enumerable Methods
- What can we use each of these for? What will they return?
  - `each` - loop through the array and let you run whatever ruby code inside a block - spork; returns the original array
  - `map` - loop through an array and return a new array of tthe same size (same # of elements), 
  - `select` - will return an ARRAY based on a true/false condition with the elements from the initial array (good filtering)
  - `find` - return ONE thing (the first thing) from an array where the block for find returns true (filter to one element)

## Methods in Ruby
- Variable scope
- Implicit vs Explicit return
- Single Responsibility Principle

## Resources
[Ruby Docs: Enumerable](https://ruby-doc.org/core/Enumerable.html)
