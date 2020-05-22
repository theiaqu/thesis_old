// cd Sites/thesis
// php -S localhost:8000

let img1;
let img2;
var color = 0;
var angle = 0;
var bug;
let w, h;
let canvas;
let sel;
let countries = [];
let year;

function preload() {
  img1 = loadImage('picture.jpg');
  img2 = loadImage('picture2.jpg');
  texture = loadImage('texture.jpg');
}

function setup() {
  w = windowWidth;
  h = windowHeight - 40;
  canvas = createCanvas(w, h);
  canvas.position(0, 50);

  background(255);
  textAlign(CENTER);
  background(200);

  sel = createSelect();
  sel.id("select");
  sel.position(0, 0);
  sel.option('1980');
  sel.option('1990');
  sel.selected('1990');
  sel.changed(mySelectEvent);


  // for the date and place
  input = createInput("What country did you grow up in?");
  input.id("input");
  input.position(0, 50);
  input.attribute("placeholder", "type message...");

  button = createButton('↵');
	button.id("button");
	button.position(input.width, input.y);
	button.mousePressed(generateArt);

  // image(img1, random(width - 250), random(height - 250));
  // img2.resize(150, 0);
  // filter(GRAY);
  // image(img2, random(width - 250), random(height - 250));
  // textFont("Arial");
  // textSize(22);
  // blend(texture, 0, 0, 500, 500, 0, 0, width, height, SOFT_LIGHT);
}

function draw() {
  push();
  translate(mouseX, mouseY);
  rotate(radians(angle));
  line(-50, -50, 50, 50);
  line(50, -50, -50, 50);
  angle++;
  pop();
  //noFill();
  //rect(10, 10, width-20, height-20);
}

function mySelectEvent() {
  year = sel.value();
  background(200);
  text('The year is ' + year + '!', 50, 50);
}

function generateArt() {
	const country = input.value().substring(0, 15);
	getCountryImages(msg);
	input.value('');
}

function getCountryImages(msg) {
  let country = msg;
  

}
