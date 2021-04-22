let map;
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
  var map = L.map('map').setView([0, 0], 2);
 	L.tileLayer('https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=6e5dj7C0TZ5PY4pS6DXo', {
  }).addTo(map);


  for(let i = 0; i < countries.getRowCount(); i++ ){
    // locationImageArray.push(new LocationImage(imageArray[i]));
    //create long, lat, country and tradeValue variables
    let long = Number(countries.getString(i, 'long'));
    let lat = Number(countries.getString(i, 'lat'));
    let tea = String(countries.getString(i, 'tea'));
    let country = String(countries.getString(i, 'country'));
    let tradeValue = String(countries.getString(i, 'trade value'));
    let locationImage = String(countries.getString(i, 'image'));
    let commissionValue = Number(countries.getString(i, 'commission'));


    // update marker for each country
        // var marker =
        // L.marker([lat,long])
        // .bindPopup('<h1>'+ country + '</h1><img src= "assets/images/'+ locationImage +'"/><p>Trade Value: ' + tradeValue +'</p>')
        // .addTo(map)


        let greenTeavalue = "green";
        if (tea.includes(greenTeavalue)) {
        	console.log("The word green is in the string.");
          var greenTea = L.layerGroup();
          L.marker([lat,long])
          .bindPopup('<h1>'+ country + '</h1><img src= "assets/images/'+ locationImage +'"/><p>Trade Value: ' + tradeValue +'</p>')
          .addTo(greenTea);
        } else {
        	console.log("The word green is not in the string.");

        }

        var overlays = {
            "Green Tea": greenTea,
        };

        L.control.layers(overlays).addTo(map);

countryArray.push(new CountryArray(country));

for (let i = 0; i < countryArray.length; i++){
  countryArray[i].show();
}

//add curved poly lines
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

  //trying to change path thickness
    var pathOptions = {
    	color: 'rgba(255,0,0,0.1)',
    	weight: 5,
      dashArray: '5,10',
      lineJoin: 'round'

    }

  var curvedPath = L.curve(
  	[
  		'M', latlng1,
  		'Q', midpointLatLng,
  			 latlng2
  	], pathOptions).addTo(map);

//mouse over and out stuff
    curvedPath.on('mouseover', function(e) {
      //show the location when hovering over the line
      // L.marker([lat,long]).addTo(map).bindPopup('<h1>'+ country + '</h1><img src= "assets/images/'+ locationImage +'"/><p>Trade Value: ' + tradeValue +'</p>')
      // .openPopup();

      var layer = e.target;

      //change line style
      layer.setStyle({
          color: 'blue',
          weight: 5,
          dashArray: 'none',
        });
    });

    curvedPath.on('mouseout', function(e) {
      var layer = e.target;
      //change line style
      layer.setStyle({
          color: 'rgba(255,0,0,0.1)',
          weight: 5,
          dashArray: '5,10',
          lineJoin: 'round'
        });
    });
}
//end curved poly lines
 }



function draw() {
 }

class CountryArray{
   constructor(country){
     this.country = country;
       //create a button for each entry
     this.button = createButton(this.country)

     //position each button 50 pixels below the previous
     for(let i = -1; i < countryArray.length; i++){
       this.button.position(50, i*35+150);
     }
     this.button.style('z-index', '1');
     }

   show(){
     //when the button is pressed trigger the update function
     //to update the data entry
     this.button.mousePressed(() => this.update())
     }

   update(){
   }
 }
