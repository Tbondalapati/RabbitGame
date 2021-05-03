var garden,rabbit;
var gardenImg,rabbitImg;
var apple2, apple2Img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple2Img = loadImage("apple2.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

  
  apple2 = createSprite(random(50, 350), 40, 10, 10);
  apple2.addImage(apple2Img);
  apple2.scale = 0.5;
  apple2.velocityY = 3;
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  

  if(frameCount%80 == 0){
  apple2 = createSprite(random(50, 350), 40, 10, 10);
  apple2.addImage(apple2Img);
  apple2.scale = 0.5;
  apple2.velocityY = 3;
    
    
  }
}
  
