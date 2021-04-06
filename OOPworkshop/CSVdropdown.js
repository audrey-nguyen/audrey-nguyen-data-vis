let table;
let selectMenu;
let company;
let date;

let dateArray = [];
let companyArray = [];
let locationArray = [];
let serviceArray = [];
let frequencyArray = [];
let imageArray = [];

let objectArray = [];
let randY = 30;
let canvas;

let companyFrequencyArray = [];

function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('personalData.csv', 'csv', 'header');


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  background(0);
  for (var i = 0; i < table.getRowCount(); i++){

    imageArray[i] = loadImage("images/" + table.getString(i, 'image'));

  }
  //count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  selectMenu = createSelect();

  //cycle through the table rows
  for (var i = 0; i < table.getRowCount(); i++){
  //  let randX;

    //grab each of the animals and numbers columns
    // date = table.getString(i, 'date');
    // print(date);
    //dateArray.push(table.getString(i, 'date'));

    company = table.getString(i, 'company');

    companyArray.push(table.getString(i, 'company'));

    locationArray.push(table.getString(i, 'location'));

    serviceArray.push(table.getString(i, 'service'))

    //frequency = table.getNum(i, 'frequency');
    frequencyArray.push(table.getNum(i, 'frequency'));

  //  imageArray.push(table.getString(i, 'image'))

    selectMenu.option(company);


    randX = 30;
    // randY = 30;
    //  companyFrequencyArray.push(new CompanyFrequency(randX, randY, date, company, frequency));

    //display the data
    // ellipse(randX, , frequency, frequency);
    // text(date, randX+ frequency/2, randY);
    randY = randY + 70;
  }

  selectMenu.changed(animalFunction);
}

function draw(){
  // background(0);
  // fill(255);
  //image(imageArray[0], 200, 300);
  // for (let i = 0; i < companyFrequencyArray.length; i++) {
  //   companyFrequencyArray[i].show();
  //   companyFrequencyArray[i].hover();
  // }
}

function animalFunction(){
  background(0);
   fill(255);
   textAlign(CENTER);
   imageMode(CENTER);
  for (var i = 0; i < table.getRowCount(); i++){
    if(selectMenu.value() == companyArray[i]){
      text(companyArray[i], windowWidth/2, 50);
      text(frequencyArray[i], windowWidth/2, 70);
      text(serviceArray[i], windowWidth/2, 90);
      text(locationArray[i], windowWidth/2, 110);
      for(let j = 0; j < frequencyArray[i]; j++){
        image(imageArray[i], random(windowWidth), random(windowHeight), 30, 30);
      }
    }
  }
}

//Locations class
class CompanyFrequency {

  //this data is being injected with the
  //locationsArray.push(new Locations(locationLong, locationLat, place, time));
  //code above to create a new and unique object for each location
  constructor(x, y, d, c, f) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
    this.f = f;
  }

  //the show function to show the objects
  show() {
    stroke(255);
    fill(255);
    strokeWeight(4);
    ellipse(this.x, this.y, 40);
  }

  hover(){
    if(dist(mouseX, mouseY, this.x, this.y) < 20){
      strokeWeight(1);
      //rect(this.x, this.y, 100, 50);
      text(this.d + " " + this.c, this.x+20, this.y);
      fill(0);
      text(this.f, this.x, this.y);
    }
  }
}
