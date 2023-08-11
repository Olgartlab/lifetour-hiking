/* Карта */
const map = L.map('map').setView([59.968137, 30.316272], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const customIcon = L.icon({
  iconUrl: 'img/images/map-pin.svg',

  iconSize: [38, 50],
  iconAnchor: [18, 50],
});

const marker = L.marker([59.968137, 30.316272], {icon: customIcon}).addTo(map);
