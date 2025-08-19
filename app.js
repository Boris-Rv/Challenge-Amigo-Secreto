let listasDeNombres= [];

function agregarAmigo(){
     let ingresarNombres= document.getElementById('amigo').value;
    if(ingresarNombres=== '') {
        alert('Por favor, inserte un nombre');
        return;
    }
    listasDeNombres.push(ingresarNombres);

    
}
