
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var ballBody	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ballBody = Bodies.circle(660 , 600 , 3 , { isStatic:true});
	World.add(world, ballBody);


	Engine.run(engine);
	//box1=new Box(630,630,20,100)
	//box2=new Box(765,630,20,100)
	box3=new Box(700,690,160,20)
	ground=new Ground(400,700,800,20)
	ball=new Ball(60,100,20)
}


function draw() {
  rectMode(CENTER);
  background("grey");
 // box1.display()
  //box2.display()
  ball.display()
  box3.display()

  ground.display()
 

 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,
			{x:70,y:-70})
    }
}


