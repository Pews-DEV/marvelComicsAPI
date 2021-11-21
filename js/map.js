// configurando o mapa

// criando função a ser executada quando a localização atual for capturada com sucesso
function positionSucces(pos) {

    // criando o mapa
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 16);

    // definindo o tipo de layer do mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // criando um popup
    var popup = L.popup();

    // verificando um clique sobre o mapa
    function onMapClick(e) {
        // configurando o popup
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);

        // criando um marcador na posição de clique
        marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

        // capturando a comic selecionada
        let modalImage = document.querySelector('#modalImage');
        let imageSrc = modalImage.getAttribute('src');
        let image = `<img src='${imageSrc}' width='128px'></img>`;
        let modalTitle = document.querySelector('#modalTitle');
        let titleText = modalTitle.innerHTML;
        console.log(titleText);

        // adicionando o marcador criado ao mapa
        marker.bindPopup(image + 'Revista:' + titleText + '<br> Local: ' + e.latlng.toString()).openPopup();
    }
    map.on('click', onMapClick);

    // capturando os botões para abrir e fechar o mapa
    const botaoAbrirMap = document.querySelector('.btn-map');
    const botaoFecharMap = document.querySelector('[data-modal="fechar-map"]');
    const containerModalMap = document.querySelector('[data-modal="map"]');

    // função para abrir  mapa
    function abrirModalMap(event) {
        event.preventDefault();
        containerModalMap.classList.add('ativo');
        map.invalidateSize();
    }

    // função para fechar o mapa
    function fecharModalMap() {
        containerModalMap.classList.remove('ativo');
    }

    // capturando os eventos de clique nos botões
    botaoAbrirMap.addEventListener('click', abrirModalMap);
    botaoFecharMap.addEventListener('click', fecharModalMap);

}

// função para exibir o erro caso ocorra ao localizar o usuario
function positionError(pos) {
    console.log(pos);
}

// função responsavel por localizar o usuários
navigator.geolocation.getCurrentPosition(positionSucces, positionError);