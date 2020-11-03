function touch(a,b){
    if(a.x-b.x<=a.width/2+b.width/2 && 
      b.x-a.x<=a.width/2+b.width/2 &&
      a.y-b.y<=a.height/2+b.height/2 &&
      b.y-a.y<=a.height/2+b.height/2 ){
       // b.shapeColor="red";
       // a.shapeColor="red";
       return true;
      }
      else{
       // a.shapeColor="green";
       // b.shapeColor="green";
       return false;
      }
  
  }
  
  
  function bounceOff(a,b){
    if(a.x-b.x<=a.width/2+b.width/2 && 
      b.x-a.x<=a.width/2+b.width/2){
        b.velocityX=b.velocityX*(-1);
  a.velocityX*=(-1);
      }
    if ( a.y-b.y<=a.height/2+b.height/2 &&
      b.y-a.y<=a.height/2+b.height/2 ){
        b.velocityY*=(-1);
  a.velocityY*=(-1);
      }
  }