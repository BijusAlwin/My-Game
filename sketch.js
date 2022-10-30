var trex, trex_running, edges;
var groundImage;
var ground
var invisible_ground
//var gamestate
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200);
  
 
  invisible_ground=createSprite(200,190,400,20)
  invisible_ground.visible=false
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground", groundImage)

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("white");
  console.log(trex.y)
  ground.velocityX=-5
  if (ground.x<0){
    ground.x=ground.width/2
  }
  //jump when space key is pressed
     if(keyDown("space")&& trex.y>149){
      trex.velocityY = -10;
     }
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisible_ground)
  drawSprites();
}