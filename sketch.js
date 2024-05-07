function setup() {
    createCanvas(400, 400);
    background("gray")
  }
  
  function draw() {
    stroke("blue");
    fill("white");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  