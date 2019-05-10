
function Ground(x,y,w,h,a) {
    let options = {
        friction : 1,
        restitution : 0,
        angle : a,
        isStatic : true,
    }
    this.body = Bodies.rectangle(x,y,w,h, options);
    World.add(world, this.body);
    
    this.show = function() {
        let pos = this.body.position;
        push()
            translate(pos.x, pos.y);
            rotate(options.angle)
            rectMode(CENTER)
            rect(0,0,w,h);
        pop()
    }
}
