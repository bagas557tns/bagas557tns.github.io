let x;
let y;

let r;
let g; 
let b;

function setup() {
  canvas = createCanvas(600,580);
  canvas.position(180,50, "relative");

  x = width / 2;
  y = height / 2;
  
  r = random(255);
  g = random(255);
  b = random(255);

  // background("yellow");
}

function draw() {
  for (let i = 0; i < 10; i++) {
    step();
  }
}

function step () {
  
  x += random(-7,7);
  y += random(-7,7);
  
    
  r += random(-1,1);
  g += random(-1,1);
  b += random(-1,1);
  
  x = constrain(x, 0, width);
  y = constrain(y, 0, width);
  
  r = constrain(r, 0, 50);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 50);
  
  stroke(50,g,50);
  strokeWeight(4);
  point(x, y);
}

function mouseDragged(){
  noLoop();
}