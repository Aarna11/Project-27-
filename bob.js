class Bob{
    constructor(x,y,height){
        var options={
            'restitution':0.3,
            'density':0.1
        }
    
        this.body=Bodies.circle(x,y,(this.r-20)/2,height,options) ;
        this.width=(this.r-20)/2;
        this.height=height;
        World.add(world,this.body);
    }
}