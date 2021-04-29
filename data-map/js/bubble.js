
let bubbles = [];
var bubbleCanvas;

function setup(){

  var bubbleCanvas = createCanvas(500, 500);

      bubbleCanvas.parent("bubbles");



  for (let i = 0; i < 10; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10, 40);
    bubbles[i] = new Bubble(x, y, r);
  }
}




function draw() {
  // clear();
  background(0);
  for (let i = 0; i < 2; i++){
    bubbles [i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r =r;
  }

  move(){
    this.x = this.x + random(-5, 5);
    this.y + this.y + random(-5, 5);
  }

  show(){
    stroke(255);
    strokeWeight(4);
     fill('green')
    ellipse(this.x, this.y, this.r * 2);
  }

}
