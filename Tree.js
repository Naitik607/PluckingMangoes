class Tree {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.image = loadImage("sprites/tree.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
       
        image(this.image,this.body.position.x,this.body.position.y,300,500);
        pop();
    }
}