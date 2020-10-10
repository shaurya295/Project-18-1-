var monkey, monkey_running;
var banana, stone, backdrop, Img;
var score = 0;
var bananaGroup, obstacleGroup;
var ground;

function preload() {
  monkey_running.loadAnimation("Monkey_01.png", "Monkey_02.png",
    "Monkey_03.png", "Monkey_04.png", "Monkey_05.png",
    "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bananaImg.loadImage("banana.png");
  stoneImg.loadImage("stone.png");
  backdropImg.loadImage("jungle.jpg");
}

function setup() {
  createCanvas(400, 400);

  monkey = createSprite(200, 200, 40, 40);
  monkey.addAnimation(monkey);

  banana = createSprite();
  banana.addImage(bananaImg);

  stone = createSprite();
  stone.addImage(stoneImg);

  backdrop = createSprite();
  backdrop.addImage(backdropImg);

  ground = createSprite();
  ground.velocityX = -9;
  ground.x = ground.width / 2;
  ground.visible = false;
}

function draw() {
  background(220);

  {
    stroke("white");
    textSize(20);
    fill("white");
    text("Score: " + score, 500, 50);
  }

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (bananaGroup.isTouching(monkey)) {
    score = score + 2;
    bananaGroup.destroyEach();
  }

  if (obstacleGroup.isTouching(monkey)) {
    monkey.scale = 0.2;
  }

  switch (score) {
    case 10:
      monkey.scale = 0.12;
      break;
    case 20:
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 40:
      monkey.scale = 0.18;
    default:
      break;
  }

  drawSprites();
}