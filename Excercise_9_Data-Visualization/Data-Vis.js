let gameData;
let games;
let counter = 0;

function preload() {
  gameData = loadJSON("games.json");
}

function setup() {
  createCanvas(600, 950);
  games = gameData.games;
}

function draw() {
  background(255);
  let xPosition = 20;
  let yPosition = 30;
  for (let i = 0; i < games.length; i++) {
    let w = map(games[i].hours*.001, 3, 0, 300, 0);
    noStroke();
    fill(200, 100, 100);
    rect(xPosition, yPosition + 10, w, 20);

    fill(0);
    text(games[i].title + " (" + games[i].hours+ " hours)", xPosition, yPosition);
    yPosition += 50;
  }
}
