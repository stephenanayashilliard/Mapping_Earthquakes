


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be usedin the polyline
//let line = [
//  [33.9416, -118.4085],
// [37.6213, -122.3790],
//  [40.7899, -111.9791],
//  [47.4502, -122.3088]
//];

// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
//  color: 'red'
//}).addTo(map);

//Skill Drill: create an airline round from SFO to JFK with two stops AUS and YYZ.  Make route blue dashed line with a weight of 4, opacity of 0.5.

// Coordinates for each point to be usedin the polyline
let line = [
  [37.6213, -122.3790],
  [30.1974711, -97.6663529],
  [43.6777176, -79.6248197],
  [40.6413111, -73.7781391]
];

// Create a polyline using the line coordinates and make a blue dashedline with weight of 4, opacity of 0.5..
L.polyline(line, {
  color: 'blue',
  width: 4,
  opacity: 0.5,
  dashArray: '20,15',
  lineJoin: 'round'

}).addTo(map);


// We create the tile layer that will be the background of our map.
// use the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
