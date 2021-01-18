class Plinko{
    constructor(x, y, radius){
        var options = {
            restitution: 1

        }
        this.body = Bodies.circle(x, y, radius, options)
        this.x = x
        this.y = y
        this.radius=radius;
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, 10);
    }

};