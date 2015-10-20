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

//Create Element Controller
var ec = new elementController();

this.gameLoop = function()
{
  //Clear Screen
  clearScreen();

  //Tick and Draw
  ec.tickWorld();

  window.requestAnimationFrame(gameLoop);
}
gameLoop();
