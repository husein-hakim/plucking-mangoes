
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1075, 200, 25);
	mango3 = new mango(1000, 150, 20);
	mango4 = new mango(900, 225, 30);
	mango5 = new mango(975, 100, 27);
	mango6 = new mango(1200, 225, 25)
	mango7 = new mango(1150, 175, 30);
	mango8 = new mango(1000, 250, 28)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	rock = new stone(200, 350, 5)

	elastic = new constraint(rock.body, {x:240, y:420})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  mango6.display();

  mango7.display();

  mango8.display()

  groundObject.display();
elastic.display()
  rock.display()
   detectollision(rock,mango1);
  detectollision(rock,mango2);
  detectollision(rock,mango3);
  detectollision(rock,mango4);
  detectollision(rock,mango5);
  detectollision(rock,mango6);
  detectollision(rock,mango7);
  detectollision(rock,mango8);
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	elastic.detach();
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(rock.body, {x:235, y:420}) 
	  elastic.attach(rock.body);
	}
  }
 function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {

  	  Matter.Body.setStatic(lmango.body,false);
    }

  }