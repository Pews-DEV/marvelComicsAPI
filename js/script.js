pesquisaComic('', 50, 0);

var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function (e) {
    limpaTela();
    if (campo.value === '') {
        pesquisaComic('', 50, 0);
    } else {
        pesquisaComic(campo.value, 50, 0);
    }
    // impede o envio do form
    e.preventDefault();
});
