var gridElement = function()
{
  //Grid element
  //IsAlive
  var isAlive = false;
  var willDie = false;
  //List of neighbours.


  this.toggleAlive = function()
  {
    this.isAlive = !isAlive;
  }

  this.test = function()
  {
    console.log("SG");
  }
}
