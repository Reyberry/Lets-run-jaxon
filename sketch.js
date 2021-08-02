var path, pathImg;
var runner, runnerImg;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  runnerImg = loadAnimation("Runner-1.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",pathImg);
  path.velocityY=1;
  path.scale=1.4;
  runner=createSprite(250,250);
  runner.addAnimation("running",runnerImg);
  runner.velocityY=0.1;
  runner.scale=0.1;
  edgeleft = createSprite(30,30,10,800);
  //edgeleft.visible = false;
  edgeright = createSprite(660,10,540,800);
  //edgeright.visible = false;
  drawSprites();
}

function draw() {
 //background(220);

runner.collide(edgeleft);
runner.collide(edgeright);
 if (keyDown("space"))
 {runner.velocityY=-0.1}
  if (path.y>600){
  path.y=height/2;
 }

 drawSprites();
}
