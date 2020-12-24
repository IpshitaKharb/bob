class Bob{
    constructor(x,y,r){
        var bob_options={
            restitution: 1.3,
            friction : 0.5,
            
        }
        
        this.bob=Bodies.circle(x,y,r/2,bob_options);
        World.add(world,this.bob);
        this.radius=r;
    }
    display(){
        
        var pos=this.bob.position;
        var angle=this.bob.angle;
        ellipseMode(CENTER);
        imageMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}