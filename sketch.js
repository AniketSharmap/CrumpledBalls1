
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(10,626,800,20); 
	paper1 = new Paper(480,568,30,115); 
	paper2 = new Paper(573,613,150,25); 
	paper3 = new Paper(665,568,30,115); 
	ball = new Ball(22,610,30); 
	Engine.run(engine);
}


function draw() {

  background(0);
  Engine.update(engine);
  ground.display();
  ball.display();
  paper1.display();
  paper2.display();
  paper3.display();
  keyPressed();
  drawSprites();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x: 85,y:85});
	}
}




