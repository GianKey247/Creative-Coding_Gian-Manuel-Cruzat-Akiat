var img, x, y;

function preload() {

img = loadImage("ULTRAKILL_Parry.png")

}



function setup() {

createCanvas (1220, 640)

background(0);

noStroke();

}

//pixels (used rectangle for this)

function draw() {

background(0);

x = mouseX;

y = mouseY;

image( img, 0, 0);

var c = get(x, y);

fill(c);
  
stroke(3)

ellipse (x + 50, y + 50, 100, 100);

}