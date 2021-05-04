var Score
var monkey
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,350);
  monkey=createSprite(80,310,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  monkey.debug=false;
  monkey.setCollider("rectangle",0,0,550,600)
  
  ground=createSprite(300,345,600,10)
  ground.shapeColor="brown";
  
  
  
  invGround=createSprite(300,345,600,10);
  invGround.velocityx=-5;
  invGround.x=invGround.width/2;
  console.log(invGround.x);
  invGround.visible=false;
  
  bananaGroup=new Group ();
  obstaclesGroup = new Group ();
  
score=0;
  
}


function draw() {
background("green");
  
  if (invGround.x<0){
    invGround.x=invGround.width/2
  }
  
  if (keyDown("space") ){
    monkey.velocityY=-15;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
   
  bananaFood();
  obstacle();
  
  
if (monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();
  score=score+1;
  
  
}

  
 if (obstaclesGroup.isTouching(monkey)){
        invGround.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    
    
    }
  
  
  
   
   
  monkey.collide(invGround);
  
  drawSprites();
  
   textSize(20);
   stroke("yellow");
  fill("yellow");
   text("Score: "+ score, 300,50);
  
  
    if(obstaclesGroup.isTouching(monkey)){
        invGround.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
  
  
    }
  
  
  
}

function bananaFood(){
  // creating banana
  if (frameCount%100===0){
    banana=createSprite(610,250,40,10)
    banana.y=random(120,200);
    banana.velocityX = -(6+(score/2));

     // giving lifetime
    banana.lifetime=300;
    monkey.depth=banana.depth+1;
    
      banana.addImage(bananaImage);
      banana.scale=0.1;
   
    
    banana.debug=false;
    banana.setCollider("circle",0,0,200);
    
    
    
    bananaGroup.add(banana);
  
    


    
  }
  }
function obstacle (){
  if(frameCount%70===0){
    obstacles=createSprite(800,320,10,40);
    obstacles.addImage(obstaceImage);
    obstacles.lifetime=300;
    obstacles.scale=0.16;
    obstacles.velocityX=-(6+(score/2));
    
    obstacles.debug=false;
    obstacles.setCollider("circle",0,0,250);
    
    obstaclesGroup.add(obstacles);
  }
  
  
}




