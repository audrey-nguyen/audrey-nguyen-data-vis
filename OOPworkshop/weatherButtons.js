
let canvas;
let button;

//description text
let textTime = '';
let textWeather = '';
let textTemp = '';
let textFeels = '';

//data variables
let time;
let weather;
let temp;
let feels;
let date;
let weatherTable;

//weather object array
let weatherData = [];

let bgColor = 0;


function preload() {
  weatherTable = loadTable('weatherData.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0,0);


  for (let i = 0; i < weatherTable.getRowCount(); i++){
    date = String(weatherTable.getString(i, 'date'));
    time = String(weatherTable.getString(i, 'time'));
    weather = String(weatherTable.getString(i, 'weather'));
    temp = String(weatherTable.getString(i, 'temp'));
    feels = String(weatherTable.getString(i, 'feels'));

    weatherData.push(new WeatherData(date, time, weather, temp, feels));
  }

  //show each button for each data entry
  for (let i = 0; i < weatherData.length; i++){
    weatherData[i].show();
  }

}



function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//weather data class
class WeatherData{
  constructor(date, time, weather, temp, feels){
    this.date = date;
    this.time = time;
    this.weather = weather;
    this.temp = temp;
    this.feels = feels;

      //create a button for each entry
    this.button = createButton(this.date)

    //position each button 50 pixels below the previous
    for(let i = -1; i < weatherData.length; i++){
      this.button.position(50, i*25+50);
    }
    this.button.style('z-index', '1');
  }


  show(){
    //when the button is pressed trigger the update function
    //to update the data entry
    this.button.mousePressed(() => this.update())
  }

  // upadte the output for each entry after the button is clicked
  update(){
    //update the variables to reflect the data tied to the button that was clicked

    bgColor = random(0,100);

    background(bgColor);
    fill(100, 199, 67);
    noStroke();
    textSize(21);
    textAlign(CENTER, CENTER);
    text('time: ' + this.time, windowWidth/2, 50 );
    text('weather: ' + this.weather, windowWidth/2, 100)
    text('temperature: ' + this.temp, windowWidth/2, 150);
    text('feels: ' + this.feels, windowWidth/2, 200);

  }
}
