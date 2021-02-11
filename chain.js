class Chain1{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA ,
            bodyB:bodyB,
            'stiffness':1.0,
            'length':10
            pointB:{x:this.offsetX, y:this.offsetY}

        }
        this.chain=constraint.create(options);
        World.add(world,this.chain);
    }
 display(){
var pointA=this.chain.bodyA.position;
var pointB=this.chain.bodyB.position;
pointA.x=pointA.x
pointA.x=pointA.x
pointB.x=pointB.x + this.offsetX
pointB.y=pointB.y + this.offsetY
strokeWeight(4)
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}

    