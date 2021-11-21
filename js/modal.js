// configurando o botão para abrir o modal

// capturando o botão do modal (clique sobre a imagem)
const botaoAbrir = document.querySelector('.content');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

// função para abrir modal
function abrirModal(event) {
    let codigo = event.target.getAttribute('id');

    // verificando se é um codigo
    if (!isNaN(codigo)) {
        infoComic(codigo);
        containerModal.classList.add('ativo');
    }
}

// função para fechar modal
function fecharModal() {
    containerModal.classList.remove('ativo');
    // limpando o modal
    limpaModal();
}

// capturando os eventos
botaoAbrir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);