
function setup() {
  background(30);

  createCanvas(400,400);
  createSprite(200,200);
}

function draw() 
{
  if(keyIsDown(DOWN_ARROW))
{
  background("purple");
}

if(keyIsDown(UP_ARROW))
{
  background("pink");
}

if(keyIsDown(RIGHT_ARROW))
{
  background("red");
}

if(keyIsDown(LEFT_ARROW))
{
  background("blue");
}
  drawSprites()

}




