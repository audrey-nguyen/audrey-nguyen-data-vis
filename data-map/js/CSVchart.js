

let timeArray = [];
let teaArray = [];
let weatherArray = [];

let energyArray = [];
let personalData = [];
let chartcanvas;


function preload(){
  personalData = loadTable('assets/personaldata.csv', 'csv', 'header');
}

function setup(){

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
  var ctx = document.getElementById('mixed-chart');
  var myChart = new Chart(ctx, {

    type: 'bar',
        data: {
          labels: ["1900", "1950", "1999", "2050"],
          datasets: [{
              label: "Europe",
              type: "line",
              borderColor: "#8e5ea2",
              data: [408,547,675,734],
              fill: false
            }, {
              label: "Africa",
              type: "line",
              borderColor: "#3e95cd",
              data: [133,221,783,2478],
              fill: false
            }, {
              label: "Europe",
              type: "bar",
              backgroundColor: "rgba(0,0,0,0.2)",
              data: [408,547,675,734],
            }, {
              label: "Africa",
              type: "bar",
              backgroundColor: "rgba(0,0,0,0.2)",
              backgroundColorHover: "#3e95cd",
              data: [133,221,783,2478]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Population growth (millions): Europe & Africa'
          },
          legend: { display: false }
        }
});


}
