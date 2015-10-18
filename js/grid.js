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
