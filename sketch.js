// cd Sites/thesis
// php -S localhost:8000

let img1;
let img2;
var color = 0;
var angle = 0;
var bug;

function preload() {
  img1 = loadImage('picture.jpg');
  img2 = loadImage('picture2.jpg');
  texture = loadImage('texture.jpg');
}

function setup() {
  background(220);
  createCanvas(800,800);
  image(img1, random(width - 250), random(height - 250));
  img2.resize(150, 0);
  filter(GRAY);
  image(img2, random(width - 250), random(height - 250));
  // filter(INVERT);
  textFont("Arial");
  textSize(22);
  blend(texture, 0, 0, 500, 500, 0, 0, width, height, SOFT_LIGHT);
}

function draw() {
  push();
  translate(mouseX, mouseY);
  rotate(radians(angle));
  line(-50, -50, 50, 50);
  line(50, -50, -50, 50);
  angle++;
  pop();
  noFill();
  rect(10, 10, width-20, height-20);
}
