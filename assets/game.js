class Game {
  // Properties
  playerName = null;
  dinosaur = null;
  score = null;
  speed = 10;
  level = 1;
  constructor(ctx) {
    this.ctx = ctx;
  }
  
  // Methods
  start(playerName) {
    // Receive player name and save it.
    if (playerName) {
      this.playerName = playerName;
      console.log('Game is starting!!', this);
    } else {
      alert('Player name is required!!');
    }

    // Remove starting container from canvas
    let startingContainer = document.getElementById("starting-container");
    startingContainer.style.display = "none";

    // Initinalize dinosaur object and display it on the screen
    let dinosaur = new Dinosaur(this.ctx, 20, 100);

    // Initialize tree object and display it on the screen
    let tree = new Tree(this.ctx, 900, 100);
    tree.move();
  }
  pause() {
    console.log('Pause the game');
  }
}
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
  move() {
    this.positionX = this.positionX - this.speed;
    this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    requestAnimationFrame(this.move)
  }
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let game = new Game(ctx);

function startGame() {
  let playerNameInput = document.getElementById("player_name");
  game.start(playerNameInput.value);
}