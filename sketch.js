function setup() {
  createCanvas(1940, 1980);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 20, 80);
}
