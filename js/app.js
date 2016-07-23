//Game of life values -- Global!
var squaresWide, squaresHigh, squareSize;
squaresWide = 5;
squaresHigh = 5;
squareSize  = 25;

squareColour = "#ffff00";


//Get the canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Set canvas up
canvas.width = squaresWide * squareSize;
canvas.height = squaresHigh * squareSize;

//Create Element Controller
var ec = new elementController(canvas.width, canvas.height);
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
//if greg has a function, what is it>> he is le derpiest derp in the world.
