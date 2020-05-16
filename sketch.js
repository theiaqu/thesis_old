let img;
let img2;
let wasClicked = false;

function preload() {
  img = loadImage('picture.jpg');
  img2 = loadImage('picture2.jpg');
}
function setup() {
  createCanvas(1000,1000);
}

function draw() { //this is happening at 60 frames per second....
  background(0); //re-draw the background every frame...

  if(wasClicked == false){
    image(img, 0, 0);
    //tint(0, 153, 204); // Tint blue
    image(img2, 500, 500);  }

}

function mouseClicked(){
  console.log('confirmation that the mouse got clicked!');
  console.log(mouseX, mouseY); //where is the mouse anyway?

  if(
  mouseX > 200 && //if the mouse is greather than 200 we're over the image
  mouseX < 300 && //if the mouse is less than 300 were over the image (since the image is at 200 and is 100 wide = 300)
  mouseY > 200 && //same idea but on the vertical axis.
  mouseY < 300
){
  wasClicked = true //set the click boolean to be true since we clicked, this will turn off the conditional statement above in the draw step and should make the image no-longer render since that code is now 'skipped'
}
}
