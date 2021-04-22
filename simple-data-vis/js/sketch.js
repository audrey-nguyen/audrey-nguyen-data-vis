let canvas;
let date;
let personalData = [];
let selectMenu;
let dateArray = [];
let teaArray = [];
let timeArray = [];
let typeArray = [];
let locationArray = [];
let activityArray = [];
let energyArray = [];
let weatherArray = [];
let imageArray = [];
let idk = 3

function preload(){
  personalData = loadTable('assets/personaldata.csv', 'csv', 'header');
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  background(255);
  selectMenu = createSelect();
  selectMenu.position(200, 100);
  textSize(40);
  textAlign(CENTER);


  for (var i = 0; i < personalData.getRowCount(); i++){
    date = personalData.getString(i, 'tea');
    selectMenu.option(date);

    dateArray.push(personalData.getString(i, 'date'));
    teaArray.push(personalData.getString(i, 'tea'));
    timeArray.push(personalData.getString(i, 'time'));
    typeArray.push(personalData.getString(i, 'type'));
    energyArray.push(personalData.getNum(i, 'energy usage'));

  }

  selectMenu.changed(dateInteraction);

}


function dateInteraction(){
  background(255);
  for (var i = 0; i < personalData.getRowCount(); i++){
    if(selectMenu.value() == teaArray[i]){
      text(teaArray[i], windowWidth/2, 250);
      text(timeArray[i], windowWidth/2, 300);
      text(typeArray[i], windowWidth/2, 350);
      text(energyArray[i], windowWidth/2, 400);
    }
  }
}
