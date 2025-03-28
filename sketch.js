let samples, button, bgImg;

function preload() {
  bgImg = loadImage("media/images/nola_group.jpg");

  samples = new Tone.Players({
    bday: "media/audio/birthday_2021.mp3"
  }).toDestination();
}

function setup() {
  createCanvas(windowWidth, 600);

  button = createButton("Happy Birthday");
  button.position(windowWidth / 2 - button.width / 2, 300);  
  button.mousePressed(() => {
    Tone.start();
    samples.player("bday").start();
  });
}

function draw() {
  let imgAspect = bgImg.width / bgImg.height;
  let newWidth = width;
  let newHeight = newWidth / imgAspect;

  if (newHeight > height) {
    newHeight = height;
    newWidth = newHeight * imgAspect;
  }

  imageMode(CENTER);
  background(255);   
  image(bgImg, width / 2, height / 2, newWidth, newHeight);   

  button.position(windowWidth / 2 - button.width / 2, 300);
}