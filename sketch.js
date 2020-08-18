var car, wall;
var speed, weight

function setup() { 
  createCanvas(1600,400);
   car = createSprite(50, 200, 50, 50);
   car.shapeColor ="green";
   car.debug = true; 
   
      wall = createSprite(1500, 200, 300, height/2);
      wall.shapeColor = color(80,80,80);
      wall.debug = true; 

       speed = random(55,90);
       weight = random(400,1500);

       car.velocityX = speed;
     } 

  function draw() {
    background(0,0,0); 
    /*wall.x = World.mouseX; wall.y = World.mouseY;
   //console.log(wall.x-car.x);
    if(wall.x - car.x < car.width/2+wall.width/2 
      && car.x-wall.x<car.width/2+wall.width/2
      && wall.y - car.y<car.height/2+wall.height/2
      && car.y-wall.y<car.height/2+wall.height/2){
       wall.shapeColor ="red";
        car.shapeColor ="red" 
      }
       else{
          wall.shapeColor ="green"; car.shapeColor ="green" }*/

          if(wall.x - car.x < car.width+wall.width/2 ){
            car.velocityX = 0;
            var deformation = 0.5* weight* speed* speed/22509;
            if(deformation<180){
            car.shapeColor=color(255,0,0);
            }
            if(deformation<180 && deformation>100){
              car.shapeColor=color(230,230,0);
              }
              if(deformation>100){
                car.shapeColor=color(255,255,0);
                }
          }


          /*if(wall.x - car.x < car.width/2+wall.width/2 
            && car.x-wall.x<car.width/2+wall.width/2
          ){
        wall.velocityX = wall.velocityX*(-1);
        car.velocityX = car.velocityX*(-1);

          }

          if( wall.y - car.y<car.height/2+wall.height/2
          && car.y-wall.y<car.height/2+wall.height/2){
            wall.velocityY = wall.velocityY*(-1);
            car.velocityY = car.velocityY*(-1);
          }*/
 drawSprites(); 
        }