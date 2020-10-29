class LaunchObject{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options)
        console.log(this.chain);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;
        //null means nothing 
        //null means false
    }

    display(){

      
        if(this.chain.bodyA != null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}