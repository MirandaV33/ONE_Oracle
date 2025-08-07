/*
¿Que debe hacer mi página? 

- Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y 
lo agregarán a una lista visible al hacer clic en "Adicionar".

- Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo 
un nombre válido.

- Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

- Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
un nombre de la lista y se mostrará en la página. 

*/

let ListaAmigos= [ ]; 


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    console.log(nombre); 
    if (nombre == ''){
        alert('Ingrese un nombre válido'); 
    } 
    else {
        ListaAmigos.push(nombre);
    }
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML += `<li>${nombre}</li>`;
    document.getElementById('amigo').value = '';
    // Limpio el campo de resultado para comenzar otra vez
    document.getElementById('resultado').innerHTML = '';
}

function sortearAmigo() {
    if (ListaAmigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    else{
        let nombresorteado= Math.floor(Math.random() * ListaAmigos.length); 
        let nombre = ListaAmigos[nombresorteado];

        let listaHTML = document.getElementById('resultado');
        listaHTML.innerHTML = `<li>${nombre}</li>`;

        //Limpiamos la lista para comenzar otra vez
        ListaAmigos = [];
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('amigo').value = ''; 
    }
}

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});