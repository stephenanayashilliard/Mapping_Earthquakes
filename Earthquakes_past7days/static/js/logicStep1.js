

// We create the street view tile layer that will be the default background of our map.
// use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
// Use the Mapbox Styles API
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
// control.layers from leaflet
// baseMaps is the base layer object which will allow the two different map styles to be show on the index.html file.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

// Accessing the airport GeoJSON URL
//let torontoHoods = "https://raw.githubusercontent.com/stephenanayashilliard/Mapping_Earthquakes/main/Repository/torontoNeighborhoods.json";

// Create a style for the lines.
//let styleLine = {
//    color: "#0000FF",
//    weight: 1,
//    fillColor: "#ffffa1"
//  }

  // Grabbing our GeoJSON data.
//d3.json(torontoHoods).then(function(data) {
//    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
//    L.geoJson(data, {
//      style: styleLine,
//      onEachFeature: function(feature, layer) {
//        console.log(layer);
//        layer.bindPopup("<h3>Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
//      }
//    }).addTo(map);
// });
  