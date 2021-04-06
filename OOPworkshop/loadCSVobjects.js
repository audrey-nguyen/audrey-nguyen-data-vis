let table;


//data for objects
let randY;
let randX;
let date;
let company;
let frequency;
let imageArray = [];

//array for objects
let companyFrequencyArray = [];

//load table
function preload() {

  table = loadTable('personalData.csv', 'csv', 'header', imageLoader);

}

function imageLoader(){
  for (let i = 0; i < table.getRowCount(); i++){
      imageArray[i] = loadImage("images/" + table.getString(i, 'image'));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){
    randX = random(90, windowWidth-90);
    randY = random(90, windowHeight-90);
    date = table.getString(i, 'date');
    company = table.getString(i, 'company');
    frequency = table.getNum(i, 'frequency');

    //inject a new CompanyFrequency object in the companyFrequencyArray for each iteration of the loop
    companyFrequencyArray.push(new CompanyFrequency(randX, randY, date, company, frequency, imageArray[i]));

}


}

function draw(){
 background(0);
 fill(255);

 //run through each of the objects in the array and display them
  for (let i = 0; i < companyFrequencyArray.length; i++) {
    companyFrequencyArray[i].show();
    companyFrequencyArray[i].hover();
  }
}


//company frequency class
class CompanyFrequency {

  constructor(x, y, d, c, f, i) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
    this.f = f;
    this.i = i;
  }

  //the show function to show the objects
  show() {
    stroke(255);
    fill(255);
    strokeWeight(4);
    image(this.i,this.x, this.y, this.f, this.f);
  }

  //when mouse hovers over object, show data
  hover(){
    if(dist(mouseX, mouseY, this.x, this.y) < this.f/2){
      strokeWeight(1);
      text(this.d + "-" + this.c, this.x, this.y+40);
      fill(0);
      text(this.f, this.x, this.y+60);
      image(this.i,this.x, this.y+80, 10, 10);
    }
  }
}
