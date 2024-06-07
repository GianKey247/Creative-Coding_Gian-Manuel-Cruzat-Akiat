function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0, 255, 255);
    fill(20)
    rect(10, 80, 320, 80);
    rect(100, 60, 120, 20);
    fill(0, 255, 255)
    triangle(220, 80, 220, 60, 180, 60)
    fill(255, 255, 0)
    triangle(330, 120, 330, 80, 240, 80)
    fill(30)
    ellipse(50, 160, 80, 80);
    ellipse(290, 160, 80, 80);
  }