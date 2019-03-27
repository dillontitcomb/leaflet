let infoDiv = document.getElementById('mapinfo');
const mymap = L.map('mapid').setView([39.627, -90.1994], 6);

L.tileLayer(
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken:
      'pk.eyJ1IjoiZGlsbG9udDM0IiwiYSI6ImNqdHFrY3h4ODBnYjU0NG5zb2R3Y3dkbTEifQ.3lQum1l79lsJhjygxIoRrg'
  }
).addTo(mymap);

const minneapolis = L.marker([44.9, -93.2]).addTo(mymap);
const mplsFlow = 1245;
const mplsHTML = `<p>Site: <strong>Minneapolis</strong></p><p>Current flow: <strong>${mplsFlow} ft3/s</strong></p>`;
minneapolis.bindPopup(mplsHTML);

const stLouis = L.marker([38.6, -90.2]).addTo(mymap);
const stLouisFlow = 3250;
const stLouisHTML = `<p>Site: <strong>St. Louis</strong></p><p>Current flow: <strong>${stLouisFlow} ft3/s</strong></p>`;
stLouis.bindPopup(stLouisHTML);

function onMplsClick(e) {
  infoDiv.innerHTML = mplsHTML;
  console.log(e);
}

function onStLouisClick(e) {
  infoDiv.innerHTML = stLouisHTML;
  console.log(e);
}

minneapolis.on('click', onMplsClick);
stLouis.on('click', onStLouisClick);
console.log(mymap);
