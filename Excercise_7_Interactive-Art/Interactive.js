function preload() {
    font = loadFont('AmaticSC-Regular.ttf');
  }
  function Mover(){
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.acceleration = createVector(-0.001,0.01); // 2 a constant accelleration, for now
    this.topspeed = 20; //2
  
    this.update = function() {
      // particles going to mouses location
      let mouse = createVector(mouseX,mouseY);
      let dir = p5.Vector.sub(mouse, this.location);
      dir.normalize();
      dir.mult(0.5);
      this.acceleration = dir;
  
      //acceleration of particle
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
  
      //changing location
      this.location.add(this.velocity);
    }
  
    this.display = function() {
      //display particle
      stroke(44,59,82)
      strokeWeight(2)
      fill(255,255,255)
      ellipse(this.location.x,this.location.y,4.5,4.5);
    }
      //particle will go to other side of screen when it touches the edges
    this.checkEdges = function() {
      if (this.location.x > width) {
        this.location.x = 0;
      } else if (this.location.x < 0) {
        this.location.x = width;
      }
  
      if (this.location.y > height) {
        this.location.y = 0;
      } else if (this.location.y < 0) {
        this.location.y = height;
      }
    }
  }
  
  let mover;
  
  let movers = [];
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    mover = new Mover();
    //create particles a X amount of times
    for (let i = 0; i < 2000; i++) {
      movers[i] = new Mover();
    }
  
  }
  
  function draw() {
    //Bathspa Text
    background(33,37,62);
    textAlign(CENTER)
    textSize(120);
    fill(255);
    textFont(font);
    stroke(0, 0, 0);
    strokeWeight(4);
    text('Welcome to BathSpa University', windowWidth/3.4, windowHeight/2, 685);
    
    mover.update();
  
    mover.checkEdges();
  
    for (let i = 0; i < movers.length; i++) {
      //updates each particle
      movers[i].update();
      movers[i].checkEdges();
      movers[i].display();
    }
  }