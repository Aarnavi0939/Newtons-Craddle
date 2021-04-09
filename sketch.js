const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(380,50,650,20);

  ball1 = new Ball(130,500);
  ball2 = new Ball(255,500);
  ball3 = new Ball(380,500);
  ball4 = new Ball(505,500);
  ball5 = new Ball(630,500);

  chain1 = new Chain(ball1.body,{x:130,y:50});
  chain2 = new Chain(ball2.body,{x:255,y:50});
  chain3 = new Chain(ball3.body,{x:380,y:50});
  chain4 = new Chain(ball4.body,{x:505,y:50});
  chain5 = new Chain(ball5.body,{x:630,y:50});
}

function draw() {
  background("grey"); 
  Engine.update(engine);
  ground.display();  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}