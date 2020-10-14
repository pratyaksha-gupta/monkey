
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodgroup, obstaclegroup
var score
var survivalTime=0;
function preload(){
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
    bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600)
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
   
  console.log(ground.x)
  
  foodgroup=new Group()
  obstaclegroup=new Group()
  
  
}


function draw() {
  background("green")
  
  stroke("white")
 textSize(20);
  fill("white")
  text("score:"+score,500,50);
  
  stroke("black")
textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
  
  if(keyDown("space")){
   monkey.velocityY=-10  
     
     }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
    
   
  obstacles();
bananas();
      
 monkey.collide(ground)     
  
 drawSprites(); 
}

function obstacles(){
if(frameCount%300===0){
  
  obstacle=createSprite(800,320,10,40)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-6
  obstacle.lifetime=200
obstaclegroup.add(obstacle)
 obstacle.scale=0.15
  
 }
}

function bananas(){
  if(frameCount%80===0){
 banana=createSprite(400,0,20,10) 
 banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage)
   foodgroup.add(banana)
    banana.velocityX=-6
    banana.lifetime=200
    banana.scale=0.07
    
}}
