function getComics(dados) {
    console.log(dados["data"]["results"]);

    if (dados["data"]["results"].length < 1) {
        pesquisaComic('');
        alert('Nenhuma COMIC encontrada, digite o nome corretamente!')
    }

    const divComics = document.querySelector('.comics');

    dados.data.results.forEach((element) => {
        const srcImg = element.thumbnail.path + '.' + element.thumbnail.extension;
        const comicName = element.title;
        const comicCod = element.id;

        creatDivComics(srcImg, comicName, divComics, comicCod);
    });
}

function creatDivComics(srcImg, comicName, divToAppend, comicCod) {
    const divPai = document.createElement('div');
    const textTittle = document.createElement('h1');
    const img = document.createElement('img');
    const codComic = document.createElement('p');

    codComic.textContent = comicCod;
    textTittle.textContent = comicName;
    img.src = srcImg;
    img.id = codComic.textContent;
    codComic.id = codComic.textContent;
    textTittle.id = codComic.textContent;
    codComic.classList.add('codComic');

    divPai.appendChild(img);
    divPai.appendChild(textTittle);
    divPai.appendChild(codComic);
    divToAppend.appendChild(divPai);

    divPai.classList.add('formatting');
    divPai.id = 'comics';

}

function getInfoComics(dados) {
    console.log(dados["data"]["results"]);

    const divComics = document.querySelector('.info-comics');

    dados.data.results.forEach((element) => {
        const srcImg = element.thumbnail.path + '.' + element.thumbnail.extension;
        const comicName = element.title;
        let comicDesc = element.description;
        const comicCod = element.id;
        let creatorsComic = element.creators.items;
        let nameCreator = '';

        for (let i = 0; i < creatorsComic.length; i++) {
            nameCreator += creatorsComic[i].role + ': ' + creatorsComic[i].name + ';  ';
        }

        console.log(nameCreator);

        if (!!!comicDesc) {
            comicDesc = 'Sem Resumo...';
        }

        console.log(comicDesc)
        creatDivInfoComics(srcImg, comicName, comicCod, comicDesc, nameCreator, divComics);

    });
}

function creatDivInfoComics(srcImg, comicName, comicCod, comicDesc, creators, divToAppend) {
    const divImg = document.createElement('div');
    const divInfo = document.createElement('div');
    const textTittle = document.createElement('h1');
    const img = document.createElement('img');
    const codComic = document.createElement('h2');
    const descComic = document.createElement('p');
    const creatorsComic = document.createElement('h3');

    textTittle.textContent = comicName;
    img.src = srcImg;
    img.id = 'modalImage';
    textTittle.id = 'modalTitle';
    codComic.textContent = comicCod;
    codComic.classList.add('codComic');
    descComic.textContent = comicDesc;
    creatorsComic.textContent = creators;

    divImg.appendChild(img);
    divInfo.appendChild(textTittle);
    divInfo.appendChild(codComic);
    divInfo.appendChild(creatorsComic);
    divInfo.appendChild(descComic);
    divToAppend.appendChild(divImg);
    divToAppend.appendChild(divInfo);
}