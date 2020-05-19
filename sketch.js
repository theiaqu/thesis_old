let img;
let img2;
function preload() {
  img = loadImage('picture.jpg');
  img2 = loadImage('picture2.jpg');
}

function setup() {
  background(255);
  createCanvas(1000,1000);
}

function draw() {
  image(img, 0, 0);
  tint(0, 153, 204); // Tint blue
  img2.resize(150, 0);
  image(img2, 500, 500);
  ellipse(mouseX, mouseY, 20, 20)
}
