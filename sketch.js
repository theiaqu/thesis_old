let img;
let img2;
function preload() {
  img = loadImage('picture.jpg');

  // Image warps because not scaling proportionally
  imageMode(CORNER);
  image(img2, 0, 0, width, height);

  // Image scales proportionally
  imageMode(CORNER);
  image(img2, 0, 0, width, img.height*width/img.width); // to fit width

  // Placing image on screen and keeping in proportion
  var scale = 0.8;
  imageMode(CENTER);
  image(img2, 0.5*width, 0.5*height, scale*width, scale*img.height*width/img.width); // to fit width}

function setup() {
  createCanvas(1000,1000);
  image(img, 0, 0);
  tint(0, 153, 204); // Tint blue
  image(img2, 500, 500);
}
