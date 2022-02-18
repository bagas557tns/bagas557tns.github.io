var hue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  hue = 0;
}

function draw() {
}

function mouseDragged() {
  if (hue > 360) {
    hue = 0;
  } else {
    hue++;
  }    colorMode(HSL, 360);
    stroke("white")
    strokeWeight(2)
    fill(hue, 200, 200)
    ellipse(mouseX, mouseY, 50, 50);
}

function doubleClicked() {
  clear()
}