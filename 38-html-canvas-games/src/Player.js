class Player {
  constructor(context, coords) {
    this.context = context
    this.coords = coords

    this.image = new Image()
    this.image.src = "../assets/player.png"

    this.jumpSound = new Audio("../assets/boing.m4a")

    this.deltaY = 0
    this.jumping = false
  }

  jump() {
    if (!this.jumping) {
      this.jumpSound.play()
      this.jumping = true
      this.deltaY = -20
    }
  }

  draw() {
    // this.context.fillStyle = "green"
    // this.context.fillRect(this.coords.x, this.coords.y, this.coords.width, this.coords.height)
    this.context.drawImage(this.image, this.coords.x, this.coords.y, this.coords.width, this.coords.height)
  }

  update() {
    this.coords.y += this.deltaY

    if (this.jumping) {
      this.deltaY += 1

      console.log(this.deltaY)
      if (this.coords.y + this.coords.height >= this.context.canvas.height) {
        this.jumping = false
        this.deltaY = 0
      }
    }
  }
}