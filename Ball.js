class Ball {
    constructor(x, y, radius) {
        var opt =
        {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius/2, opt);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("blue");
        stroke("green")
        strokeWeight(5);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
};