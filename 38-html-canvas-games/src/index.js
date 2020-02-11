const canvas = document.querySelector("#game")
const context = canvas.getContext("2d")

const resetBtn = document.querySelector("#reset")
resetBtn.addEventListener("click", e => {
  e.target.blur()
  reset()
})

function intersect(r1, r2) {
  return !(r2.x > r1.x + r1.width ||
    r2.x + r2.width < r1.x ||
    r2.y > r1.y + r1.height ||
    r2.y + r2.height < r1.y)
}

const oofSound = new Audio("../assets/oof.m4a")
const player = new Player(context, {
  x: 40,
  y: canvas.height - 198,
  width: 80,
  height: 198
})

document.body.addEventListener("keypress", e => {
  if (e.code === "Space") {
    player.jump()
  }
})

let playing = false
let frames = 0
let nextBieb = 100
let obstacles = []
let score = 0

function drawScore() {
  context.fillStyle = "yellow"
  context.font = "16px 'Press Start 2P'"
  context.textAlign = "left"
  context.fillText("Score: " + score, 10, 30)
}

function loop() {
  frames++
  // clear our canvas
  context.clearRect(0, 0, canvas.width, canvas.height)

  if (frames === nextBieb) {
    nextBieb += Math.floor(Math.random() * 100) + 50
    const obstacle = new Obstacle(context, {
      x: canvas.width - 80,
      y: canvas.height - 80,
      width: 80,
      height: 80
    })
    obstacles.push(obstacle)
  }

  // update the position of our game objects
  player.update()
  obstacles.forEach(obstacle => obstacle.update())

  // 
  obstacles.forEach(obstacle => {
    if (intersect(obstacle.coords, player.coords)) {
      oofSound.play()
      playing = false
      context.fillStyle = "yellow"
      context.font = "26px 'Press Start 2P'"
      context.textAlign = "center"
      context.fillText("U got biebed! lol", canvas.width / 2, canvas.height / 2)
    }
  })

  // draw their new positions
  obstacles.forEach(obstacle => obstacle.draw())
  player.draw()
  drawScore()

  // clean up
  const obstaclesBefore = obstacles.length
  obstacles = obstacles.filter(obstacle => obstacle.coords.x + obstacle.coords.width >= 0)
  const obstaclesAfter = obstacles.length
  score += obstaclesBefore - obstaclesAfter

  if (playing) {
    requestAnimationFrame(loop)
  }
}

function reset() {
  frames = 0
  nextBieb = 100
  obstacles = []
  score = 0
  start()
}

function start() {
  playing = true
  loop()
}

function stop() {
  playing = false
}

start()