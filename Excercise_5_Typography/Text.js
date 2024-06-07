var font;

function preload() {
  font = loadFont("BlackOpsOne-Regular.ttf");
}

var points;
function setup() {
  createCanvas(400, 400);
  background(255);
  fill(0);
  noStroke();
  points = font.textToPoints("Hello", 100, 100, 100, {
    sampleFactor: 0.15,
  }); // determines how many points are generated
  for (var i = 0; i < points.length; i++) {
    // starts at 0, then if "i" is less than the length given, "i" is increased by 1
    var p = points[i];
    ellipse(p.x, p.y, random(2, 15), random(2, 15)); // x, y, width(min 2, max 15), height (min 2, max 15)
  }
}
