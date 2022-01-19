let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let game = new Game(ctx);

function startGame() {
  let playerNameInput = document.getElementById("player_name");
  game.start(playerNameInput.value);
}