class Obstacle {
  constructor(context, coords) {
    this.context = context
    this.coords = coords

    this.image = new Image()
    this.image.src = "../assets/biebs.jpeg"
  }

  draw() {
    // this.context.fillStyle = "red"
    // this.context.fillRect(this.coords.x, this.coords.y, this.coords.width, this.coords.height)
    this.context.drawImage(this.image, this.coords.x, this.coords.y, this.coords.width, this.coords.height)
  }

  update() {
    this.coords.x -= 10
  }
}