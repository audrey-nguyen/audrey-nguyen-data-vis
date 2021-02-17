let waterdrop;
let plantA = 122;
let plantB = 200;
let plantC = 200;
let isOverPlantA;
let isOverPlantB;
let isOverPlantC;

function preload(){
 waterdrop = loadImage("assets/drop.png");
 poppins = loadFont('assets/Poppins-Medium.ttf')
}

function setup() {
createCanvas(1400, 920);
noCursor();
noStroke();
imageMode(CENTER);
rectMode(CENTER);
textFont(poppins);
textSize(30);
textAlign(CENTER, CENTER);

}

function mousePressed(){
  if(isOverPlantA == true){
    plantA = plantA + 15;
    plantC = 122;
  }
  if(isOverPlantB == true){
    plantB = plantB + 15;
    plantA = 122;
  }
  if(isOverPlantC == true) {
    plantC = plantC + 15;
    plantB = 122;
  }
}

function draw() {
    background(248,216,121);

    fill(255, 51, 127);

    if (keyIsDown(32)) {
      plantA = 122;
      plantB = 122;
      plantC = 122;
    }

    if (keyIsDown(UP_ARROW)) {
      plantA = plantA + 5 ;
      plantB = plantB + 5 ;
      plantC = plantC + 5 ;
    }

    if (keyIsDown(DOWN_ARROW)) {
      plantA = plantA - 5 ;
      plantB = plantB - 5 ;
      plantC = plantC - 5 ;
    }
//is mouse over plantA?
    if (mouseX >= 300 && mouseX <= 500 && mouseY >= 400 && mouseY <= 500)
    {
      isOverPlantA = true;
    } else {
      isOverPlantA = false;
    }
//is mouse over plantA? END
//is mouse over plantB?
    if (mouseX >= 600 && mouseX <= 900 && mouseY >= 400 && mouseY <= 500)
    {
      isOverPlantB = true;
    } else {
      isOverPlantB = false;
    }
//is mouse over plantB? END
//is mouse over plantC?
    if (mouseX >= 1000 && mouseX <= 1300 && mouseY >= 400 && mouseY <= 500)
    {
      isOverPlantC = true;
    } else {
      isOverPlantC = false;
    }
//is mouse over plantC? END

//Change plantA color when hovered
// if(isOverPlantC == true){
// plantC = 0
// } else {
// plantC = 122
// }
//Change plantA color when hovered END

if(plantA <= 122){
  text('WATER ME!', 350, 320);
}
if(plantB <= 122){
  text('WATER ME!', 700, 320);
}
if(plantC <= 122){
  text('WATER ME!', 1050, 320);
}

if(plantA >= 210){
  fill(80, 184, 255);
  text('HAPPY!', 350, 320);
}
if(plantB >= 210){
  fill(80, 184, 255);
  text('HAPPY!', 700, 320);
}
if(plantC >= 210){
  fill(80, 184, 255);
  text('HAPPY!', 1050, 320);
}


//plant A
    fill(137, plantA, 102);
    push();
    translate(150, 180);
    rotate(radians(45));
    ellipse( 350,  0, 60, 120)
    pop();
    push();
    translate(60, 675);
    rotate(radians(-45));
    ellipse( 350,  0, 60, 120)
    pop();
//plant A END

//plant B
    fill(137, plantB, 102);
    push();
    translate(500, 180);
    rotate(radians(45));
    ellipse( 350,  0, 60, 120)
    pop();
    push();
    translate(410, 675);
    rotate(radians(-45));
    ellipse( 350,  0, 60, 120)
    pop();
//plant B END

//plant C
    fill(137, plantC, 102);
    push();
    translate(850, 180);
    rotate(radians(45));
    ellipse( 350,  0, 60, 120)
    pop();
    push();
    translate(760, 675);
    rotate(radians(-45));
    ellipse( 350,  0, 60, 120)
    pop();
//plant C END
if (mouseX >= 300 && mouseX <= 500 && mouseY >= 500 && mouseY <= 600)
{
  fill(232, 200, 103);
  text('Click Plants', width/2, 820);
}

if (mouseX >= 600 && mouseX <= 900 && mouseY >= 500 && mouseY <= 600)
{
  fill(232, 200, 103);
  text('Try Arrows', width/2, 820);
}
if (mouseX >= 1000 && mouseX <= 1300 && mouseY >= 500 && mouseY <= 600)
{
  fill(232, 200, 103);
  text('Press Space', width/2, 820);
}

//build the potters
for (let rectX = 350; rectX <= 1050; rectX += 350) {
      fill(255)
      rect(rectX, 560, 200, 180, 5);
      rect(rectX, 490, 250, 50, 5);
  }
//build the potters END

//mouse turns into waterdrop
    image(waterdrop, mouseX, mouseY);
    if(dist(mouseX, mouseY,)){
    }
//mouse turns into waterdrop END


}
