var img, x, y;

function preload() {

img = loadImage("Title_Card.png");

}



function setup() {

createCanvas (1220, 640);

background(0);

noStroke();

}

//pointellism

function draw() {

x = random(width);

y = random(height);

var c = img.get(x, y);

fill(c[0], c[1], c[2], 50);

rect (x, y, 20, 20);

}