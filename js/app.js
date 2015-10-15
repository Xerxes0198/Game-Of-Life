//Game of life values
var squaresWide, squaresHigh, squareSize;

squaresWide = 10;
squaresHigh = 10;
squareSize  = 20;

//Get the canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Set canvas up
canvas.width = squaresWide * squareSize;
canvas.height = squaresHigh * squareSize;

//Draw rough border - Not pixel offset aligned!!! --
