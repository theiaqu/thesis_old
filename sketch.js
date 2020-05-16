let img;
function preload() {
  img = loadImage('picture.jpg');
}
function setup() {
  createCanvas(2000,2000)
  image(img, 0, 0);
}
