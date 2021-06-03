const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box(600,260,50,50);
  main= new Main(100,200,10,10);
  ground = new Ground(400,300,1600,30)
  launched = new Launcher(main.body,{x:200, y:100});
}

function draw() {
  background("cyan");  
  Engine.update(engine);
  drawSprites();
  box.display()
  main.display()
  ground.display()
}
function mouseDragged(){
  Matter.Body.setPosition(main.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launched.fly();
}