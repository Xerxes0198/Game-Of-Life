this.clearScreen = function()
{
  //Change context colour first.
  context.fillStyle = clearColour;

  //Draw clear rectangle
  context.fillRect(0,0,canvas.width, canvas.height);

  console.log("Clear screen called");
}
