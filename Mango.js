class Mango {
    constructor(x,y,width,height){
        var options={
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        this.image = loadImage("sprites/mango.png")
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
    // var angle = this.body.angle

        push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        pop();
    }
}