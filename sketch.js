
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Boy,boyImage
var ground;
var stone;
var tree;

var mango1;
var mango2;
var mango3;
var mango4;
var mango5;

var launcher;


function preload()
{
	boyImage = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Boy = createSprite(220,625,20,20)
	Boy.addImage(boyImage)
	Boy.scale = 0.08;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20)

	stone = new Stone(300,500,30,30);

	tree = new Tree(500,200,100,100);

	mango1 = new Mango(700,300,50,50)
	mango2 = new Mango(650,250,50,50)
	mango3 = new Mango(600,300,50,50)
	mango4 = new Mango(550,350,50,50)
	mango5 = new Mango(650,350,50,50)

	launcher = new Launcher(stone.body,{x:240,y:625})
	


	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);

  


  ground.display();

  stone.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher.display();

  /*  detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);

	
  
  detectollision();*/
  keyPressed();
  drawSprites();
 
}

/*function detectollision(Lmango,Lstone){
	
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=Lmango.r+Lstone.r)
	{
		Matter.Body.setStatic(Lmango.body,false)
	}
	
}*/

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:240,y:625});
		launcher.attach(stone.body)
    }
}


