
function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//LOOP COM WHILE!!
/* 
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

*/
 
// LOOP COM FOR!!
// for (expression that is executed one time; condition for executing the code block; expression that is executed every loop)
for (let contador = 0; contador < listaDeTeclas.length; contador++) { // contador = contador + 1 = contador ++
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}` // template string

    tecla.onclick = function () {  
        tocaSom(idAudio);
    };
}