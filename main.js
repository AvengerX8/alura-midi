//Função que chama o toque da tag audio.
function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    //Verifica se a tag chamada é uma tag audio, e que não seja nulo.
    if(elemento != null && elemento.localName ==='audio'){
            elemento.play();
    }else{
        console.log('Elemento não encontrado');
    }
}

//Constante que recebe a classe de todas as teclas.
const listaDeTeclas = document.querySelectorAll('.tecla');

/*Laço de repetição que percorre o comprimento da minha lista de teclas, e troca o id do som conforme a posição do indice
em relação ao botão*/
for (let i=0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i]; //Constante que recebe a posição da minha tecla.

    const instrumento = tecla.classList[1]; //Constante que recebe a identificação do meu indice das teclas.

    const idAudio = `#som_${instrumento}`; //Constante que recebe o parâmetro da tecla, equivalente ao seu som da tag audio.

    //Função que toca o som conforme o botão pressionado.
    listaDeTeclas[i].onclick = function () {
        tocaSom(idAudio);
    }

    //Função que verifica se a tecla pressionada é o Enter ou Espaço.
    tecla.onkeydown = function (evento) {
        if(evento.code ==='Space' || evento.code ==='Enter'){
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}