// const miTitulo = document.querySelector('h1');
// miTitulo.textContent = 'Hola Mozilla'

// document.querySelector('html').onclick = function() {
//     alert('¡Ouch! ¡Deja de pincharme!');
// };

let miImage = document.querySelector('img');
miImage.onclick = function() {   
    let src = miImage.getAttribute('src');

    if (src === 'images/firefox.png'){
        miImage.setAttribute('src','images/firefox2.png');
    } else {
        miImage.setAttribute('src','images/firefox.png');
    }
}


let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Galeria de logos de: ' + miNombre;
    }
}

if(!localStorage.getItem('name')) {
    estableceNombreUsuario();
} else {
    let storedName = localStorage.getItem('nombre');
    miTitulo.innerHTML = 'Galeria de logos de: ' + storedName;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
