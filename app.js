

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroLimite = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = sortearNumeroAleatorio(numeroInicial, numeroLimite);
        
        while (sorteados.includes(numero)) {
          numero = sortearNumeroAleatorio(numeroInicial, numeroLimite);   
        }
        sorteados.push(numero);
    }
    
    console.log(numero);
    textPluralSingular(sorteados);

}

function textoPluralSingular(sorteados) {
    let textoNumerosSorteados = document.getElementById('resultado');
    let textoPlural = `Numeros sorteados: ${sorteados}`;
    let textoSingular = `Numero sorteado: ${sorteados}`;
    if (sorteados.length > 1) {
        textoNumerosSorteados.textContent = textoPlural;
    } else {
        textoNumerosSorteados.textContent = textoSingular;
    }
}

function changeButtonStatus() {
    let button = document.getElementById('btn-reiniciar');
    if (button.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function sortearNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    let quantidade = document.getElementById('quantidade');
    quantidade.value = '';
    let numeroInicial = document.getElementById('de');
    numeroInicial.value = '';
    let numeroLimite = document.getElementById('ate');
    numeroLimite.value = '';

    textoNumerosSorteados.textContent = 'Números sorteados: nenhum até agora';

    changeButtonStatus();
}