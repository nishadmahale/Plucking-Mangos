class Mango {

  constructor(x,y,radius){
    var options={
      isStatic:true,
      restitution:0.4,
      friction:1.2,
      density: 1.0



    }
      this.image =  loadImage("mango.png");
      this.body=Bodies.circle(x,y,radius,options);
      this.r = radius;
      World.add(world,this.body);

      




  }

  display() {


    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
  //  ellipseMode(RADIUS);
    //fill("red");
    image(this.image,0,0,this.r,this.r);
    pop();
        

  }
      
      



  
}  























