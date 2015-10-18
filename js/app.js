//Game of life values -- Global!
var squaresWide, squaresHigh, squareSize;
squaresWide = 10;
squaresHigh = 10;
squareSize  = 30;

//Get the canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Set canvas up
canvas.width = squaresWide * squareSize;
canvas.height = squaresHigh * squareSize;

this.gameLoop = function()
{
  //Clear Screen
  clearScreen();

  //Draw grid - In grid.js
  drawGrid(context);


  window.requestAnimationFrame(gameLoop);
}
gameLoop();
