import L from '../../vendor/leaflet/leaflet-src';
const container = document.querySelector('.hero__slide-video');

const initMap = () => {
  if (container !== null) {
    const map = L.map('map', { scrollWheelZoom: false }).setView([55.774876, 37.632641], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: './img/svg/map-pin.svg',
      className: 'contacts__map-pin',
    });

    L.marker([55.774876, 37.632641], { icon: customIcon }).addTo(map);

  }
}
export { initMap };
