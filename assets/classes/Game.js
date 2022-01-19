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
    // let dinosaur = new Dinosaur(this.ctx, 20, 100);

    // Initialize tree object and display it on the screen
    let tree = new Tree(this.ctx, 900, 100);
    tree.move();
  }
  pause() {
    console.log('Pause the game');
  }
}