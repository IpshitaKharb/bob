
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  roof1 = new Roof(500,100,500,30);
  bob1 = new Bob(600,480,100);
  bob2 = new Bob(500,480,100);
  bob3 = new Bob(300,480,100);
  bob4 = new Bob(400,480,100);
  bob5 = new Bob(700,480,100);
  chain1 = new Chain(bob1.bob,{x : 600 , y : 100 });
  chain2 = new Chain(bob2.bob, {x : 500 , y : 100 });
  chain3 = new Chain(bob3.bob, {x : 300 , y : 100 });
  chain4 = new Chain(bob4.bob, {x : 400 , y : 100 });
  chain5 = new Chain(bob5.bob, {x : 700 , y : 100 });
}


function draw() {
  rectMode(CENTER);
  background(400);
  
  drawSprites();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

 roof1.display();
 bob1.display();
 bob2.display(); 
 bob3.display();
 bob4.display();
 bob5.display();

 keyPressed();

}

function keyPressed(){
  if (keyWentDown("SPACE")){
Matter.Body.applyForce(bob3.bob,bob3.bob.position,{x:-0.2,y:-0.2})
  }
}