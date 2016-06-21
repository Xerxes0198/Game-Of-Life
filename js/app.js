//Game of life values -- Global!
var squaresWide, squaresHigh, squareSize;
squaresWide = 45;
squaresHigh = 45;
squareSize  = 10;

//Get the canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Set canvas up
canvas.width = squaresWide * squareSize;
canvas.height = squaresHigh * squareSize;

//Create Element Controller
var ec = new elementController();
ec.setNumberOfElements(squaresHigh * squaresWide);
ec.setupElements();

this.gameLoop = function()
{
  //Clear Screen
  clearScreen();

  //Tick and Draw
  ec.tickWorld();

  window.requestAnimationFrame(gameLoop);
}
gameLoop();
