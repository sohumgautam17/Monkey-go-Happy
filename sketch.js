//Global Variables
var bananaImage, obstacleImage, ground,  banana, obstacleGroup, bananaGroup;

var invisbleGround, forestback, score, monkey, backgroundImage, monkeyAnimation, bananaImage, stoneImage;

var score = 0;


function preload(){
  
 
  backgroundImage = loadImage("jungle.png");

  monkeyAnimation = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png",)
 
  bananaImage = loadImage("banana.png")

  obstacleImage = loadImage("stone.png")
}




function setup()
{
  createCanvas(600,300);
  forestback = createSprite(300, 150);
  forestback.addImage("jungleback", backgroundImage);
  forestback.scale = 2;

  monkey = createSprite(100, 270);
  monkey.addAnimation("monkeygod", monkeyAnimation);
  monkey.scale = .1;
  
  ground = createSprite(300, 271, 600, 10);
  ground.visible = false;

  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw()
{
 background(255); 
monkey.collide(ground);

if(keyDown("Space")&&monkry.y>200){
monkey.velocityY = -16;
}
monkey.velocityY = monkey.velocityY + .8;

text("Score: "+ score, 500,50);
stroke("black");
  textSize(20);
  fill("black")
if(monkey.isTouching(bananaGroup))
{
score = score + 1
monkey.scale = monkey.scale + .005;

}

switch(score){
  case 10: monkey.scale = 0.105;
  break;
  case 20: monkey.scale = 0.110;
  break;
  case 30: monkey.scale = 0.115;
  break;
  case 40: monkey.scale = 0.120;
  break;
  default: break;
}

if(obstacleGroup.isTouching(monkey)){
  monkey.scale = 0.1;
}

spawnbananas();
spawnobstacles();
drawSprites()
}


function spawnbananas(){
  if(World.frameCount % 80===0){
  var banana = createSprite(500, 100, 10, 10);
  banana.y = random(90, 150);
 
  banana.addImage("Banana1", bananaImage);
  banana.lifetime = 200;
  banana.scale = .05;
  
  banana.velocityX = -3;
   
  bananaGroup.add(banana);
    
  }
}


function spawnobstacles(){
  if(World.frameCount % 300===0){
  var obstacle = createSprite(500, 230, 10, 10);
  obstacle.velocityX = -5;
  obstacle.addImage("Stone1", obstacleImage);
  obstacle.scale=.2
  obstacle.lifetime = 120
 
 obstacleGroup.add(obstacle);

 }
}
