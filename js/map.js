function positionSucces(pos) {

    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);

        marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

        let modalImage = document.querySelector('#modalImage');
        let imageSrc = modalImage.getAttribute('src');
        let image = `<img src='${imageSrc}' width='128px'></img>`;

        let modalTitle = document.querySelector('#modalTitle');
        let titleText = modalTitle.innerHTML;
        console.log(titleText);

        marker.bindPopup(image + 'Revista:' + titleText + '<br> Local: ' + e.latlng.toString()).openPopup();
    }
    map.on('click', onMapClick);
}

function positionError(pos) {
    console.log(pos);
}

navigator.geolocation.getCurrentPosition(positionSucces, positionError);


const botaoAbrirMap = document.querySelector('.btn-map');
const botaoFecharMap = document.querySelector('[data-modal="fechar-map"]');
const containerModalMap = document.querySelector('[data-modal="map"]');

function abrirModalMap(event) {
    event.preventDefault();
    containerModalMap.classList.add('ativo');
}

function fecharModalMap() {
    containerModalMap.classList.remove('ativo');
}

botaoAbrirMap.addEventListener('click', abrirModalMap);

botaoFecharMap.addEventListener('click', fecharModalMap);
