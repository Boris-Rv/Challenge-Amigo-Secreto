let listasDeNombres= [];

function agregarAmigo(){
     let ingresarNombres= document.getElementById('amigo').value;
    if(ingresarNombres=== '') {
        alert('Por favor, inserte un nombre');
        
    }
    listasDeNombres.push(ingresarNombres);
    limpiarCaja();
    actualizarlista();
    //console.log(listasDeNombres);

}

function limpiarCaja (){
    document.querySelector('#amigo').value= '';
}


function mostrarlista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML='';
    
}
