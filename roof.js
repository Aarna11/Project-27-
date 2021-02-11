class Roof{
    constructor(x,y,width,height){
        var options={
            'isStatic':true
        }
    
    roof=Bodies.rectangle(x,y,width,height)
    World.add(roof,world)
    this.width=width;
    this.height=height;
    }

}