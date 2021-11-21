var moreBtn = document.getElementById('form-btn');
var campo = document.getElementById('campo');
let pulo = 0;

moreBtn.addEventListener('submit', function (e) {
    pulo += 50;
    console.log(pulo);
    if (campo.value === '') {
        pesquisaComic('', 50, pulo);
    } else {
        pesquisaComic(campo.value, 50, pulo);
    }
    // impede o envio do form
    e.preventDefault();
});