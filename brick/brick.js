const wall = document.querySelector("#wall");
if (!wall.getContext) {
  alert('Your browser does\'nt support canvas drawing!');
}
const ctx = wall.getContext('2d');
const wallWidth = wall.width
const wallHeight = wall.height

function drawWall(canvasContext, wallWidth=0, wallHeight=0) {
  const brickHeight = 20;
  const brickWidth = 50;
  const space = 5;
  const numberWallColumn = Math.ceil(wallWidth / (brickWidth + space));
  const numberWallRow = Math.ceil(wallHeight / (brickHeight + space));

  console.log('numberWallColumn', numberWallColumn);
  console.log('numberWallRow', numberWallRow);
  canvasContext.fillStyle = "#F6522F"

  for (let brickRow = 0; brickRow<numberWallRow; brickRow++) {
    // Draw columns
    for (let brickColumn = 0; brickColumn < numberWallColumn; brickColumn++) {
      // Draw rows
      if (brickRow % 2 == 0) {
        canvasContext.fillRect((brickColumn * (brickWidth + space)) - ((brickWidth/2) + (space/2)), brickRow * (brickHeight + space), brickWidth, brickHeight);
      } else {
        canvasContext.fillRect(brickColumn * (brickWidth + space), brickRow * (brickHeight + space), brickWidth, brickHeight);
      }
    }
  }
}

drawWall(ctx, wallWidth, wallHeight);