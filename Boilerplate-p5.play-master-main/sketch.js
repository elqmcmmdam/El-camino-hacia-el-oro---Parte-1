var player,thief;
var gold,money;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;

function preload() {
  thief = loadImage("thief.png");
  money = loadImage("money.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  player = createSprite(windowWidth/2,windowHeight/2,20,20);
  player.shapeColor = "darkred";
  player.addImage("playerthief", thief);
  player.scale = 0.1;

  gold = createSprite(windowWidth/2+500,windowHeight/2-275,20,20);
  gold.shapeColor = "gold";
  gold.addImage("moneybag", money);
  gold.scale = 0.1;

  wall1 = createSprite(windowWidth/2-30,windowHeight/2,5,65);
  wall2 = createSprite(windowWidth/2+30,windowHeight/2,5,65);
  wall3 = createSprite(windowWidth/2,windowHeight/2+30,65,5);
  wall4 = createSprite(windowWidth/2+30,windowHeight/2-65,5,65);
  wall5 = createSprite(windowWidth/2-47,windowHeight/2-95,150,5);
  wall6 = createSprite(windowWidth/2-120,windowHeight/2+20,5,230);
  wall7 = createSprite(windowWidth/2+10,windowHeight/2+135,265,4);
  
}

function draw() {
  background(0,0,0);

  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);

  if (keyDown(RIGHT_ARROW)) {
    player.x += 2;
  }
  if (keyDown(LEFT_ARROW)) {
    player.x -= 2;
  }
  if (keyDown(DOWN_ARROW)) {
    player.y += 2;
  }
  if (keyDown(UP_ARROW)) {
    player.y -= 2;
  }

  drawSprites();
}