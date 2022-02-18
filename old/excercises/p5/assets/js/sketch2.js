let x, y, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
}

function draw() {
  r = random(255);
  g = random(0,0)
  b = random(255);
  x = random(width);
  y = random(height);
  let d = map(mouseX, 0, width, 5, 100);
  noStroke();
  fill(r, g, b, 100);
  ellipse(x, y, d);
}

function mousePressed() {
  clear()
}