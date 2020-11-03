var movingRect,fixedRect;

 function setup() {
  createCanvas(800,400);

 fixedRect=createSprite(400, 200, 50, 80);
 fixedRect.shapeColor="green";
 fixedRect.velocityX=2;

 movingRect=createSprite(600, 200, 80, 30);
 movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;

if(touch(movingRect,fixedRect)){
  text ("touched",200,200);

}


bounceOff(movingRect,fixedRect);
  drawSprites();
}

