function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play(); // está chamando o som da tecla pom
}
const listaDeTeclas = document.querySelectorAll('.tecla'); // está pegando todas as teclas

listaDeTeclas[0].onclick = tocaSomPom; // está  chamando a função tocaSomPom quando a tecla 0 for clicada 