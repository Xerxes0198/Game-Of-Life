var gridElement = function()
{
  //Grid element
  //IsAlive
  var isAlive = false;
  var willDie = false;
  var cursor = 0;
  var xLocation, yLocation;

  //List of neighbours.
  var neighbours = new Array();

  this.toggleAlive = function()
  {
    this.isAlive = !isAlive;
  }

  //Based on given location, calculate neighbours
  this.calculateNeighbours = function(inCursor, canvasWidth, canvasHeight, numberOfElements)
  {
    this.cursor = inCursor;
    console.log("Test");

    //Convert to cartesean values
    this.xLocation = (inCursor % squaresWide) * squareSize;
    this.yLocation = Math.floor(inCursor / squaresWide) * squareSize;

    console.log("X Location: " + this.xLocation);
    console.log("Y Location: " + this.yLocation);

    //First n
    fnx = this.xLocation - squareSize;
    fny = this.yLocation - squareSize;
    //Transform for each neighbour
    /*Neighbours:
    -1-w -0-w +1-w
    -1-0 ---- +1-0
    -1+w +0+w +1+w
    */

    //Convert back to gridElement


  }

  this.checkState = function(inElements)
  {
    //Neighbours alive count
    var neighboursAlive = 0;

    //Check neighbours and see if they are alive

    //If this is alive and count higher than 4 this will die

  }

  this.test = function()
  {
    console.log("SG");
  }
}
