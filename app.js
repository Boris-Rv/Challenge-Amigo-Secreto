let listasDeNombres= [];

function agregarAmigo(){
     let ingresarNombres= document.getElementById('amigo').value;
    if(ingresarNombres=== '') {
        alert('Por favor, inserte un nombre');
        return;
        
    }
    listasDeNombres.push(ingresarNombres);
    limpiarCaja();
    mostrarlista();
    

    //console.log(listasDeNombres);

}

function limpiarCaja (){
    document.querySelector('#amigo').value= '';
}


function mostrarlista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML='';
    for(let generarNombre=0; generarNombre<listasDeNombres.length; ++generarNombre){
    let elemento=document.createElement('li');
    elemento.textContent=listasDeNombres[generarNombre];
    lista.appendChild(elemento);

    }
    
}

function sortearAmigo() {
    if(listasDeNombres.length>0){
    let generaramigos=Math.floor(Math.random()*listasDeNombres.length);
    let obtenerNombre=listasDeNombres[generaramigos];
    let mostrarResultado=document.getElementById("resultado");
    mostrarResultado.innerHTML= `<li>El amigo secreto sorteado es: ${obtenerNombre}</li>`;

    }else{
        alert('agrege un nombre de un amigo');
        }
}    
