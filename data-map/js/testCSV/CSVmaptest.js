let myMap;
let canvas;
let countries;
let locationImage;
//array for objects
let countryArray = [];

function preload() {
  // Load the data
  countries = loadTable('assets/Locations.csv', 'csv', 'header');
}

function imageLoader(){
  for (let i = 0; i < countries.getRowCount(); i++){
      imageArray[i] = loadImage("assets/images/" + countries.getString(i, 'image'));
  }
}


function setup() {
  var cities = L.layerGroup();

  	L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
  	L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities);



  var citiestwo = L.layerGroup();

    	L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(citiestwo),
    	L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(citiestwo);

  	var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  		mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

  	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
  		streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

  	var map = L.map('map', {
  		center: [39.73, -104.99],
  		zoom: 10,
  		layers: [grayscale, cities]
  	});

  	var baseLayers = {
  		"Grayscale": grayscale,
  		"Streets": streets
  	};

  	var overlays = {
  		"Cities": cities,
      "Cities Two": citiestwo
  	};

  	L.control.layers(null, overlays).addTo(map);
 }



function draw() {
 }
