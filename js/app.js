//Game of life values -- Global!
var squaresWide, squaresHigh, squareSize;
squaresWide = 45;
squaresHigh = 45;
squareSize  = 12;

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

this.tickFunction = function()
{
  //Tick and Draw elements
  ec.tickWorld();
}

this.gameLoop = function()
{
  //Clear Screen
  clearScreen();

  //Call tick
  tickFunction();

  window.requestAnimationFrame(gameLoop);
}
gameLoop();
