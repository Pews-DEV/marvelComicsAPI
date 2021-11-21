const botaoAbrir = document.querySelector('.content');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');


function abrirModal(event) {
    let codigo = event.target.getAttribute('id');

    if (!isNaN(codigo)) {
        infoComic(codigo);
        containerModal.classList.add('ativo');
    }
}

function fecharModal() {
    containerModal.classList.remove('ativo');
    limpaModal();
}

botaoAbrir.addEventListener('click', abrirModal);

botaoFechar.addEventListener('click', fecharModal);