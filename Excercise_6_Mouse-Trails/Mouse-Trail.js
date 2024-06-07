var d = 50
function setup() 
{
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

mouseX = -d;
mouseY = -d;
}

function draw() 
{
  fill(255, 50);
  ellipse(mouseX, mouseY, 50,50)
}