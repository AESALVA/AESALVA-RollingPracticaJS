// CONDICIONALES: Condiciones compuestas (&&, ||, !)

// Escriba un algoritmo que pueda evaluar si un número esta dentro del rango de 5 a 10.

// let numero = prompt("Ingrese un número: ");

// if ( numero >= 5 && numero <=10 ){
// 	alert("El número es menor o igual que 5 que 10.")
// }

// if ( numero >5 || (numero%2===0)) {
// 	alert("El número es par o es mayor que 5.")
// }

// if ( numero%2 !== 0 ) {
// 	alert("El número es impar.");
// }

// isLogged <--- Significaria si esta logueado el usario.

// 1)

// Escribe un algoritmo que muestre los numeros del 1 al 10.

// let i = 1;

// while (i <= 10) {
// 	alert(i);
// 	i++;
// };

// Escribe un algoritmo que muestre los numeros del 1 al 10 de mayor a menor.

// let i = 10;

// while ( i >= 1) {
// 	alert(i);
// 	i--;
// };

// Escribe un algoritmo que muestre si cada uno de los numeros del 1 al 10 son múltiplos de 2.

// let i = 1;

// while (i<=10) {
// 	if (i%2===0) {
// 		alert(i + " es par.")
// 	}
// 	i++;
// };

// SOLUCIÓN REFACTORIZADA
// let i = 2;

// while (i <= 10) {
// 	alert(i);
// 	i = i + 2;
// }

// Simule un estado de logueo con usuario y contraseña y, solo si no esta logueado, muestre un mensaje de error.

// let estaLogueado = false;

// while ( estaLogueado = false ) {
// 	alert("Logueate para poder ver el contenido.");
// Proceso de que el usuario se loguee
// }

// Simule un ingreso de un numero de telefono en un formulario y valide si el dato es correcto por la cantidad de digitos.

/*

let telefono = prompt("Ingrese su numero de telefono");

while(telefono.length < 6 || telefono.length > 6){
    telefono = prompt("Intente nuevamente");
    if (telefono.length == 6){
        alert("bien");
    }
}


*/




// 2)

// (AHORA CON FOR) Escribe un algoritmo que muestre los numeros del 1 al 10.

/*
 for (let index = 1; index < 11; index++) {
 
 	alert(index);
 }

 */



// (AHORA CON FOR) Escribe un algoritmo que muestre los numeros del 1 al 10 de mayor a menor.

// for (let registrosDeLaBaseDeDatos = 10; registrosDeLaBaseDeDatos > 0; registrosDeLaBaseDeDatos--) {

// 	alert(registrosDeLaBaseDeDatos);
// }

// (AHORA CON FOR) Escribe un algoritmo que muestre si cada uno de los numeros del 1 al 10 son múltiplos de 2.

/*

for (let index = 1; index < 11; index++){
    if (index%2===0){
        alert(index + " es multiplo de dos");
    }
}

*/


// Escribe un algoritmo que muestre solo los numeros pares del 1 al 10

/*

for (let index = 1; index < 11; index++){
    if (index%2===0){
        alert(index);
    }
}

*/




// Genere CON LAS HERRAMIENTAS QUE TENEMOS HASTA AHORA un juego de 10 preguntas y respuestas donde cada respuesta correcta sume un punto. Al final del juego debe mostrar cuantos puntos sumo el jugador.
  

/*

let pregunta1 = prompt("2 es numero impar?");
let respuesta1 = pregunta1;


if (respuesta1 === "si"){
    punto1 = 0;
    alert(0 ,"puntos");
} else if (respuesta1 === "no"){
    punto1 = 1;
    alert(1 ,"puntos");
}

let pregunta2 = prompt("5 por 5 es?");
let respuesta2 = pregunta2;

if (respuesta2 == 25){
    punto2 = 1;
    alert("1 puntos");
} else if( respuesta2 !== 25){
    punto2 = 0;
    alert("0 puntos");
}

alert(punto1 + punto2);


*/




// let puntuacion = 0;
// let respuesta = "";

// for (let index = 0; index < 10; index++) {
// 	// Bloque de codigo



// 	switch (index) {
// 		case 0:
// 			respuesta = prompt("¿Empanada, con o sin papa?");
// 			if (respuesta.toUpperCase() === "SIN") {
// 				puntuacion = puntuacion + 1;
// 				alert("CORRECTO!");
// 			} else {
// 				alert("ERROR!");
// 			}
// 		break;

// 		case 1:
// 			respuesta = prompt("¿Empanada, con o sin papa?");
// 			if (respuesta.toUpperCase() === "SIN") {
// 				puntuacion = puntuacion + 1;
// 				alert("CORRECTO!");
// 			} else {
// 				alert("ERROR!");
// 			}

// 			break;
// 		// case 3:
			
// 		// 	break;
// 	}
	
// }

// alert(puntuacion);
/*

const array = [1,2,3];

for (let index = 0; index < array.length; index++) {
	const element = array[index];
	alert(element);
}

*/


// Genere CON LAS HERRAMIENTAS QUE TENEMOS HASTA AHORA un algoritmo que pida dos numeros y la operacion a realizar (+, -, *, /) y muestre el resultado. Validar que los datos ingresados sean correctos y volver a pedirlos si es necesario.

/*

let num1 = parseInt(prompt("primer numero"));
let num2 = parseInt(prompt("segundo numero"));
let operacion = prompt("ingrese la operacion");


function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

if (operacion === "sumar"){
    alert(sumar(num1,num2));
}
else if (operacion === "restar"){
    alert(restar(num1,num2));
}
else if (operacion === "multiplicar"){
    alert(multiplicar(num1, num2));
}
else if (operacion === "dividir"){
    alert(dividir(num1, num2));
}
else alert("no ingreso una operacion permitida");



*/

// CLASE 16/06/22

// fuNciones de arrays

// let lista1 = ['1','2','3','4'];


// foreach  |  POR cada elemento

// lista1.forEach((lista) => {console.log(lista)});    // array en plural , elemento singular

// map | CON cada elemento , todas las veces va a devolver algo

// let nuevoarray = lista1.map((lista)=>{return lista + ' del map'});

// console.log(nuevoarray);




// FILTER  armar un nuevo array con los elementos que coincidan

// let mascota1 = {id:1, nombre:'michi', edad:9};
// let mascota2 = {id:2, nombre:'rata', edad:1};
// let mascota3 = {id:3, nombre:'Siro', edad:12};
// let mascota4 = {id:4, nombre:'koki', edad:15};
// let mascota5 = {id:5, nombre:'pocho', edad:1};
// let mascota6 = {id:6, nombre:'pichi', edad:7};


// let mascotas =[mascota1, mascota2, mascota3, mascota4, mascota5, mascota6];


//  let mascotasGrandes = mascotas.filter(
//      (mascota)=> mascota.edad > 5 );

/*

// SLICE  


let resultadoSlice = mascotas.slice(2);

console.log(resultadoSlice); 
console.log(mascotas);
console.clear();

// SPLICE

let resultadoSplice = mascotas.splice(2,1);

console.log(resultadoSplice);
console.log(mascotas);
*/

// FIND


// let mascota = mascotas.find((mascotas)=>mascotas.edad > 5);


// let mascotanro2 = mascotas.findIndex((mascotas)=>mascotas.nombre == 'koki');   // FINDE INDICE
// console.log(mascotanro2);

// console.clear();


// mascotas.reverse();
// console.log(mascotas);







// TAREAS //

//Sumatoria de numeros :
// Crear una funcion que tome como parametro un numero y devuelva por consola como resultado la suma de todos los numeros hasta el, por ej:
// sumarotia(5) devolveria  13
// por que  1 + 2 + 3 + 4 + 5 = 13;
// sumarotia(10) devolveria  55
// por que  1 + 2 + 3 + ... + 10 = 55
/*--------------------------------------------------------------*/



// function sumatoria(num1, num2, num3, num4, num5) {
//     return (num1 + num2 + num3 + num4 + num5 )
// };


// console.log(sumatoria(1, 2, 3, 4, 5));
// console.clear();


// function sumatoria(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10){
//     return (num1 + num2 + num3  + num4 + num5 + num6 + num7 + num8 + num9 + num10)
// }

// console.log(sumatoria(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));




// sumatoria(5);
// sumatoria(10);
/*--------------------------------------------------------------*/
//Tabla de multiplicar
// Crear una funcion que devuelva un array nuevo en donde esten los multiplos del 1 al 10 de el numero pasado y mostrarlo por consola, por ej:
// tablaDe(5) devolveria [5,10,15,20,25,30,35,40,45,50]
// tablaDe(2) devolveria [2,4,6,8,10,12,14,16,18,20]
/*--------------------------------------------------------------*/

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newnumbers = numeros.map((numero)=>{return numero*5});

// console.log(newnumbers);


// let nuevosNumeros = numeros.map((numero)=>{return numero*2});

// console.log(nuevosNumeros);





// tablaDe(5);
// tablaDe(2);








/*--------------------------------------------------------------*/
// 21/06/22



//Funciones con Strings

// let alfabeto = "  A b C d E f G h I j K l l M n O p Q r S t U v W x Y z  ";

// // podemos tratar un string en ciertas maneras como un array de caracteres

// const resultados = {};

// resultados.conteoLetras = alfabeto.length;
// resultados.letraA = alfabeto[2];
// resultados.letraZ = alfabeto[28];

//pero no podemos hacer un recorrido por ellas con foreach
//alfabeto.forEach((letra) => console.log(letra));

//si podemos hacerlo con ciclos for (for in tambien)
//for (letra in alfabeto) {console.log(alfabeto[letra])}

//los metodos slice, substring y substr sirven para extraer partes

// slice extrae con las indicaciones: desde -> hasta
//resultados.porSlice = alfabeto.slice(2,5);

// subsctring extrae con las indicaciones: desde -> hasta
//resultados.porSubstring = alfabeto.substring(2,5);

// substr extrae con las indicaciones: desde -> cuantos (esta depreciada)
//resultados.porSubstr = alfabeto.substr(2,5);


//con replace podemos reemplazar parte de la cadena , por otra
//pero solo cambia la primera ocurrencia y solo si es exacta
//resultados.conReplace = alfabeto.replace(/ /ig, '');

//para comportamientos distintos del basico, usamos banderas (flags) que ayudan:
// /i para que no tenga en cuenta las mayus y minusculas
// /g para que sean todas las ocurrencias encontradas


//Cambio de Mayusculas y Minusculas

//resultados.aMayusculas = alfabeto.toUpperCase();
//resultados.aMinusculas = alfabeto.toLowerCase();

// Trim re,corta los espacios en blanco
//resultados.trimeado = alfabeto.trim();

// console.log('alfabeto:' + alfabeto);

// for (const llave in resultados) {
//     console.log(`${llave}: ${resultados[llave]} `);
// }


// CLASE DE CONSULTA 25/06/22


const array = ['true','false','true','false','true','true','false','true','false','true','true','false','true','false','true'];

let newarray = array.filter((arr)=>arr=='true');

console.log(newarray.length);




