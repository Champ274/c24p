
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box2,box3;
var paper;
function preload()
{
	
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)

	//Create the Bodies Here.
	box = new Dustbin(468,600,20,50);
	box2 = new Dustbin(560,600,200,20);
	box3 = new Dustbin(640,600,20,50);
    paper = new Paper(30,600,25)
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor=color(255)
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box.display();
  box2.display();
  box3.display();
 paper.display();
  drawSprites();
 
}

function keyPressed() {

	 if (keyCode === DOWN_ARROW) { Matter.Body.applyForce(paper.body,paper.body.position,{x:79,y:-85})

	 } 
	}
