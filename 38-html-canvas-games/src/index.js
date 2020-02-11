const canvas = document.querySelector("#game")
const context = canvas.getContext("2d")

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

function loop() {
  // clear our canvas
  context.clearRect(0, 0, canvas.width, canvas.height)

  // update the position of our game objects
  player.update()

  // draw their new positions
  player.draw()

  requestAnimationFrame(loop)
}

loop()