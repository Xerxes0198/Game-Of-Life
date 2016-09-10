var gridElement = function()
{
  //Grid element
  //IsAlive
  var isAlive = false;
  var willDie = false;
  var willBorn = false;
  var cursor = 0;
  var xLocation, yLocation;

  //List of neighbours.
  var neighbours = new Array();

  this.toggleAlive = function()
  {
    this.isAlive = !isAlive;
  }

  //Based on given location, calculate neighbours
  this.calculateNeighbours = function(inCursor, canvasWidth, canvasHeight, numberOfElements, inElementController)
  {
    this.cursor = inCursor;

    //Convert to cartesean values
    this.xLocation = (inCursor % squaresWide) * squareSize;
    this.yLocation = Math.floor(inCursor / squaresWide) * squareSize;

    //Neighbour locations
    neighbour1X = this.xLocation - squareSize;
    neighbour1Y = this.yLocation - squareSize;

    neighbour1X = this.wrapValueX(neighbour1X);
    neighbour1Y = this.wrapValueY(neighbour1Y);
    neighbours[0] = inElementController.getGridElementFromXY(neighbour1X, neighbour1Y);
    //

    neighbour2X = this.xLocation;
    neighbour2Y = this.yLocation - squareSize;

    neighbour2X = this.wrapValueX(neighbour2X);
    neighbour2Y = this.wrapValueY(neighbour2Y);
    neighbours[1] = inElementController.getGridElementFromXY(neighbour2X, neighbour2Y);

    //

    neighbour3X = this.xLocation + squareSize;
    neighbour3Y = this.yLocation - squareSize;

    neighbour3X = this.wrapValueX(neighbour3X);
    neighbour3Y = this.wrapValueY(neighbour3Y);
    neighbours[2] = inElementController.getGridElementFromXY(neighbour3X, neighbour3Y);

    //

    neighbour4X = this.xLocation - squareSize;
    neighbour4Y = this.yLocation;

    neighbour4X = this.wrapValueX(neighbour4X);
    neighbour4Y = this.wrapValueY(neighbour4Y);
    neighbours[3] = inElementController.getGridElementFromXY(neighbour4X, neighbour4Y);

    //
    neighbour5X = this.xLocation + squareSize;
    neighbour5Y = this.yLocation;

    neighbour5X = this.wrapValueX(neighbour5X);
    neighbour5Y = this.wrapValueY(neighbour5Y);
    neighbours[4] = inElementController.getGridElementFromXY(neighbour5X, neighbour5Y);

    //

    neighbour6X = this.xLocation - squareSize;
    neighbour6Y = this.yLocation + squareSize;

    neighbour6X = this.wrapValueX(neighbour6X);
    neighbour6Y = this.wrapValueY(neighbour6Y);
    neighbours[5] = inElementController.getGridElementFromXY(neighbour6X, neighbour6Y);

    //

    neighbour7X = this.xLocation + squareSize;
    neighbour7Y = this.yLocation;

    neighbour7X = this.wrapValueX(neighbour7X);
    neighbour7Y = this.wrapValueY(neighbour7Y);
    neighbours[6] = inElementController.getGridElementFromXY(neighbour7X, neighbour7Y);

    //

    neighbour8X = this.xLocation + squareSize;
    neighbour8Y = this.yLocation + squareSize;

    neighbour8X = this.wrapValueX(neighbour8X);
    neighbour8Y = this.wrapValueY(neighbour8Y);
    neighbours[7] = inElementController.getGridElementFromXY(neighbour8X, neighbour8Y);

    //Convert back to gridElement and store in neighbours Array
    console.log(inElementController.getGridElementFromXY(10,10));

  }

  this.wrapValueX = function(neighbourInX)
  {
    //If the input value is not less than min or greater than max,
    //return input value and do not wrapValueX
    if(neighbourInX >= 0 && neighbourInX < (squareSize * squaresWide))
    {
      return neighbourInX;
    }

    retValue = 0;

    if(neighbourInX < 0)
    {
      retValue = neighbourInX + (squaresWide * squareSize);
    }
    else
    {
      if(neighbourInX >= (squaresWide * squareSize))
      {
        retValue = neighbourInX - (squaresWide * squareSize);
      }
    }

    return retValue;
  }

  this.wrapValueY = function(neighbourInY)
  {
    if(neighbourInY >= 0 && neighbourInY < (squareSize * squaresHigh))
    {
      return neighbourInY;
    }

    retValue = 0;

    if(neighbourInY <= 0)
    {
      retValue = neighbourInY + (squaresHigh * squareSize);
    }
    else
    {
      if(neighbourInY > (squaresHigh * squareSize))
      {
        retValue = neighbourInY - (squareSize * squaresHigh);
      }
    }

    return retValue;
  }

  this.debugLoc = function(inX, inY, cursor)
  {
    console.log("Debug location of neighbour: " + cursor);
    console.log("X: " + inX);
    console.log("Y: " + inY);
  }

  this.checkState = function(inElements)
  {
    //Neighbours alive count
    var neighboursAlive = 0;

    //Reference all neighbours from neighbours array in inElements...
    for(xi = 0; xi < neighbours.length; xi++)
    {
      if(inElements[neighbours[xi]].isAlive)
        neighboursAlive++;
    }
    console.log("Neighbours Alive: " + neighboursAlive);

    if(isAlive == true)
    {
      //Any live cell with fewer than two live neighbours dies, as if caused by under-population.
      //Any live cell with two or three live neighbours lives on to the next generation.
      //Any live cell with more than three live neighbours dies, as if by over-population.
      //Any doead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

      //Note to Greg, seems to be counting self as a neighbour

      //If this is alive and count higher than 4 this will die
      if(neighboursAlive < 2)
        //willDie = true;
        isAlive = false;

      if(neighboursAlive > 4)
        isAlive = false;
    }
    else
    {

      neighboursAlive == 3
        isAlive = true;
    }
  }
}
