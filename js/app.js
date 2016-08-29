//Game of life values -- Global!
var squaresWide, squaresHigh, squareSize, willStep;
squaresWide = 10;
squaresHigh = 10;
squareSize  = 25;

squareColour = "#ffff00";
clearColour = "#ffffff";



//Functions to pause the stepping process
willStep = false;

//Get the canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

canvas.addEventListener('click', function(event)
{
  indexClicked = ec.getGridElementFromXY(event.x, event.y);

  alert("Index clicked: " + indexClicked);
});

stepWorldClicked = function()
{
  console.log("Btn Pressed");
  willStep = true;
}

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
  if(willStep)
  {
    //Clear Screen
    clearScreen();

    //Step the elementController
    ec.tickWorld();

    //Reset step flag
    willStep = false;
  }
}

this.gameLoop = function()
{
  //Call tick
  tickFunction();

  //Loop once all work has been done
  window.requestAnimationFrame(gameLoop);
}
gameLoop();
//if greg has a function, what is it>> he is le derpiest derp in the world.
