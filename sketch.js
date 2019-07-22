function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 30, 80);
};
let message = 'hover over the artwork here*',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x,
  y; // x and y coordinates of the text

function preload() {
  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(710, 400);

  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(204, 120);

  // write the text in black and get its bounding box
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 20);
    y += random(-5, 9);
  }
}

