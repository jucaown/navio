var mar
var navio
var navioImg
var marImg

function preload(){
marImg = loadImage("sea.png");
navioImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(200,200);
  mar.addImage(marImg);
  mar.scale = 0.3;
  mar.velocityX = -10;

  navio = createSprite(100,250);
  navio.addAnimation("navioX", navioImg);
  navio.scale = 0.25;
}

function draw() {
  background("blue");

  if(mar.x <= 0){
    mar.x = mar.widht/2;
  }










    drawSprites();
}
