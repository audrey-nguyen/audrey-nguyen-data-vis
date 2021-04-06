let myMap;
let canvas;
let countries;

function preload() {
  // Load the data
  countries = loadTable('assets/Locations.csv', 'csv', 'header');
}

function setup() {

  var map = L.map('mapid').setView([0, 0], 2);

 	L.tileLayer('https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=6e5dj7C0TZ5PY4pS6DXo', {
 }).addTo(map);

  L.marker([41.911132813, -87.680976868]).addTo(map)
     .bindPopup('Home')
     .openPopup();

  L.marker([7.5554942,80.7137847,810580980]).addTo(map)
      .bindPopup('Sri Lanka')
      .openPopup();


  var latlngs = [
      [41.911132813, -87.680976868],
      [7.5554942,80.7137847,810580980],
  ];
  var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

 }

function draw() {

}
