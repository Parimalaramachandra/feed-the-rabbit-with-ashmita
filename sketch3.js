var garden,rabbit;
var gardenImg,rabbitImg;
var score=0;
var play;
var serve;
var gameState;
var end;
var Apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
 // Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

 //creating rabbit 
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage("running",rabbitImg);

 //generate random numbers
 var rand =  Math.round(random(10,100))
 console.log(rand)

}


function draw() {
  background(0);

  console.log(rabbit.y)

  //display score
  textSize(15);
  stroke("red");
  fill("yellow");
  stroke("blue");
  strokeWeight(3);
  textSize(22);
  text("Score :"+score,283,328);
  

  if(gameState == "serve"){
    //display welcome text
    textSize(25);
    fill("black");
    stroke("white");
    strokeWeight(3);
    textSize(22);
    text("Welcome! Press Enter to start.",30,200);
  
   //Moving the rabbit on pressing enter key
    if(keyDown("enter")){
     rabbit.velocityX = 3;
     rabbit.velocityY = 4;
     gameState="play"
    }
  }

  if(gameState == "play"){
   if(rabbit.isTouching(bottomEdge)|| score==6) {
     gameState="end"  
    }
  }
  
  if(gameState == "end"){
    fill("black");
    stroke("white");
    strokeWeight(3);
    textSize(22);
    text("GameOver", 200, 200);
    rabbit.velocityX = 0;
    rabbit.velocityY = 0;
  }
   

  //destroy the apples when ball touches them
  
  if(rabbit.isTouching(Apple)){
    score=score+1;
    Apple.destroy();
  }

  //making rabbit to jump when space is presssed
  if(keyDown("space")&& rabbit.y >= 100){
    rabbit.velocityY = -10;
  }

  rabbit.velocityY = rabbit.velocityY + 0.8

  //apples
  apple()
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function apple(){
if (frameCount % 80 == 0){ 
  Apple=createSprite(182,99,40,10);
  var rand=Math.round(random(1.6))
  Apple.addImage("loading",appleImg);
  Apple.velocityX=-3;
  Apple.scale =0.07

  //assigning lifetime to the variable
  Apple.lifetime = 134
   
}
}