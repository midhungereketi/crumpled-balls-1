class Dustbin {
    constructor(x,y,width,height){
        this.wall1=Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world,this.wall1)
        this.wall2=Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world,this.wall2)
        this.wall3=Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world,this.wall3)
        this.width=width
        this.height=height
        this.x=x
        this.y=y
    }display() {
       // var angle =this.body.angle
        push();
        translate(this.wall1.position.x,this.wall1.position.y);
       // rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
        push();
        translate(this.wall2.position.x,this.wall2.position.y);
     //   rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
        push();
        translate(this.wall3.position.x,this.wall3.position.y);
       // rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}