let samples, button, bgImg;

function preload() {
  bgImg = loadImage("media/images/nola_group.jpg");

  samples = new Tone.Players({
    bday: "media/audio/birthday_2021.mp3"
  }).toDestination();
}

function setup() {
  createCanvas(windowWidth, 600);

  let vw = windowWidth / 2;
  button = createButton("Happy Birthday");
  button.position(vw, 300);  
  button.mousePressed(() => {
    Tone.start();
    samples.player("bday").start();
  });
}

function draw() {
  background(bgImg);
}