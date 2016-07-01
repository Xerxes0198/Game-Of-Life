var elementController = function()
{
  //Element values
  this.numberOfElements = 0;

  //Array of elements
  var currentElements = new Array();

  //Loops through them all and applies rules
  this.applyRules = function()
  {
    //TODO: Move this function to the draw elements loop.. Too many Loops
    for(i = 0; i < currentElements.length; i++)
    {
      currentElements[i].checkState(currentElements);
    }
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
        currentElements[i].calculateNeighbours(i);
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
