
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5,rope6,rope7,rope8,rope9,rope10
var roofObject


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob(340,650,100)
bobObject2 = new Bob(440,650,100)
bobObject3 = new Bob(540,650,100)
bobObject4 = new Bob(640,650,100)
bobObject5 = new Bob(740,650,100)
roofObject = new Roof(450,100,1500,20)
roofObject.shapeColor= "grey"
rope1 = new Rope(roofObject.body,bobObject1.body,100,0)

rope2 = new Rope(roofObject.body,bobObject2.body,100,0)

rope3 = new Rope(roofObject.body,bobObject3.body,100,0)

rope4 = new Rope(roofObject.body,bobObject4.body,100,0)

rope5 = new Rope(roofObject.body,bobObject5.body,100,0)

rope6 = new Rope (bobObject1.body,roofObject.body,-100*2,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  roofObject.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  rope6.display()
  drawSprites();
 
}



