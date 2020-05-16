let img;
let img2;
function preload() {
  img = loadImage('picture.jpg');
  img2 = loadImage('picture2.jpg');
}
function setup() {
  createCanvas(1000,1000)
  image(img, 0, 0);
  image(img2, 100, 100);
}
