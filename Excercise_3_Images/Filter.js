var img;

function preload() {

img = loadImage("Room.png");

}



function setup () {

createCanvas (1220, 640);

background(0);

}

//filter

function draw() {

background(0);

image(img, 0, 0);

filter(BLUR, 22);

}

