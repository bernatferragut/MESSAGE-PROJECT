
// canvas vars
let w = window.innerWidth, h = window.innerHeight;
// module aliases
let Engine = Matter.Engine, World  = Matter.World, Bodies = Matter.Bodies;
// matter vars
let engine, world;
let circles = [], ground1, ground2;
 
function setup() {
    // modes
    rectMode(CENTER)
    // canvas
    createCanvas(w, h);
    // engine
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    // class ground instantiation
    ground1 = new Ground(200,200, w-100, 100, PI/8);
    ground2 = new Ground(200,800, w+600, 100, -PI/8);
    // World.add(world, [ground1, ground2]);
}

function draw() {
    background('black');
    Engine.update(engine);
    fill('tomato');
    noStroke();
    // boxes
    for(let i=0; i < circles.length; i++) {
        circles[i].show();
    }
    // ground
    fill('green');
    ground1.show();
    ground2.show();
}

function mouseDragged(){
     // class Box instantiation
    circles.push(new Circle(mouseX, mouseY, random(1, 15)));
}