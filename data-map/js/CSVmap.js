// Options for map
let options = {
  lat: 41.911132813,
  lng: -87.680976868,
  zoom: 50,
  style: 'https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=6e5dj7C0TZ5PY4pS6DXo'
}

// Create an instance of Leaflet
let mappa = new Mappa('Leaflet');
let myMap;
let canvas;
let countries;
function preload() {
  // Load the data
  countries = loadTable('assets/Locations.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);


  // Only redraw when the map change and not every frame.
  myMap.onChange( drawCountries);
  fill(70, 203,31, 50 );
  noStroke();
  // Creating a marker
}
function draw() {}
// The draw loop is fully functional but we are not using it for now.


function drawCountries() {
  // Clear the canvas
  clear();


  for (let i = 0; i < countries.getRowCount(); i++) {
    // Get the lat/lng
  const latitude = Number(countries.getString(i, 'lat'));
   const longitude = Number(countries.getString(i, 'long'));

    // Only draw them if the position is inside the current map bounds. We use a
    // Leaflet method to check if the lat and lng are contain inside the current
    // map. This way we draw just what we are going to see and not everything. See
    // getBounds() in http://leafletjs.com/reference-1.1.0.html
    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      // Transform lat/lng to pixel position
      const pos = myMap.latLngToPixel(latitude, longitude);
      ellipse(pos.x, pos.y, 100, 100);
      // Get the size of the meteorite and map it. 60000000 is the mass of the largest
      // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
      let size = countries.getString(i, 'trade value');
      //size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
      //ellipse(pos.x, pos.y, size, size);



    }
  }
}
