var elementController = function(inCanvasWidth, inCanvasHeight)
{
  //Element values
  this.numberOfElements = 0;

  this.canvasWidth = inCanvasWidth;
  this.canvasHeight = inCanvasHeight;

  //Array of elements
  var currentElements = new Array();

  //Loops through them all and applies rules
  this.applyRules = function()
  {
    //TODO: Move this function to the draw elements loop.. Too many Loops
    for(i = 0; i < currentElements.length; i++)
    {
      //Greg, I found the bug here.. Too tired to debug it tonight..
      //Go to sleep..
      // Bug in sub-routine below
      currentElements[i].checkState(currentElements);
    }
  }

  //Function to transform a location to a grid element
  //Returns element number
  this.getGridElementFromXY = function(inX, inY)
  {
      console.log("Calculating grid element from cartesean coordinates");

      cellX = Math.floor(inX / squareSize);
      cellY = Math.floor(inY / squareSize);

      index = cellX + cellY * squaresWide;

      return index;
  }

  //Tick world
  this.tickWorld = function()
  {
    //Draw grid
    drawGrid(context);

    //Apply rules
    this.applyRules();

    //Draw elemnts
    drawElements(context, currentElements);
  }

  this.setNumberOfElements = function(inNumberOfElements)
  {
    this.numberOfElements = inNumberOfElements;
    console.log("Number of elements set to: " + this.numberOfElements);
  }

  this.setupElements = function()
  {
    if(!this.numberOfElements == 0 || isNaN(this.numberOfElements))
    {
      for(i = 0; i < this.numberOfElements; i++)
      {
        currentElements[i] = new gridElement();
        currentElements[i].calculateNeighbours(i, this.canvasWidth, this.canvasHeight, this.numberOfElements, this);
        //currentElements[i].test();
      }
    }
    else
    {
      //No elements defined
      console.log("No positive ammount of elements defined");
    }

    //For testing, set random ones to alive
    currentElements[0].toggleAlive();
    currentElements[1].toggleAlive();
    currentElements[2].toggleAlive();
  }
}
