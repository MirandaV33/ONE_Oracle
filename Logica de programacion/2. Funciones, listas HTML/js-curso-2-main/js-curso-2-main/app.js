let titulo = document.querySelector('h1'); 
titulo.innerHTML = 'Hora del desafio';

function clic(){
    alert("El boton fue clickeado");
}

function Brasil(){
    let ciudadBrasil = prompt(`Me indicas una ciudad de Brasil por favor`);
    alert(`Estuve en ${ciudadBrasil} y me acordé de tí`);
}

function amoJs(){
    alert('Yo amo JS');
}

function numeros() {
    let suma = 0;
    for (let i = 0; i < 2; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        suma += numero;
    }

    alert(`La suma de los números es ${suma}`);
}
