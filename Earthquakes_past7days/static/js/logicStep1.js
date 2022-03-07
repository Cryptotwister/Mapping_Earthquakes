// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/Cryptotwister/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/Cryptotwister/Mapping_Earthquakes/main/torontoRoutes.json";

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/Cryptotwister/Mapping_Earthquakes/main/majorAirports.json";

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1
}

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});



// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//         console.log(feature);
//         layer.bindPopup("<h3>" + "Neighbourhood: " +feature.properties.AREA_NAME + "</h3>");
//       }
    
//     }).addTo(map);
// });

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h3>" + "Airport Code: " +feature.properties.faa + "</h3> <hr> <h3>" + "Airport Name: " +feature.properties.name + "</h3>");
//     }
  
//   }).addTo(map);
// });

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h3>" + "Airport Code: " +feature.properties.faa + "</h3> <hr> <h3>" + "Airport Name: " +feature.properties.name + "</h3>");
//   }

// }).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city+ ", " + feature.properties.country+ "</h3>");
//   }

// }).addTo(map);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [28.64179, -81.3041]
//   ];

// Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//     color: "red",
//     dashArray: '5, 5', 
//     dashOffset: '15',
//     weight: 4,
//     opacity: 0.5 
//  }).addTo(map);

// // Circle Marker using circleMarker
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor:  "#FFFFA1"
//  }).addTo(map);

// // Circle Marker using circle 
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor:  "#F6FF33 "
//  }).addTo(map);

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// // Get data from cities.js
// let cityData = cities;


// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color:"orange",
//         fillColor:"#FFC300"


//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });


// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

