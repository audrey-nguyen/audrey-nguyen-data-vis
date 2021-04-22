let map;
let canvas;
let countries;
let locationImage;
var cities

//array for objects
let countryArray = [];
let greenTeaArray = [];
let blackTeaArray = [];
let herbalTeaArray = [];

let  greenTeaCities;
let  blackTeaCities;
let  herbalTeaCities;

const mappa = new Mappa('Leaflet');




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
  var myMap = L.map('map').setView([0, 0], 2);
  L.tileLayer('https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=6e5dj7C0TZ5PY4pS6DXo', {
  }).addTo(myMap);


  var pointIcon = L.icon({
      iconUrl: "assets/point-01.png",
      iconSize:     [10, 10], // size of the icon
      iconAnchor:   [4.5, 0], // point of the icon which will correspond to marker's location
  });

  var homeIcon = L.icon({
      iconUrl: "assets/home-02.png",
      iconSize:     [40, 40], // size of the icon
      iconAnchor:   [15, 25], // point of the icon which will correspond to marker's location
      popupAnchor:  [3, -50]
  });

  var popup = L.popup({
      maxWidth:1200,
      maxheight:750,
      keepInView:true
  })
  .setContent('<iframe id="mixed-chart" width="900" height="650" src="chart.html"></iframe>');

//Home Marker
var homeMarker = L.marker([41.91113281,-87.68097687], {icon: homeIcon})
.bindPopup(popup)
.addTo(myMap);

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

    L.marker([lat,long], {icon: pointIcon})
    .addTo(myMap);

    //check to see if the tea type is included then add to arrays
    if (tea.includes("green")) {
      greenTeaArray.push(L.marker([lat,long])
      .bindPopup('<h1>'+ country + '</h1><img src= "assets/images/'+ locationImage +'"/><p>Trade Value: ' + tradeValue +'</p>'));
    }

    if (tea.includes("black")) {
      blackTeaArray.push(L.marker([lat,long])
      .bindPopup('<h1>'+ country + '</h1><img src= "assets/images/'+ locationImage +'"/><p>Trade Value: ' + tradeValue +'</p>'));
    }

    if (tea.includes("herbal")) {
      herbalTeaArray.push(L.marker([lat,long])
      .bindPopup('<h1>'+ country + '</h1><img src= "assets/images/'+ locationImage +'"/><p>Trade Value: ' + tradeValue +'</p>'));
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
      ], pathOptions).addTo(myMap);


      //mouse over and out stuff
        //curvedPath.bindPopup('<h1>'+ country + '</h1><img src= "assets/images/'+ locationImage +'"/><p>Trade Value: ' + tradeValue +'</p>');

        curvedPath.on('mouseover', function(e) {
        //show the location when hovering over the line
        // L.marker([lat,long]).addTo(myMap).bindPopup('<h1>'+ country + '</h1><img src= "assets/images/'+ locationImage +'"/><p>Trade Value: ' + tradeValue +'</p>')
        // .openPopup();
        let coEmission = document.getElementById('coEmmisson');
        var elements = document.getElementsByClassName('orange');

        coEmission.innerText = ('CO2 Emissions by Sea Travel: ' + commissionValue);


          // if (coEmission.style.display === "none") {
          //   coEmission.style.display = "block";
          // }else{
          //   coEmission.style.display = "none";
          // }


        var layer = e.target;
        //change line style
        layer.setStyle({
          color: 'blue',
          weight: 3,
          dashArray: 'none',
        });

      });

      curvedPath.on('mouseout', function(e) {



        var layer = e.target;
        //change line style
        layer.setStyle({
          color: 'rgba(255,0,0,0.1)',
          weight: 3,
          dashArray: '5,10',
          lineJoin: 'round'
        });
      });
    }
    //end curved poly lines


    //these have to be added manually and match the length of the tea arrays
    greenTeaCities = L.layerGroup([greenTeaArray[0], greenTeaArray[1], greenTeaArray[2], greenTeaArray[3], greenTeaArray[4]]);
    blackTeaCities = L.layerGroup([blackTeaArray[0], blackTeaArray[1], blackTeaArray[2]]);
    herbalTeaCities = L.layerGroup([herbalTeaArray[0], herbalTeaArray[1], herbalTeaArray[2]]);


    var teaOverlay = {
      "Green Tea": greenTeaCities,
      "Black Tea": blackTeaCities,
      "Herbal Tea": herbalTeaCities
    };


    L.control.layers(null, teaOverlay).addTo(myMap);

    homeMarker.on('click', function(e){
      console.log("home clicked");
      myMap.flyTo([41.91113281,-87.68097687], 7);
        // myMap.setView(e.latlng, 10);
    });

  }



  function draw() {
  }

  function drawLocationPoints() {

  }
