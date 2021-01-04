class Particle {
    constructor(x,y){
    this.radius=10;                   
    var option ={
    isStatic:false,  
    restitution:0.4
    }
    this.body = Bodies.circle(x,y,10,option)  //i have kept radius 10(fixed for all particles)
    this.color=color(random(0,255),random(0,255),random(0,255),random(0,255));
    World.add(world,this.body)
    } 
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    angleMode(RADIANS)
    ellipseMode(RADIUS)
    fill("red")
    stroke("red")
    ellipse(0,0,20,20)  //so obviously ellipse diameter1 and diamter2 will be double of circle's radius
    pop();
    }
    }   