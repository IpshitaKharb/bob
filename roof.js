class Roof{
    constructor(x,y,w,h){
        var roof_options={
            isStatic:true
        }
        this.roof=Bodies.rectangle(x,y,w,h,roof_options);
        World.add(world,this.roof);
        this.width=w;
        this.height=h;
    }
    display(){
        var pos=this.roof.position;
        var angle=this.roof.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#00ffea");
        rect(0,0,this.width,this.height);
        pop();
    }
}