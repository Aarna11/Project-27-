
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1 , bob2 , bob3,bob4,bob5;
var roof;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,200,70);
	bob2=new Bob(220,200,70);
	bob3=new Bob(240,200,70);
	bob4=new Bob(260,200,70);
	bob5=new Bob(280,200,70);
	roof=new Roof(200,700,100,30);
	chain1=new Chain(bob1.body,roof.body,-bob1.diameter*2,0);
	chain2=new Chain(bob2.body,roof.body,-bob2.diameter*2,0);
	chain3=new Chain(bob3.body,roof.body,-bob3.diameter*2,0);
	chain4=new Chain(bob4.body,roof.body,-bob4.diameter*2,0);
	chain5=new Chain(bob5.body,roof.body,-bob5.diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  if(keyCode==="UP_ARROW"){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:170,y:180});
  }
  drawSprites();
 
}



