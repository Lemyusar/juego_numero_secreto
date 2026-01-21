let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarElemento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario'))

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el número en ${intentos}')
        document.getElementById('reiniciar').removeAttribute
    } else {
        
    }
}