let img;
let img2;
let d;
function preload() {
  img = loadImage('picture.jpg');
  img.mouseOver(changeGray);
  img2 = loadImage('picture2.jpg');
  img2.mouseOver(changeGray);
  d = 10;
}

function setup() {
  createCanvas(1000,1000);
  image(img, 0, 0);
  tint(0, 153, 204); // Tint blue
  image(img2, 500, 500);
}

function changeGray() {
  d = d + 10;
  if (d > 100) {
    d = 0;
  }
}
