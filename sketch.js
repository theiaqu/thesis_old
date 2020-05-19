// cd Sites/thesis
// php -S localhost:8000

let img;
let img2;
var color = 0;
var angle = 0;

function preload() {
  img = loadImage('picture.jpg');
  img2 = loadImage('picture2.jpg');
}

function setup() {
  background(0);
  createCanvas(1000,1000);
  image(img, 0, 0);
  tint(0, 153, 204); // Tint blue
  img2.resize(150, 0);
  image(img2, 500, 500);
  textFont("Arial");
  textSize(22);
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
