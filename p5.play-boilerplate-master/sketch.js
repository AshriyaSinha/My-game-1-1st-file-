var cha1, playbutton 
var gameState = 0

function setup() {
  createCanvas(displayWidth,displayHeight - 175);
  ca1 = createSprite(displayWidth/7.5, displayHeight/3.5, 50, 50);
  ca1.addImage (cha1);
  ca1.scale = 0.7 

  playbutton = createSprite(width/2,height/2,25,25)
  playbutton.addImage (plu);
  playbutton.scale = 0.5

  ob1 = createSprite (displayWidth/2, displayHeight/2,200,10)
  ob1.shapeColor = "pink"
  ob1.visible = false;

  //  sound .play ()
}

function preload() {
  cha1 = loadImage ("Images/Starfier.png")
  cha2 = loadImage ("Images/Robin.png")
  cha3 = loadImage ("Images/Cyborg.png")
  cha4 = loadImage ("Images/Beast boy.png")
  cha5 = loadImage ("Images/Raven.png")
  plu = loadImage ("Images/Play.png")
  bg = loadImage ("Images/Tower 2.png")
  bg2 = loadImage ("Images/JS BG.png")
  db1 = loadImage ("Images/dialouge box.png")
  db2 = loadImage ("Images/db2.png")
  l1 = loadImage  ("Images/maze 12.png")
  //sound = loadSound ("sound.mp3")
}

function draw() {
  background(bg); 
  drawSprites();

  if (gameState == 0){
    fill ("black")
    textSize (20)
    image (db2, displayWidth/1.6, displayHeight/20, 500,500)

    text ("Hi! I am Starfier my sister Blackfir has escaped \nthe tamoranian prison and has come back \nto destroy the earth to take revenge from me. \nYou must collect the 5 power diamonds \nin order to defete her and save the planet.", displayWidth/1.6, displayHeight/5)
      if (mousePressedOver(playbutton)) {
          gameState = 1;
    
  }
}

if (gameState == 1){
  //background ("white");
  image (bg2, displayWidth, displayHeight, 600,600)
  image (l1, displayWidth/3, displayHeight/20, 600,600)

  ob1.visible = true; 
} 
}