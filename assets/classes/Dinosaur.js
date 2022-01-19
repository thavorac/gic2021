class Dinosaur {
  appearance = null;
  width = 10;
  height = 20;
  speed = 10;
  ctx = null;
  positionX = null;
  positionY = null;

  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.positionX = x;
    this.positionY = y;
    this.ctx.fillStyle = '#F9DC5C';
    this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
  setSpeed(baseSpeed, level) {
    this.speed = baseSpeed + level;
  }
  jump() {
    console.log('dinosaur is jumping!!');
  }
}