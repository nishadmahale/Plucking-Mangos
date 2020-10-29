
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	Boy=loadImage("boy.png");
	// mango1=loadImage("mango.png");
	// mango2=loadImage("mango.png");
	// mango3=loadImage("mango.png");
	// mango4=loadImage("mango.png");
	// mango5=loadImage("mango.png");
	// stone=loadImage("stone.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone=new Stone(235,420,30); 

	mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	// mango6=new mango(1000,230,30);
	// mango7=new mango(900,230,40);
	// mango8=new mango(1140,150,40);
	// mango9=new mango(1100,230,40);
	// mango10=new mango(1200,200,40);
	// mango11=new mango(1120,50,40);
	// mango12=new mango(900,160,40);

	treeObj=new Tree(1050,280,500);
	// boyBody = Bodies.circle(70,600,200);

	groundBody = Bodies.rectangle(650,580,1300,20, {isStatic: true});
	World.add(world,groundBody);

	// World.add(world,boyBody);
	launcher = new LaunchObject(stone.body, {x:235, y: 420});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);
	
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);

	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
	launcher.display();
	image(Boy ,200,340,200,300);
	
	rect(groundBody.position.x, groundBody.position.y, 1300,20);

	drawSprites();
 
}


function Keypressed(){
if(keyCode===32){
//Matter.body.setPosition(stone)
launcher.attach(stone.body);



}
}


function detectCollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}



























