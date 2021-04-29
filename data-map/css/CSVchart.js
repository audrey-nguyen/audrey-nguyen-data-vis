

let timeArray = [];
let teaArray = [];
let weatherArray = [];

let energyArray = [];
let personalData = [];
let canvas;

function preload(){
  personalData = loadTable('assets/personaldata.csv', 'csv', 'header');
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("myChart");


  for (var i = 0; i < personalData.getRowCount(); i++){
    teaArray.push(personalData.getString(i, 'tea'));
    energyArray.push(personalData.getNum(i, 'energy usage'));
  }

  for (var i = 0; i < personalData.getRowCount(); i++){
    timeArray.push(personalData.getNum(i, 'time'));

  }
  loadGraph();
}

function loadGraph(){


  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: teaArray,
          datasets: [{
              label: 'Energy Use (kWh)',
              data: energyArray,
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',

              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',

              ],
              borderWidth: 5
          }]
      },
      options: {
      scales: {
      yAxes: [{
      ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}
