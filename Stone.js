class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("sprites/stone.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}