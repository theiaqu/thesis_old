let img1;
let img2;
let img3;
var x;
var w; 
function preload() {
  img1 = loadImage('picture.jpg');
  img2 = loadImage('picture2.jpg');
  img3 = loadImage('texture.jpg')
}

// function setup() {
//   createCanvas(1000,1000);
//   image(img, 0, 0);
//   tint(0, 153, 204); // Tint blue
//   image(img2, 500, 500);
// }

function draw() {
  x = map(mouseY, 0, 500, 0, -250);
  w = map(mouseY, 0, 500, 600, 1000);

  a = map(mouseX, 0, 670, -151, 0);



  background(220);
  image(img3, a, 0);
  image(img1, a, -21);
	image(img2, x+a, 0, w, w);

}
