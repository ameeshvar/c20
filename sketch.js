var car,wall;
var speed,weight;
var height,deformation


function setup() {
  createCanvas(800,400);
  speed=random(55,90);
weight=random(400,1500);
height=random(200,300);
 car= createSprite(50, 200, 50, 50);
 wall=createSprite(700,200,60,height/2)
 wall.shapeColor=(80,80,80);
 car.velocityX=speed;
 deformation = 0.5 * weight * speed*speed /22500
}

function draw() {
  background(255,255,255);
  if(deformation>180) {
     car.shapeColor=color(255,0,0); } 
     if(deformation<180 && deformation>100) 
     { car.shapeColor=color(230,230,0); } 
     if(deformation<100) 
     { car.shapeColor=color(0,255,0); }
     if (car.x - wall.x < wall.width/2 + car.width/2
      && wall.x - car.x < wall.width/2 + car.width/2) {
        car.velocityX = car.velocityX * (-1);
        wall.velocityX = wall.velocityX * (-1);
  }  
    if (car.y - wall.y < wall.width/2 + car.width/2
    && wall.y - car.y < wall.width/2 + car.width/2) {
      car.velocityY = car.velocityY* (-1);
      wall.velocityY = wall.velocityY * (-1);
    }
  drawSprites();
}