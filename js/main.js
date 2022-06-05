function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play(); // está chamando o som da tecla pom
}
const listaDeTeclas = document.querySelectorAll('.tecla'); // está pegando todas as teclas


    for(let contador = 0; contador < listaDeTeclas.length; contador++){  // declarando ele como 0, e o contador vai ser menor que o tamanho da lista de teclas, e vai incrementando.   
    const tecla = listaDeTeclas[contador];   // está criando um laço de repetição para que o contador seja menor que o tamanho da lista de teclas
    const instrumento = tecla.classList[1]; 
    const idAudio = `#som_${instrumento}`;
   
    tecla.onclick = function(){   
        tocaSom(idAudio);
    }; 
}
