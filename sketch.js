var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obs1Img, obs2Img, obs3Img, obs4Img, obs5Img, obs6Img;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obs1Img = loadImage("obstacle1.png");
  obs2Img = loadImage("obstacle2.png");
  obs3Img = loadImage("obstacle3.png");
  obs4Img = loadImage("obstacle4.png");
  obs5Img = loadImage("obstacle5.png");
  obs6Img = loadImage("obstacle6.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacle();
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 70 == 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.7;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
     
}

function spawnObstacle() {
  if(frameCount % 60 == 0) {

    obstacle = createSprite(200, 150, 20, 20);
  obstacle.velocityX=-3;

  var a = Math.round(random (1, 6));
  switch(a) {
    case 1 : obstacle.addImage(obs1Img)
             break;
     case 2 : obstacle.addImage(obs2Img)
             break;
     case 3 : obstacle.addImage(obs3Img)
             break;  
     case 4 : obstacle.addImage(obs4Img)
             break;
     case 5 : obstacle.addImage(obs5Img)
             break;
     case 6 : obstacle.addImage(obs6Img)
             break;
  }

  }
  
}


