
function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}` // template string

    tecla.onclick = function () {  
        //criando uma função anônima, aqui como tá criando uma função
        // não executa de imediato, sem o function, ele tenta executar direto 
        // e o browser não deixa!
        tocaSom(idAudio);
    };
    contador = contador + 1;
}
 