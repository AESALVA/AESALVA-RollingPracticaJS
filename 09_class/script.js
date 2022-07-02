let texto = document.getElementById('text');

texto.innerHTML = 'Nuevo texto random';



let divNuevo = document.createElement('div');
divNuevo.innerHTML = 'texto del div';

let mainCreado = document.getElementsByTagName('main')[0];
mainCreado.append(divNuevo);


mainCreado.classList.add('mainCreadoStyle');

divNuevo.classList.add('divNuevoStyle');


// modularizacion

let inputTitulo = document.getElementById('inpText');
let inputImagenURL = document.getElementById('inpImagenURL');
let btnAgregar = document.getElementById('inpButton');


function addProducto(titulo, imagenURL){
                                              // tomar los valores de los inputs
                                              // creacion de los elementos 
                                              // agregado de los valores
    imagenURL.setAttribute('src', imagenURL)


}





function error(){
    inputTitulo.value.length < 4 ? 
    inputTitulo.classList.add('error'):
    inputTitulo.classList.remove('error');

}

