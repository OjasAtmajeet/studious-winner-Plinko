const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score = 0;
var gameState = 0;
var plinkos = [];
var division = [];
function setup() {
    createCanvas(1000, 700);
    engine = Engine.create();
    world = engine.world;
    //create bodies here
    p1 = new particle(100, 90);
    p2 = new particle(150, 105);
    p3 = new particle(200, 100);
    p4 = new particle(250, 95);
    p5 = new particle(300, 85);
    p6 = new particle(350, 87);
    p7 = new particle(400, 97);
    p8 = new particle(450, 92);
    p9 = new particle(500, 90);
    p0 = new particle(550, 100);
    pA = new particle(600, 106);
    pB = new particle(650, 102);
    pC = new particle(700, 96);
    pD = new particle(750, 97);
    pE = new particle(800, 82);
    
    ground = new dVision(500, 700, 1000, 100);
    d1 = new dVision(75, 100, 10, 100);
    d2 = new dVision(125, 100, 10, 100);
    d3 = new dVision(175, 100, 10, 100);
    d4 = new dVision(225, 100, 10, 100);
    d5 = new dVision(275, 100, 10, 100);
    d6 = new dVision(325, 100, 10, 100);
    d7 = new dVision(375, 100, 10, 100);
    d8 = new dVision(425, 100, 10, 100);
    d9 = new dVision(475, 100, 10, 100);
    d0 = new dVision(525, 100, 10, 100);
    dA = new dVision(575, 100, 10, 100);
    dB = new dVision(625, 100, 10, 100);
    dC = new dVision(675, 100, 10, 100);
    dD = new dVision(725, 100, 10, 100);
    dE = new dVision(775, 100, 10, 100);
    dF = new dVision(825, 100, 10, 100);
    wall1 = new dVision(0, 350, 80, 800);
    wall2 = new dVision(1000, 350, 300, 800);
    for (var j = 55; j < 1000; j = j + 100) {
        plinkos.push(new Plinko(j, 250));

    }
    for (var j = 10; j < 1100; j = j + 100) {
        plinkos.push(new Plinko(j, 300));
    }
    for (var j = 55; j < 1000; j = j + 100) {
        plinkos.push(new Plinko(j, 350));

    }
    for (var j = 10; j < 1100; j = j + 100) {
        plinkos.push(new Plinko(j, 400));
    }
    for (var k = 250; k < 1000; k = k + 200) {
        division.push(new dVision(k, 600, 10, 300));
    }
    Engine.run(engine);
}

function draw() {
    background("chartreuse");
    drawSprites();
    p1.score();
    p2.score();
    p3.score();
    p4.score();
    p5.score();
    p6.score();
    p7.score();
    p8.score();
    p9.score();
    p0.score();
    pA.score();
    pB.score();
    pC.score();
    pD.score();
    pE.score();
    p1.display();
    p2.display();
    p3.display();
    p4.display();
    p5.display();
    p6.display();
    p7.display();
    p8.display();
    p9.display();
    p0.display();
    pA.display();
    pB.display();
    pC.display();
    pD.display();
    pE.display();
    ground.display();
    d1.display();
    d2.display();
    d3.display();
    d4.display();
    d5.display();
    d6.display();
    d7.display();
    d8.display();
    d9.display();
    d0.display();
    dA.display();
    dB.display();
    dC.display();
    dD.display();
    dE.display();
    dF.display();
    wall1.display();
    wall2.display();
    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }
    for (var k = 0; k < division.length; k++) {
        division[k].display();
    }
    textSize(10);
    text("1", 150, 500);
    text("2", 350, 500);
    text("3", 550, 500);
    text("4", 750, 500);
    text("Score: " + score, 100, 50);
    
    if (gameState === 1) {
        textSize(100)
        text("GAMEOVER", 200, 400);
    }
    
}