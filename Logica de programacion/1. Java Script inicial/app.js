/*
    TIP: cuando estamos en un link en google podemos cambiar el en por es y redirecciona a la version en español (si existe)
    Libreria: MathRandom() obtener un numero random suele darlos en decimales si no ajustamos con condiciones!
    Mat.random()*10; (10 decimales)
    Math.floor() --> numero maximo entero menor (truncamiento) de cualquier numero decimal
    Math.floor(Math.random()*10); 
    Math.floor(Math.random()*10) + 1; evitamos el 0 e incluimos el 10 (todo el vector de numeros que queremos)
*/
let numeroMaximoposible= 100; 
let numeroSecreto=  Math.floor(Math.random()*numeroMaximoposible) + 1;
let numeroUsuario = 0;
let intentos= 1; 
// let palabraVeces= 'vez';  
let maximosintentos= 3; 
/*
    Ruptura forzada--> SALIMOS del while cuando se cumpla una condicion
*/ 
while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoposible} por favor`)); //Guardamos el valor del numero como tipo numero, antes sin el parseInt lo guardaba como string
    //alert('Hola Mundo'); //Función tipo print 
    // Vamos a usar variables de tipo let, vamos a usar variables camelcase. 
    console.log(typeof (numeroUsuario)); // A traves de la consola vamos a poder ir viendo las variables y verificar el trabajo. 
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condicion
        alert(`Acertaste el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`); // Definimos dentro del string directamente si ponemos vez o veces, simplificamos if 
    } else {        
        alert('Lo siento, no acertaste el juego');
        if( numeroUsuario> numeroSecreto){
            alert("El numero secreto es menor");
        }
        else{
            alert("El numero secreto es mayor");
        }
        // intentos =+ 1;
        intentos ++ ;
       //palabraVeces= 'veces'; 
        if(intentos> maximosintentos){
            alert(`Llegaste al maximo de ${maximosintentos} intentos`); 
            break; 
        }
    }
}

/*
let palabraPersona = cantidadPersonas == 1 ? 'persona' : 'personas'; 
*/


