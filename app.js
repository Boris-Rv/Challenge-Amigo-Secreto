let listadoDeAmigos= [];

function agregarAmigo(){
     let ingresarNombres = document.getElementById('amigo').value;
     //console.log(typeof(ingresarNombres));
     
    if(ingresarNombres==='') {
        alert('Por favor, inserte un nombre');
        return;
        
    }
    listadoDeAmigos.push(ingresarNombres);
    limpiarCaja();
    mostrarlista();
    document.querySelector('#listaAmigos').style.display = 'block';
    
    
}

function limpiarCaja (){
    document.querySelector('#amigo').value= '';
}


function mostrarlista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML='';
    for(let generarNombre=0; generarNombre<listadoDeAmigos.length; generarNombre++){
    let elemento=document.createElement('li');
    elemento.textContent=listadoDeAmigos[generarNombre];
    lista.appendChild(elemento);

    }
    
}

function sortearAmigo() {
    if(listadoDeAmigos.length>0){
    let indiceAleatorio=Math.floor(Math.random()*listadoDeAmigos.length);
    let obtenerNombre=listadoDeAmigos[indiceAleatorio];
    let mostrarResultado=document.getElementById("resultado");

    document.querySelector('#listaAmigos').style.display = 'none';
    mostrarResultado.innerHTML= `<li>El amigo secreto sorteado es: ${obtenerNombre}</li>`;
   mostrarResultado.style.display = 'block';
   

    }else{
        alert('Por favor, agrege nombres de amigos para sortear');
        }
}    

