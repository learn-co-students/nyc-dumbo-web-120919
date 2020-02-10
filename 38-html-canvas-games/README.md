# HTML Canvas and Games

## SWBATs
- [ ] Use the `<canvas>` element to draw shapes
- [ ] Animate the canvas using `requestAnimationFrame`
- [ ] Create classes to represent game objects

## Using HTML Canvas

The `<canvas>` element is a special HTML element meant for drawing graphics via JavaScript. It gives a lot more flexibility in terms of creating shapes, lines, and animations than we have from other DOM elements. The `<canvas>` element looks like this:

```html
<canvas id="game" width="500" height="500"></canvas>
```

The canvas starts off as a blank rectangle. In order to draw on it, you need to get the canvas's rendering context (think of this as the sheet of paper you'll be drawing on):

```js
const canvas = document.querySelector("#game")
const context = canvas.getContext("2d")
```

Once you have access to the context, you can draw on it programatically using Javascript! This will draw two overlapping squares:

```js
// set the fill color you're currently using
context.fillStyle = "rgb(200, 0, 0)"
// draw a rectangle using (x, y, width, height)
context.fillRect(10, 10, 50, 50)

// change the fill style to a new color
context.fillStyle = "rgba(0, 0, 200, 0.5)"
// draw another rectangle
context.fillRect(30, 30, 50, 50)
```

When you're thinking about drawing on the canvas, picture an application like Microsoft Paint. Any time you want to change the color, you have to click on a new color to tell Paint what color you're currently using. In the example above, we're using `context.fillStyle` to set the color of our rectangle's fill. Then we're drawing the rectangle by calling `context.fillRect(x, y, width, height)` and passing in the position of the rectangle relative to the top left corner of our canvas.

Working with the canvas tends to mean writing a lot of verbose code; we call this style of programming *Imperitive Programming*: our code is describing each what needs to happen each step of the way to achieve the required result. [Imperative vs Declarative Programing](https://tylermcginnis.com/imperative-vs-declarative-programming/)

To get started with our game, let's first set up our canvas and draw a rectangle to represent our player:

```js
const canvas = document.querySelector("#game")
const context = canvas.getContext("2d")

function drawRectangle(coordinates) {
  context.fillStyle = "rgb(162, 45, 2)"
  context.fillRect(coordinates.x, coordinates.y, coordinates.width, coordinates.height)
}

const player = {
  x: 40,
  y: canvas.height - 40,
  width: 40,
  height: 40
}

drawRectangle(player)
```

## Animating with Canvas

Using canvas will allow us to draw animations as well as static graphics. The basic steps we'll need to do are:

1. Clear the canvas
2. Update the positions of our game objects
3. Re-draw the game objects

To demonstrate animating a couple of frames, add the following code to the example above:

```js
debugger

// clear the canvas
context.clearRect(0, 0, canvas.width, canvas.height)
// update the position of our game objects
player.y -= 10
// re-draw the game objects
drawRectangle(player)
debugger

context.clearRect(0, 0, canvas.width, canvas.height)
player.y -= 20
drawRectangle(player)
debugger

context.clearRect(0, 0, canvas.width, canvas.height)
player.y -= 30
drawRectangle(player)
```

With your console open, you should see the player rectangle move upwards each time you step through the debugger. In our game, we'll run this logic of _clearing_ the canvas, _updating_ the game objects, and _drawing_ each game object again on a loop so our animation will continue running for the duration of the game.

## The Game Loop

The core logic of our application will come in the form of the game loop, where we'll redraw our game continually in a loop. To run the loop, we'll be using the `requestAnimationFrame` method, which will let the browser call our game loop as soon as it's ready to draw the next frame.

```js
function loop() {
  // clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height)

  // update the position of our game objects
  player.y -= 15

  // re-draw the game objects
  drawRectangle(player)

  // pass in our loop function as a callback to requestAnimationFrame
  requestAnimationFrame(loop)
}

// start the loop
loop()
```

When our loop runs, you should see the player rectangle move upwards until it eventually leaves the canvas! Let's give ourselves a way of stopping and starting the game as well:

```js
let playing = false // pause/resume the game

function loop() {
  // ... animation code here...

  if (playing) {
    // pass in our loop function as a callback to requestAnimationFrame
    requestAnimationFrame(loop)
  }
}

function start() {
  playing = true
  loop()
}

function stop() {
  playing = false
}

// start the loop
start()
```

Try out the start/stop methods in your console to pause the player's movement!

With the core game loop in place, let's work on giving our game objects a nicer interface using some Object Oriented Programming techniques.

## Creating Game Objects

We can take advantage of some object oriented programming techniques to encapsulate the data and behavior of our game objects and give ourselves a nice interface for working with them. Let's start with the `Player` class (it might be a good idea to create a separate file for this class). 

All our game classes will need a few of the same properties: 
- a reference to the canvas context so they can draw on it
- some coordinates to determine their position on the canvas
- an update method to change their positions
- a draw method to draw themselves on the canvas

```js
// Player.js
class Player {
  constructor(context, coordinates) {
    this.context = context
    this.coordinates = coordinates
  }

  draw() {
    this.context.fillStyle = "rgb(25, 184, 49)"
    this.context.fillRect(this.coordinates.x, this.coordinates.y, this.coordinates.width, this.coordinates.height)
  }

  update() {
    this.coordinates.y -= 15
  }
}
```

Now we can create instances of our player class to work with in our game:

```js
// index.js
const player = new Player(context, {
  x: 40,
  y: canvas.height - 40,
  width: 40,
  height: 40
})
```

And in our game loop, we can use the player's `draw()` method:

```js
function loop() {
  // clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height)

  // update the position of our game objects
  player.update()

  // re-draw the game objects
  player.draw()

  // pass in our loop function as a callback to requestAnimationFrame
  requestAnimationFrame(loop)
}
```

Let's also give our player the ability to jump! We'll need a couple of new attributes for our player: a `deltaY` to keep track of how many pixels the player will move in the y axis during each frame, and a `jumping` attribute to determine if the player is currently jumping.

```js
class Player {
  constructor(context, coordinates) {
    this.context = context
    this.coordinates = coordinates

    this.deltaY = 0
    this.jumping = false
  }

  jump() {
    if (!this.jumping) {
      this.jumping = true
      this.deltaY = -15
    }
  }

  update() {
    // update y position based on deltaY
    this.coordinates.y += this.deltaY

    if (this.jumping) {
      this.deltaY += 1 // gravity!

      // check if we're back on the ground
      if (this.coordinates.y + this.coordinates.height >= this.context.canvas.clientHeight) {
        this.coordinates.y = this.context.canvas.clientHeight - this.coordinates.height
        this.jumping = false
        this.deltaY = 0
      }
    }
  }

  draw() {
    this.context.fillStyle = "rgb(162, 45, 2)"
    this.context.fillRect(this.coordinates.x, this.coordinates.y, this.coordinates.width, this.coordinates.height)
  }
}
```

Try calling `player.jump()` in the console to see our new code in action!

## Handling Events

To give our game's users control over when the player jumps, we need to do a little bit of event handling. We'd like to have our character jump every time the user clicks or hits the space bar anywhere in the document. Since we've already handled the logic of making our player jump, this next bit is pretty straightforward (just make sure to use arrow functions so our jump method keeps the right `this`):

```js
document.body.addEventListener('keypress', e => {
  if (e.code === "Space") {
    player.jump()
  }
})

document.body.addEventListener("click", () => player.jump())
```

## Adding Obstacles

With our player class in place, we can now work on adding some obstacles for our player to jump over. We'll create an `Obstacle` class to encapsulate its behavior. Just like the `Player` class, our obstacles will need a few things: the canvas context, their coordinates, and a draw and update function:

```js
class Obstacle {
  constructor(context, coordinates) {
    this.context = context

    this.coordinates = coordinates

    // deltaX determines movement speed
    this.deltaX = -15
  }

  draw() {
    const { x, y, width, height } = this.coordinates
    this.context.fillStyle = "rgb(162, 45, 2)"
    this.context.fillRect(x, y, width, height)
  }

  update() {
    this.coordinates.x += this.deltaX
  }
}
```

Let's use this to create a new obstacle and have it move towards the player:

```js
const obstacle = new Obstacle(context, {
  x: canvas.width,
  y: canvas.height - 80,
  width: 40,
  height: 80
})

function loop() {
  // clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height)

  // update the position of our game objects
  player.update()
  obstacle.update()

  // re-draw the game objects
  player.draw()
  obstacle.draw()

  // pass in our loop function as a callback to requestAnimationFrame
  requestAnimationFrame(loop)
}
```

One obstacle wouldn't make for a very interesting game, so let's re-write our code a bit to add a new obstacle at after a random number of frames. We'll need a counter to keep track of how many times our loop has run, a variable to keep track of when to add the next obstacle, and an array to keep track of all our obstacles. 

```js
let frames = 0
let obstacles = []
let nextObstacleFrame = Math.floor(Math.random() * 100) + 100

function loop() {
  frames++
  if (frames === nextObstacleFrame) {
    nextObstacleFrame += Math.floor(Math.random() * 100) + 100
    const obstacle = new Obstacle(context, {
      x: canvas.width,
      y: canvas.height - 80,
      width: 40,
      height: 80
    })
    obstacles.push(obstacle)
  }
  // clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height)

  // update the position of our game objects
  player.update()
  obstacles.forEach(obstacle => obstacle.update())

  // re-draw the game objects
  player.draw()
  obstacles.forEach(obstacle => obstacle.draw())

  // pass in our loop function as a callback to requestAnimationFrame
  requestAnimationFrame(loop)
}
```

With our updated loop, we should see new obstacles appear every at a random interval. You could also experiment by changing the height of the obstacle to make the game more dynamic.

We should also check for any obstacles that are no longer on the canvas and remove them from our array of obstacles so we can free up some memory:

```js
  // in loop function, after drawing objects:

  // remove obstacles after they leave the canvas
  obstacles = obstacles.filter(obstacle => obstacle.coordinates.x + obstacle.coordinates.width > 0)
```

## Collision Detection

With all the drawing and animation logic in place, our last step is to determine when the player runs into an obstacle. We'll need some way of checking if the player rectangle is overlapping with any obstacle. To start, we can write a helper function that takes two rectangles and returns whether or not they're intersecting:

```js
function intersect(r1, r2) {
  return !(r2.x > r1.x + r1.width ||
    r2.x + r2.width < r1.x ||
    r2.y > r1.y + r1.height ||
    r2.y + r2.height < r1.y)
}
```

Now we can use our intersect function in our game loop to check if the player collided with any obstacles:

```js
  // in loop function, after drawing objects:

  // check collisions
  obstacles.forEach(obstacle => {
    console.log(intersect(player.coordinates, obstacle.coordinates))
  })
```

As soon as an obstacle collides with the player, we should see `true` in our console! With the intersect function working, all we have to do is use our `stop()` method to pause the animation and let the player know they lost:

```js
  // check collisions
  obstacles.forEach(obstacle => {
    if(intersect(player.coordinates, obstacle.coordinates)) {
      stop()
      context.fillText('You Lose :(', 10, 50)
    }
  })
```

## Stretch Goals
If you'd like to continue building on this example, here are some additional features to consider adding:

- Render an sprite for the player and obstacles instead of a rectangle
- Add audio effects when the player jumps/collides
- Add a score
- Add a health bar
- Refactor our game logic from the index.js file to its own class

### Resources
[MDN - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[MDN - Breakout Game using canvas](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)
