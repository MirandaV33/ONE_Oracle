// Document object MODEL: elementos que estan disponible para modificar y acceder 
// ¿Como se estructura una pagina web?
// css: estio visual
// html: estructura jerarquica
// Java Script: funcional (backend)

// Cada elemento del html puede accederse con Java Script, por medio de selectores. 

//let parrafo = document.querySelector('p'); 
//parrafo.innerHTML('Escoge un número'); 

// Todas las acciones del usuario se llaman "eventos" a los que el programa puede guardar informacion y reaccionar.
// Todos los eventos arrancan con el prefijo on 

// Declaracion de funciones 

let intentos=0; 
let NumeroSecreto= 0; 
let listaNumerosSorteados= [];
let numeroMaximo=10; 

function asignarTextoElemento(Elemento, texto){//Definimos parámetros variables, para poder usar la funcion de manera generica y no definimos nada fijo
    let titulo = document.querySelector(Elemento); //Retorna el elemento h1 y lo devuelve, de esta forma lo guardamos en una variable
    // Es una caja, un elemento NO un texto. OBJETO. Una de las cosasq podemos hacer es agregarle texto
    titulo.innerHTML=texto; 
}


function generarNumeroSeecreto() {
    let numerogenerado = Math.floor(Math.random()*numeroMaximo)+1;//Retorna algun elemento 
    //Si el numero generado esta en la lista, evitamos q se repita sino lo agregamos.
    console.log(numerogenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamostodos los numero
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.')
    } else{ 
        if(listaNumerosSorteados.includes(numerogenerado)){//Recorre el arreglo y verifica si ya esta
            return generarNumeroSeecreto(); // Si encuentra un numero en la lista, entra en la recursividad, es decir, se llama a si misma para generar otro elemento.  
        } else{
            listaNumerosSorteados.push(numerogenerado);
            console.log("Lista actual:", listaNumerosSorteados);
            return numerogenerado;
        }
    }    
}

function verificarIntento(){
    //let numeroUsuario = document.querySelector('input'); //INput es una etiqueta que representa la caja de tetxo
    // Si tenemos mas de un input, vamos a atribuirle diferentes identificadores dentro de inputpara tener más de uno. ejemplo:formularios. 
    let numeroUsuario= parseInt(document.getElementById('valorUsuario').value); //Funcion predeterminada para filtrar directamente por ID 
    /* 
    console.log(typeof(numeroUsuario)); //El input es string
    console.log(typeof(NumeroSecreto));
    console.log(NumeroSecreto);
    console.log(numeroUsuario);
    */
    console.log(intentos);
    if (numeroUsuario===NumeroSecreto){ //Comparamos si son iguales, y me retorna un booleano. Tripe igual: verifica q sea igual el numero y además el TIPO. 
        asignarTextoElemento('p', `Acertaste el número en ${intentos}${(intentos===1)? 'vez' : 'veces'}`);
        // Removemos el disabled del boton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó 
        if (numeroUsuario> NumeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++; 
        limpiarcaja(); 
    }
        return;
}

function limpiarcaja() {
    /*
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    */ 
    //Manera simplificada:
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto'); //LLamamos a la funcion! Podemos hacerlo de js o de html, pero en html SOLO se puede en eventos. 
    asignarTextoElemento('p', `Ingrese un numero del 1 al ${numeroMaximo}`);
    NumeroSecreto=generarNumeroSeecreto();
    intentos=0; 
}
function reiniciarJuego() {
    //Limpiar la caja
    limpiarcaja();
    //Reiniciar sistema: indicar mensaje de inicio, generar el numero aleatorio otra vez y desabilitar el boton de nuevo juego, inicializar el numero de intentos
    condicionesIniciales(); 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
} 

condicionesIniciales(); 

// Lista o vectos: en java se les conoce como arreglo 
// let numeroSecreto = [ ]; incializamos la lista para guardar los valores. 
// ver la lista console.log(numeroSecreto); 
// Agregar elementos a la lista,podemos agregarlos al inicio o al final 
// numeroSecreto.push(5) 
// Podemos pedirle el tamaño de la lista 
// console.log(numeroSecreto.length);
// Accedemos a un elemento en particular, RECORDAR Java tiene como primer posicion el 0 
// console.log(numeroSecreto[0]); 
// Para acceder al ultimo elemento del arreglo; 
// console.log(numeroSecreto[lenght-1]); voy hasta la ultima posicion y voy barriendo

//ALCANCE O AMBITO DE LA VARIABLE
// Si definimos por fuera una variable en el scrip general, el alcance es GLOBAL 
//Si definimos una variable dentro de una funciones, la fariable es de alcance de blqoue
