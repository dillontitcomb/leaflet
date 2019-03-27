const newDiv = document.getElementById('hello');
newDiv.innerHTML = 'SCRIPT WORKS';

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer(
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken:
      'pk.eyJ1IjoiZGlsbG9udDM0IiwiYSI6ImNqdHFrY3h4ODBnYjU0NG5zb2R3Y3dkbTEifQ.3lQum1l79lsJhjygxIoRrg'
  }
).addTo(mymap);

console.log(mymap);
