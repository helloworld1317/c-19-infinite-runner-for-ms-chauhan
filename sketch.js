function preload(){
floor=loadImage("floor.jpg");
Jerry=loadImage("jerry.jpg");
Tom=loadImage("tom.png");
Chair=loadImage("chair.jpg");
//Background=loadImage("Background.jpg");
}

function setup() {
 createCanvas(1600,600);
 var Floor=createSprite(800,100,400,400);
 Floor.addImage(floor);
 Floor.scale=3;
 Floor.velocityX=-3;
 if (Floor.x<0){
    Floor.x=Floor.width/2;
   }
 var tom=createSprite(50,400);
 tom.addImage(Tom);
 tom.scale=0.2;
 var jerry=createSprite(250,400);
 jerry.addImage(Jerry);
 jerry.scale=0.1;
}

function draw() {
    background('blue');
    
    spawnObstacles();
 drawSprites();
 
}

function spawnObstacles() {
    if(frameCount % 60 === 0) {
        var obstacle = createSprite(400,400,20,30);
        obstacle.setCollider('circle',0,0,45)
        obstacle.addImage(Chair);
        obstacle.velocityX=-3;
        obstacle.scale = 0.05;
        obstacle.lifetime = 300;
    }
  }