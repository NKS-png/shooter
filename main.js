class Main{
    constructor(x,y,width,height){
        var option={
            'restitution':2,
            'friction':0.2,
            'density':1
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        width = this.width;
        height = this.height;

        World.add(world,this.body)
    }display(){

        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(10, 10, this.width, this.height);
        pop();
    }
}