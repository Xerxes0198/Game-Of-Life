var elementController = function()
{
  //Element values
  this.numberOfElements = 0;

  //Array of elements
  var currentElements = new Array();

  //Loops through them all and applies rules

  //Tick world
  this.tickWorld = function()
  {
    //Draw grid
    drawGrid(context);
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

    }
    else
    {
      //No elements defined
      console.log("No positive ammount of elements defined");
    }
  }
}
