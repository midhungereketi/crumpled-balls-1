
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var brick1,brick2,brick3;
var ground
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
brick1 = new Dustbin(800,310,15,100);
brick2 = new Dustbin(1000,310,15,100);
brick3 =new Dustbin (900,350,200,15);
ground =new Ground(600,370,1200,30);
ball = new Ball(200,350,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  brick1.display();
  brick2.display();
  brick3.display();
 ball.display();
  drawSprites();
 
}
function keyPressed (){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75})
  }
}


