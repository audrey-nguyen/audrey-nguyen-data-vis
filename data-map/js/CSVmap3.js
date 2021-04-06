let myMap;
let canvas;
let countries;


function preload() {
  // Load the data
  countries = loadTable('assets/Locations.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var map = L.map('mapid').setView([0, 0], 2);

 	L.tileLayer('https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=6e5dj7C0TZ5PY4pS6DXo', {
 }).addTo(map);

  // L.marker([41.911132813, -87.680976868]).addTo(map)
  //    .bindPopup('Home')
  //    .openPopup();

     //parse through the table
  //    for(let i = 0; i < countries.getRowCount(); i++ ){
  //      //create long, lat, country and tradeValue variables
  //      let long = Number(countries.getString(i, 'long'));
  //      let lat = Number(countries.getString(i, 'lat'));
  //      let country = String(countries.getString(i, 'country'));
  //      let tradeValue = String(countries.getString(i, 'trade value'));
  //
  //      //update marker for each country
  //       L.marker([lat,long]).addTo(map)
  //           .bindPopup('<p>'+ country + '</p><p><b>' + tradeValue +'</b></p>')
  //           .openPopup();
  //
  //       //connect the lines, always using Chicago as the first long, lat coordinate
  //       var latlngs = [
  //           [41.911132813, -87.680976868],
  //           [lat,long],
  //       ];
  //       var polyline = L.polyline(latlngs, {color: 'white'}).addTo(map);
  // }


  for(let i = 0; i < countries.getRowCount(); i++ ){
    //create long, lat, country and tradeValue variables
    let long = Number(countries.getString(i, 'long'));
    let lat = Number(countries.getString(i, 'lat'));
    let tea = Number(countries.getString(i, 'commission'));
    let country = String(countries.getString(i, 'country'));
    let tradeValue = String(countries.getString(i, 'trade value'));



    //update marker for each country
    L.marker([lat,long]).addTo(map)
        .bindPopup('<p><b>'+ country + '</b></p>Trade Value: ' + tradeValue +'</p>')
        .openPopup();



  var latlngs = [];

  var latlng1 = [41.911132813, -87.680976868],
  	latlng2 = [lat,long];

  var offsetX = latlng2[1] - latlng1[1],
  	offsetY = latlng2[0] - latlng1[0];

  var r = Math.sqrt( Math.pow(offsetX, 2) + Math.pow(offsetY, 2) ),
  	theta = Math.atan2(offsetY, offsetX);

  var thetaOffset = (3.14/10);

  var r2 = (r/2)/(Math.cos(thetaOffset)),
  	theta2 = theta + thetaOffset;

  var midpointX = (r2 * Math.cos(theta2)) + latlng1[1],
  	midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

  var midpointLatLng = [midpointY, midpointX];

  latlngs.push(latlng1, midpointLatLng, latlng2);

  var pathOptions = {
  	color: 'rgba(255,0,0,0.5)',
  	weight: 'tea',
  }
  var curvedPath = L.curve(
  	[
  		'M', latlng1,
  		'Q', midpointLatLng,
  			 latlng2
  	], pathOptions).addTo(map);


}


 }

function draw() {

}
