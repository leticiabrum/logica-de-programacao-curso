let textoNumerosSorteados = document.getElementById('resultado');
let desabilitedButton = document.getElementById('btn-reiniciar');


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

   textoNumerosSorteados.textContent = sorteados.length > 1 && sorteados.length > 1 ? `Números sorteados: ${sorteados}` : `Número 
   sorteado: ${sorteados}`;

   desabilitedButton.classList.remove('desabilitado');

}


function sortearNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function reiniciar() {
    let quantidade = document.getElementById('quantidade');
    quantidade.value = "";
    let numeroInicial = document.getElementById('de');
    numeroInicial.value = "";
    let numeroLimite = document.getElementById('ate');
    numeroLimite.value = "";

    textoNumerosSorteados.textContent = 'Números sorteados: nenhum até agora';
    desabilitedButton.classList.add('desabilitado');
}