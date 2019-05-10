function Circle(x,y,r) {
    let options = {
        friction : 0,
        restitution : 0.5
    }

    this.r = r;
    this.d = this.r *2
    this.body = Bodies.circle(x,y,r, options);
    World.add(world, this.body);
    
    this.show = function() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push()
            translate(pos.x, pos.y);
            rotate(angle)
            rectMode(CENTER)
            ellipse(0, 0, this.d, this.d);
        pop()
    }
}