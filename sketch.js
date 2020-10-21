var bullet
var wall ;
var speed
var weight ;
var thickness


function setup() {
  createCanvas(1600,400);  
  bullet = createSprite(50, 200, 40, 20);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "grey";
  speed=random(223,321); 
  weight=random(30,52); 
  thickness=random (22,83);
  bullet.debug = true
  wall.debug = true
}

function draw() {
  background(0,0,0); 
  wall.shapeColor=color(80)
  bullet.velocityX = 9
  if(hasCollided(bullet,wall)){
     var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness) ;
    
      if(damage>=10)
      {
        bullet.shapeColor=color(255,0,0);
      }
      if(damage<10)
      {
        bullet.shapeColor=color(0,255,0)
      } 
  }
  drawSprites();
}
function hasCollided(bullet1,wall1)
{
   bulletRightEdge=bullet1.x +bullet1.width/2;
   wallLeftEdge=wall1.x - wall1.width/2;
   if(bulletRightEdge>=wallLeftEdge)
   {bullet1.velocityX = 0;
     return true 
   }
   return false
}