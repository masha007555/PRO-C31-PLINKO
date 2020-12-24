const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
// const Render = Matter.Render;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(1120,2000);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);

  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 50; j<=width-10; j = j+200){
    plinkos.push(new Plinko(j,75))
  }
  for(var j = 75; j<=width; j = j+100){
    plinkos.push(new Plinko(j,175))
  }
  for(var j = 50; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j = 75; j<=width; j = j+200){
    plinkos.push(new Plinko(j,375))
  }
  for(var j = 50; j<=width-10; j = j+100){
    plinkos.push(new Plinko(j,475))
  }
  for(var j = 75; j<=width; j = j+50){
    plinkos.push(new Plinko(j,575))
  }

  for(var j = 50; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j,975))
  }
  for(var j = 75; j<=width; j = j+100){
    plinkos.push(new Plinko(j,1075))
  }
  for(var j = 50; j<=width-10; j = j+200){
    plinkos.push(new Plinko(j,1175))
  }
  for(var j = 75; j<=width; j = j+50){
    plinkos.push(new Plinko(j,1275))
  }
  for(var j = 50; j<=width-10; j = j+100){
    plinkos.push(new Plinko(j,1375))
  }
  for(var j = 75; j<=width; j = j+200){
    plinkos.push(new Plinko(j,1475))
  }
  for(var j = 50; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j,1575))
  }

  // var render = Render.create({
  //   element:document.body,
  //   engine: engine,
  //   options: {
  //     width: 1120,
  //     height: 2000,
  //     wireframes:true,
  //     showAngleIndicator: true
  //   },
   
  // });
  // Render.run(render);
}

function draw() {
  background("black");  
  Engine.update(engine)
  ground1.display();

  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  if(frameCount%50=== 0 ){
    particles.push(new Particle(random(width/2-400,width/2+400),10,10))
  }
  for(var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  drawSprites();
  textSize(200);
  strokeWeight(6);
  stroke("red");
  fill("white");
  text("PLINKO",200,850);
  textSize(50);
  strokeWeight(0);
  text("10",890,1740);
  text("10",810,1740);
  text("10",730,1740);
  text("10",650,1740);
  text("10",570,1740);
  text("10",490,1740);
  text("10",410,1740);
  text("10",330,1740);
  text("10",250,1740);
  text("10",170,1740);
  textSize(35);
  text("100",90,1730);
  text("150",10,1730);
  text("100",970,1730);
  text("150",1050,1730);
}