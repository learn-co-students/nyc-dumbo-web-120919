const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

class Bubble {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.r = Math.floor(Math.random() * 256)
    this.g = Math.floor(Math.random() * 256)
    this.b = Math.floor(Math.random() * 256)
    this.a = 1
    this.size = Math.floor(Math.random() * 5) + 10
    this.active = true

    this.dx = -(Math.floor(Math.random() * 5) + 1)
    this.dy = -(Math.floor(Math.random() * 5) + 1)
  }

  draw() {
    context.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    context.fill()
  }

  update() {
    this.a -= 0.001
    this.x += this.dx
    this.y += this.dy
    if (this.a <= 0 || this.x < 0 || this.y < 0) {
      this.active = false
    }
  }
}

let bubbles = []
let x = 0
let y = 0
let frames = 0
let running = false

canvas.addEventListener("mouseenter", ({ offsetX, offsetY }) => {
  x = offsetX
  y = offsetY
  running = true
  loop()
})

canvas.addEventListener("mousemove", ({ offsetX, offsetY }) => {
  x = offsetX
  y = offsetY
})

canvas.addEventListener("mouseleave", ({ offsetX, offsetY }) => {
  x = offsetX
  y = offsetY
  running = false
})


function loop() {
  frames++

  context.clearRect(0, 0, canvas.width, canvas.height)

  if (running && frames % 2 === 0) {
    bubbles.push(new Bubble(x, y))
  }

  bubbles.forEach(bubble => {
    bubble.update()
    bubble.draw()
  })

  bubbles = bubbles.filter(bubble => bubble.active)

  requestAnimationFrame(loop)
}