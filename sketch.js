var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var car,log,player;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();




  for (var i = 0;i<6;i++)
  {
    var bg1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)
    {
      var road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
      road.shapeColor="black";
    }
    bg1.shapeColor="green";
    
  }
  

  for (var i = 0;i<400;i++)
  {
    car = new Car(2);
  }

  for (var i = 0;i<400;i++)
  {
    log = new Log(2);
  }
  player = new Player(width/2,height-25);



 }

function draw() 
{
  background("skyblue");
 

 for(i=1;i<carGroup1.length;i++)
  { 
    if(carGroup1[i].x>width)
     {
        carGroup1[i].x=0; 
    
      } 
      if(carGroup1[i].x<0) 
      { 
        carGroup1[i].x=width;
       } 
      } 

//Making the cars re-apper 
for(i=1;i<carGroup1.length;i++) 
{ 
  if(carGroup1[i].x>width)
   {
      carGroup1[i].x=0;
   }
 if(carGroup1[i].x<0)
   {
    carGroup1[i].x=width;
   }
}
          //making the logs reapper 
 for(i=1;i<logGroup1.length;i++)
{
   if(logGroup1[i].x<0) 
    { 
      logGroup1[i].x=width;
     } 
}


  translate(0,-player.spt.y+height-150);


  drawSprites();
}

function keyPressed()
{
  if (keyCode == UP_ARROW)
  {
    player.move(0,-2);
  }

  if (keyCode == DOWN_ARROW)
  {
    player.move(0,2);
  }

  if (keyCode == LEFT_ARROW)
  {
    player.move(-2,0);
  }

  if (keyCode == RIGHT_ARROW)
  {
    player.move(2,0);
  }
}

