let img;
let img2;
function preload() {
  img = loadImage('picture.jpg');
  img2 = loadImage('picture2.jpg');
  img2.resize(50, 100)
}

function setup() {
  createCanvas(1000,1000);
  image(img, 0, 0);
  tint(0, 153, 204); // Tint blue
  image(img2, 500, 500);
}
