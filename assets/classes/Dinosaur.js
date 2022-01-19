class Dinosaur {
  appearance = null;
  width = 10;
  height = 20;
  speed = 10;
  ctx = null;
  positionX = null;
  positionY = null;

  constructor(gameContext) {
    this.gameContext = gameContext;
    this.positionX = 10;
    this.positionY = 200;

    this.appearance = new Image();
    this.appearance.src = "assets/images/bird.png";

    this.appearance.onload = (() => {
      this.gameContext.ctx.drawImage(this.appearance, 0, 0, 200, 200, this.positionX, this.positionY, 75, 75);
    })
  }
  move = (() => {
    console.log('dinosaur move');
  })
  setSpeed(baseSpeed, level) {
    this.speed = baseSpeed + level;
  }
  jump() {
    console.log('dinosaur is jumping!!');
  }
}