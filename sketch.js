
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500)


  
  monkey = createSprite(50,440,30,30)
  monkey.addAnimation("running" , monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(300,475,600,25)
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height)
  monkey.debug = true
}


function draw() {

  background("green")
  
      if(keyDown("space")&& monkey.y >= 420) {
        monkey.velocityY = -12
        }
      monkey.velocityY = monkey.velocityY + 0.8
  console.log(monkey.y)

  monkey.collide(ground)
  
 spawnfood();
  
  drawSprites();
  
}

function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana = createSprite(400,400,40,10);
    banana.y = Math.round(random(400,440));
   banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
    FoodGroup.add(banana);
    }
}



