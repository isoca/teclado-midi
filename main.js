
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert
        console.log('Elemento não foi encontrado ou o seletor não é válido')
    }
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

    // toca o som no click
    tecla.onclick = function () {  
        tocaSom(idAudio);
    };

    // deixa vermelho quando aperta enter ou space
    tecla.onkeydown = function (evento) { 
        console.log(evento)
        if (evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    // tira o vermelho quando para de apertar qualquer botão
    tecla.onkeyup = function () { 
        tecla.classList.remove('ativa');
    }
}
