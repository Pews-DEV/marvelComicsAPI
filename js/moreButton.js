// criando e configurando os eventos do botão "MORE"

// capturando o botão
var moreBtn = document.getElementById('form-btn');
var campo = document.getElementById('campo');
let pulo = 0;

// capturando o evento submit e fazendo a pesquisa
moreBtn.addEventListener('submit', function (e) {
    pulo += 50;
    console.log(pulo);
    if (campo.value === '') {
        pesquisaComic('', 50, pulo);
    } else {
        pesquisaComic(campo.value, 50, pulo);
    }
    e.preventDefault();
});