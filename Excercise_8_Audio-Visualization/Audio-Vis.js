var mySound, fft, bgImage;

let numBars = 128;
let barWidth, barHeight;
let barSpacing = 1;

function preload() {
  mySound = loadSound('KEYGEN CHURCH - Tenebre Rosso Sangue (Calm Loop).mp3');
  bgImage = loadImage('WAIT_OF_THE_WORLD.png');
}

function setup() {
  createCanvas(windowWidth, 1080);
  
  // Create a new FFT analysis
  fft = new p5.FFT();
  
  mySound.setVolume(0.4);
  mySound.play();
  
  // Calculate the Bars width
  barWidth = width / numBars - barSpacing;
}

function draw() {
  // Draw the background image with proper scaling
  let imgAspect = bgImage.width / bgImage.height;
  let canvasAspect = width / height;
  
  let drawWidth, drawHeight;
  if (imgAspect > canvasAspect) {
    drawWidth = width;
    drawHeight = width / imgAspect;
  } else {
    drawWidth = height * imgAspect;
    drawHeight = height;
  }
  
  image(bgImage, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);

  stroke(0, 0, 0);
  strokeWeight(1);

  // Draws the bars
  let spectrum = fft.analyze();
  for (let i = 0; i < numBars; i++) {
    barHeight = map(spectrum[i], 0, 255, 0, height) * 0.6; // Reduce amplitude
    fill(lerpColor(color('rgb(255,0,0)'), color('#FF5800'), i / numBars));
    rect(i * (barWidth + barSpacing), height - barHeight, barWidth, barHeight);
  }

  let waveform = fft.waveform();

  // Draws the waveform
  noFill();
  beginShape();
  stroke(0,0,0);
  strokeWeight(5);

  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height) + 450; // Move waveform down
    vertex(x, y);
  }

  endShape();
}