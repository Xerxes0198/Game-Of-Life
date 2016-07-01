//Draw rough border - Not pixel offset aligned!!! --
this.drawGrid = function(context)
{
  for(i = 0; i < squaresWide + 1; i++)
  {
    context.beginPath();
    context.moveTo(i * squareSize,0);
    context.lineTo(i * squareSize, canvas.height);
    context.stroke();
  }

  for(i = 0; i < squaresHigh + 1; i++)
  {
    context.beginPath();
    context.moveTo(0, i * squareSize);
    context.lineTo(canvas.width, i * squareSize);
    context.stroke();
  }
}

//Draw the elements of the grid
//TODO: Combine this with previous function. No need for second function
this.drawElements = function(context, inElements)
{
  //Start a loop for all squares AND if alive
  for(i = 0; i < inElements.length; i++)
  {
    //If the element is alive, calculate it's location and draw
    if(inElements[i].isAlive)
    {
      //Calculate the row
      //Divide i by squares wide MODULUS to get +1 row
      xLocation = (i % squaresWide) * squareSize;

      //console.log("Calc X: " + xLocation);
      console.log("Mod test" + i % squaresWide);

      //Calculate the column
      yLocation = Math.floor(i / squaresWide) * squareSize;
      //console.log("Calc Y: " + yLocation);

      //Move to position wide and line
      //Offset for centre of elemtent

      //Draw element
      context.fillStyle = squareColour;
      context.fillRect(xLocation, yLocation, squareSize * .9 ,squareSize * .9);
    }
  }
}
