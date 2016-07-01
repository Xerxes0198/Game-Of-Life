var gridElement = function()
{
  //Grid element
  //IsAlive
  var isAlive = false;
  var willDie = false;
  var cursor = 0;

  //List of neighbours.
  var neighbours = new Array();

  this.toggleAlive = function()
  {
    this.isAlive = !isAlive;
  }

  //Based on given location, calculate neighbours
  this.calculateNeighbours = function(inCursor)
  {
    this.cursor = inCursor;

    //Calc first neighbour
    if(inCursor - squaresWide - 1 < 0)
    {
      neighbours[0] = inCursor - 1;
    }
    else
    {
      neighbours[0] = inCursor - squaresWide - 1;
    }
  }

  this.checkState = function(inElements)
  {
    //Neighbours alive count
    var neighboursAlive = 0;

    //Check neighbours and see if they are alive
    /*Neighbours:
    -1-w -0-w +1-w
    -1-0 ---- +1-0
    -1+w +0+w +1+w
    */

    //console.log("Calc neighbour: " + (cursor -1 -squaresWide + (squaresWide)).toString());
    //if(inElements[inCursor -1 -squaresWide].isAlive) neighboursAlive += 1;

    //If this is alive and count higher than 4 this will die

  }

  this.test = function()
  {
    console.log("SG");
  }
}
