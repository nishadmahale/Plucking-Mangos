class Tree{
    constructor(x,y,radius){
        var options={


            isStactic:true
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        //this.h = height;
        this.image = loadImage("tree.png");







    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }











}