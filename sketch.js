const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var supplyPackage, packageImage;
var helicopter;
var ground;

function preload() {
    packageImage = loadImage("./package.png");
    helicopter = loadImage("./helicopter.png");
}

function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    options = {
        isStatic: true
    }

    supplyPackage = Bodies.rectangle(200, 100, 30, 30, options);
    ground = Bodies.rectangle(200, 400, 400, 50, {isStatic: true});

    World.add(world, supplyPackage);
    World.add(world, ground);
}

function draw() {
    background(0);

    imageMode(CENTER);
    image(packageImage, supplyPackage.position.x, supplyPackage.position.y, 30, 30);

    image(helicopter, 200, 100, 110, 55);

    if(keyDown("down")){
        Matter.Body.setStatic(supplyPackage, false);
    }

    push();
    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 50);
    pop();

    Engine.update(engine);
}