class Tree {
  shape = null;
  size = null;
  ctx = null;
  width = 20;
  height = 30;
  positionX = null;
  positionY = null;
  speed = 10;

  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.positionX = x;
    this.positionY = y;
    this.ctx.fillStyle = '#A9DC5C';
    this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
  move = (() => {
    this.positionX = this.positionX - this.speed;
    this.ctx.clearRect(0, 0, 1000, 1000); 
    this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    requestAnimationFrame(this.move)
  })
}