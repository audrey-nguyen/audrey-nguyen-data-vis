let cupArray = [];
let energyArray = [];



function preload() {
  personalData = loadTable('assets/teatype.csv', 'csv', 'header');
}

function setup() {


  for (var i = 0; i < personalData.getRowCount(); i++) {
    energyArray.push(personalData.getNum(i, 'energy usage'));
    cupArray.push(personalData.getNum(i, '# of cups'));

  }

  loadGraph();
  loadRadarChart();
}



function loadGraph() {
  var gradientGreen = canvas.getContext('2d').createLinearGradient(0, 0, 0, 700);
  gradientGreen.addColorStop(0, 'rgba(236, 250, 48, 0.9)');
  gradientGreen.addColorStop(1, 'rgba(103, 207, 38, 0.5)');

  var gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 700);
  gradientBlue.addColorStop(0, 'rgba(112, 213, 252, 0.9)');
  gradientBlue.addColorStop(1, 'rgba(66, 118, 230, 0.5)');

  var gradientPurple = canvas.getContext('2d').createLinearGradient(0, 0, 0, 700);
  gradientPurple.addColorStop(0, 'rgba(234, 184, 255, 0.9)');
  gradientPurple.addColorStop(1, 'rgba(189, 84, 235, 0.5)');

  var gradientRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 700);
  gradientRed.addColorStop(0, 'rgba(227, 33, 124, 0.9)');
  gradientRed.addColorStop(1, 'rgba(255, 179, 217, 0.5)');


  var ctx = document.getElementById('mixed-chart');
  var myChart = new Chart(ctx, {

    type: 'bar',
    data: {
      labels: ["Green", "Black", "Oolong", "Herbal"],
      datasets: [{
        label: "Energy Usage (kWh)",
        type: "line",
        borderColor: "rgb(255,215,115)",
        pointBackgroundColor: "rgb(255,215,115)",
        pointBorderColor: "rgb(255,215,115)",
        data: energyArray,
        fill: false
      }, {
        label: "# of cups",
        type: "bar",
        backgroundColor: [gradientGreen, gradientBlue, gradientPurple, gradientRed],
        data: cupArray,
      }]
    },
    options: {
      ticks: {
        display: false

      },
      title: {
        display: false,
        text: 'Tea Consumption & Energy Usage'
      },
      legend: {
        display: false
      }
    }
  });


}

function loadRadarChart() {
  var gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 700);
  gradientBlue.addColorStop(0, 'rgba(112, 213, 252, 0.9)');
  gradientBlue.addColorStop(1, 'rgba(66, 118, 230, 0.5)');

  var gradientRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 700);
  gradientRed.addColorStop(0, 'rgba(227, 33, 124, 0.9)');
  gradientRed.addColorStop(1, 'rgba(255, 179, 217, 0.5)');

  var gradientPurple = canvas.getContext('2d').createLinearGradient(0, 0, 0, 700);
  gradientPurple.addColorStop(0, 'rgba(234, 184, 255, 0.9)');
  gradientPurple.addColorStop(1, 'rgba(189, 84, 235, 0.5)');

  var gradientGreen = canvas.getContext('2d').createLinearGradient(0, 0, 0, 700);
  gradientGreen.addColorStop(0, 'rgba(236, 250, 48, 0.9)');
  gradientGreen.addColorStop(1, 'rgba(103, 207, 38, 0.5)');




  var ctx = document.getElementById('radar-chart');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["Sleep", "Work", "Digital Media", "Class", "Meal Time", "Exercise"],
      datasets: [{
        label: "Green Tea",
        fill: true,
        backgroundColor: gradientGreen,
        borderColor: "transparent",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        data: [.25, .25, .25, .5, 5, .5]
      }, {
        label: "Black Tea",
        fill: true,
        backgroundColor: gradientBlue,
        borderColor: "transparent",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        data: [.25, 3.5, 2.5, 2.5, 2.5, .25]
      }, {
        label: "Oolong Tea",
        fill: true,
        backgroundColor: gradientPurple,
        borderColor: "transparent",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        data: [.25, .25, .25, .25, 1.5, 1.5]
      }, {
        label: "Herbal Tea",
        fill: true,
        backgroundColor: gradientRed,
        borderColor: "transparent",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        data: [3.5, .5, 2.5, .25, .25, 1.5]
      }, ]
    },
    options: {
      align: {},
      layout: {
        padding: {
          top: 50
        }
      },
      legend: {
        position: 'right',
        display: true,
        title: {
          padding: 30,

        },
        labels: {
          padding: 40,
          fontSize: 14,
        }

      },
      tooltips: {
        enabled: false
      },
      gridLines: {
        display: false
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false,
        }
      },
      title: {
        display: false,
      }
    }
  });


}
