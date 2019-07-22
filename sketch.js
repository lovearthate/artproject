function setup() {
  createCanvas(1040, 1080);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 30, 80);
}
let a = 0; // Create a global variable "a" of type Number
let b = 0; // Create a global variable "b" of type Number

function setup() {
  createCanvas(720, 400);
  stroke(255);
}

function draw() {
  background(0);

  a = a + 1; // Increment a with an integer
  b = b + 2.2; //Increment b with a float
  line(a, 0, a, height / 2);
  line(b, height / 2, b, height);

  if (a > width) {
    a = 0;
  }
  if (b > width) {
    b = 0;
  }
}
