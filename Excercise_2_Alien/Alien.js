function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
  fill(200);
  
  translate (100,20)
    
  rect (50,200,100,200)//Body
  stroke("#000000");
  strokeWeight(5);
  stroke("#000000");
  strokeWeight(5);
  beginShape(); //Head shape
  vertex(0,100);
  bezierVertex(0, 100, 100, -150, 200, 100);
  vertex(100,250);
  endShape();
  fill("00FF00");
  stroke("#000000");
  strokeWeight(2);
  push();
  translate (55,65)
  circle(0,0,50,50);//Left eye
  pop();
  push();
  translate (150,65)
  circle(0,0,50,50); //Right eye
  pop()
  triangle (75,150,125,150,100,200);//Mouth
  rotate (PI/4);
  fill(200);
  rect (250,-150,10,200)//Right arm
  fill(200);
  rotate (PI/2);
  rect (110,-190,10,200)//Left arm
  
  
  }