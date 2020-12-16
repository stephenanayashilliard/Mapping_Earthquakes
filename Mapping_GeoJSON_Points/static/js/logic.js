
// Add GeoJSON data. (FeatureCollection object)
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            // Note coordinates are in reverse order compaired to setview(). first parameters is longitude, 2nd is latitude. 
            // The L.geoJSON() layer reverses the coordinates to plot them on a map.
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Create the map object with center at the San Francisco airport. Zoom level of 10
let map = L.map('mapid').setView([37.5, -122.5], 10);

//Grabbing our GeoJSON data, for onEachFeature
L.geoJson(sanFranAirport, {
    onEachFeature: function(feature,layer) {
        console.log(layer);
        layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "<h2><hr><h3>Airport Name: " + feature.properties.name + "<h3>");
    }
}).addTo(map);



// Grabbing our GeoJSON data for pointToLayer
//L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    //pointToLayer: function(feature, latlng) {
    //  console.log(feature);
      // add a marker for each feature with a latitude and longitude in the pointToLayer.
      //return L.marker(latlng)
      // Adding city and airport popup marker
      //.bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h2>");
    //}

  //}).addTo(map);

// We create the tile layer that will be the background of our map.
// use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY

});

//Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

