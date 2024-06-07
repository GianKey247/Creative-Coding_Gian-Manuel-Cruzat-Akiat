function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(0);
    
    // Outer loop to create the grid rows
    for (var i = 0; i < 36; i += 2) {
      // Inner loop to create the grid columns
      for (var j = 0; j < 36; j += 2) {
        // Calculate the position for each rectangle
        var x = 21 * j;
        var y = 21 * i;
  
        fill(0)
        ellipse(x,y, 63, 63)
        
        // Set the fill color based on the loop variables
        fill(i * 13, j * 13, 255);
  
        // Draw the rectangle
        ellipse(x, y, 60, 60); 
      }
    }
  }