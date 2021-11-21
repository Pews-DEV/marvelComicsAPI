// chamando a função de pesquisa
pesquisaComic('', 50, 0);

// capturando os elementos para manipulação
var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

// adicionando evento de click e chamando a função de pesquisa
form.addEventListener('submit', function (e) {
    limpaTela();
    if (campo.value === '') {
        pesquisaComic('', 50, 0);
    } else {
        pesquisaComic(campo.value, 50, 0);
    }
    e.preventDefault();
});
