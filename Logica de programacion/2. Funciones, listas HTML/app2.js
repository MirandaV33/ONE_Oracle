let intentos = 0; 
let NumeroSecreto = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

function asignarTextoElemento(Elemento, texto) {
    let titulo = document.querySelector(Elemento); 
    titulo.innerHTML = texto; 
}

function generarNumeroSecreto() {
    let numerogenerado = Math.floor(Math.random() * numeroMaximo) + 1; 
    console.log("Número generado:", numerogenerado);
    console.log("Lista antes:", listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
    } else {
        if (listaNumerosSorteados.includes(numerogenerado)) {
            return generarNumeroSecreto(); 
        } else {
            listaNumerosSorteados.push(numerogenerado);
            console.log("Lista actual:", listaNumerosSorteados);
            return numerogenerado;
        }
    }    
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    intentos++;

    if (numeroUsuario === NumeroSecreto) { 
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > NumeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        limpiarcaja(); 
    }
}

function limpiarcaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto'); 
    asignarTextoElemento('p', `Ingrese un número del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto(); // 👈 solo acá se genera
    intentos = 0; 
}

function reiniciarJuego() {
    limpiarcaja();
    condicionesIniciales(); 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
} 

condicionesIniciales();
