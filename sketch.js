var jaxon, jaxon_running;
var path, pathImg;
var invisibleboundary1, invisibleboundary2


function preload(){
  //pre-load images
  pathImg = loadImage("path.png");

  jaxon_running = loadAnimation("Runner1.png","Runner2.png");
}


function setup(){
  createCanvas(400,400);
 
  //create a path sprite
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4; 
  path.scale=1.2;

  //creating running jaxon Sprite
  jaxon=createSprite(200,380,10,10);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale = 0.05;

  //creating invisible boundaries 
  invisibleboundary1=createSprite(44,200,5,400);
  invisibleboundary2=createSprite(365,200,5,400); 

  //making boundaries invisible
  invisibleboundary1.visible = false;
  invisibleboundary2.visible = false;

}


function draw() {
  background("grey");

  //jaxon move when mouse changes its position
  if(keyDown("Mouse")&& jaxon.x >= 400){
  jaxon.x = World.MouseX;
  jaxon.velocityX = +5;
  jaxon.velocityX = -5; 
  }



  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }


  drawSprites();
}
