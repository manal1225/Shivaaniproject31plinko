const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
	createCanvas(480,800);

	engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height-5,490,20)

  for(var k=0;k<width;k=k+80){
    divisions.push(new Ground(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var p1=40; p1<width; p1=p1+50){
    plinkos.push(new Plinko(p1,75));
  }

  for (var p2=15; p2 <width-10; p2=p2+50){   //it's p2 = p2+50
    plinkos.push(new Plinko(p2,175));
  }
  
	Engine.run(engine);
}

function draw() {
    Engine.update(engine)
	  rectMode(CENTER);
    background(128,0,128);

    ground.display()

    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      
    }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-30, width/2+30), 10)); //new Particle not Particles
          }
  
   for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
   for (var k = 0; k < divisions.length; k++) {  //divisions is your array name
      
    divisions[k].display();  //here also divisions
    }
    
}