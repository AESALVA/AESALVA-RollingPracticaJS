// document.write("un mensaje");

// document.write("Hello World");

// let suma = 3+5; document.write(suma);

// let nombre = prompt("como te llamas?");
// document.write(nombre);

// let num1 = parseInt(prompt("elije el primer numero"));
// let num2 =  parseInt(prompt("elige el segundo numero"));
// let sum = num1 + num2;
// document.write(sum);

// let num3 = parseInt(prompt("elije el tercer numero"));
// let num4 =  parseInt(prompt("elige el cuarto numero"));
// if (num3 > num4) {
//     document.write(num3)
// } else {
//     document.write(num4)
// }

// let num1 = parseInt(prompt("elije el primer numero"));
// let num2 = parseInt(prompt("elije el segundo numero"));
// let num3 = parseInt(prompt("elije el tercer numero"));
// if (num1 > num2 && num1 > num3) {
//   document.write(num1);
// } else if (num1 > num2 && num1 > num3) {
//   document.write(num3);
// } else if (num3 > num1 && num3 > num2) {
//   document.write(num3);
// } else {
//   document.write(num2);
// }

//  let num = parseInt(prompt("elije el un numero"));
//  if (num %2 === 0) {
//     alert(`El numero ${num} si es divisible por 2`)
//  } else {
//     alert(`el numero ${num} no es divisible por 2` )
//  }

// let frase = prompt("frase").toUpperCase();

// const vocales2 = [];

// let newFrase = frase.split("");

// newFrase.forEach((f) => {
//   if (f.includes("A")) {
//     vocales2.push(f);
//   } else if (f.includes("U")) {
//     vocales2.push(f);
//   } else if (f.includes("E")) {
//     vocales2.push(f);
//   } else if (f.includes("O")) {
//     vocales2.push(f);
//   } else if (f.includes("I")) {
//     vocales2.push(f);
//   }
// });

// console.log(vocales2);

// let num = [parseInt(prompt("elija un numero"))];

// const condicion1 = num%2===0;
// const condicion2 = num%3===0;
// const condicion3 = num%5===0;
// const condicion4 = num%7===0;

// for (let i = 0; i< num.length; i++) {
//     if (condicion1 && condicion2 && condicion3 && condicion4) {
//         alert(`${num} es divisible por 2, 3, 5, 7`)
//     } else if(condicion1 && condicion2 && condicion3){
//         alert(`${num} es divisible por 2, 3, 5`)
//     } else if (condicion1 && condicion2){
//         alert(`${num} es divisible por 2, 3`)
//     } else if(condicion1 && condicion3){
//         alert(`${num} es divisible por 2, 5`)
//     } else if(condicion1 && condicion4){
//         alert(`${num} es divisible por 2, 7`)
//     } else if (condicion1){
//         alert(`${num} es divisible por 2`)
//     } else if(condicion2 && condicion3 && condicion4){
//         alert(`${num} es divisible por 3, 5, 7`)
//     } else if(condicion2 && condicion3){
//         alert(`${num} es divisible por 3, 5`)
//     } else if(condicion2 && condicion4){
//         alert(`${num} es divisible por 3, 7`)
//     } else if(condicion2){
//         alert(`${num} es divisible por 3`)
//     } else if(condicion3 && condicion4){
//         alert(`${num} es divisible por 5, 7`)
//     } else if(condicion3){
//         alert`${num} es divisible por 5`
//     } else if(condicion4){
//         alert(`${num} es divisible por 7`)
//     } else {
//         alert(`${num} no es divisible por 2, 3, 5, 7`)
//     }
// }

// let n1 = prompt("Escribe un número");
// if (n1 % 2 == 0 || n1 % 3 == 0 || n1 % 5 == 0 || n1 % 7 == 0) {
//     if (n1 % 2 == 0) {
//         alert("Es divisible por 2");
//     }
//     if (n1 % 3 == 0) {
//         alert("Es divisible por 3");
//     }
//     if (n1 % 5 == 0) {
//         alert("Es divisible por 5");
//     }
//     if (n1 % 7 == 0) {
//         alert("Es divisible por 7");
//     }
// } else {
//     alert("No es divisible por 2, ni por 3, ni por 5, ni por 7");
// }

//---------------------- Ejercicios javascript - Bucles

// let edad = parseInt(prompt("cual es tu edad"));

// if (edad>=18) {
//     alert('puedes conducir')
// } else {
//     alert('la edad ingresada no es un numero valido')
// }

// let nota = parseInt(prompt('ingrese nota de 0 al 10'));

// if (nota>=0 || nota<=2 || nota>=3 || nota<=4 || nota>=5 || nota<=6 || nota==7 ||nota>=8 || nota<=9 || nota==10 ) {
//     if(nota>=0 && nota<=2){
//         alert('muy deficiente')
//     }
//     if (nota>=3 && nota<=4 ) {
//         alert('insuficiente')
//     }
//     if (nota>=5 && nota<=6 ) {
//         alert('suficiente')
//     }
//     if (nota==7) {
//         alert('bien')
//     }
//     if (nota>=8 && nota<=9) {
//         alert('notable')
//     }
//     if (nota==10 ) {
//         alert('sobresaliente')
//     }
//     if(nota<0 || nota>10){
//         alert('numero erroneo')
//    }
// }

// const myFunction = ()=>{

//     const text = document.getElementById('text')
//     const parrafo = document.getElementById('parrafo')
//     const txt = text.value.split('');
//     parrafo.innerHTML= txt.join("-");
// }

// const myFunction = ()=>{

//     const text = document.getElementById('text');
//     const parrafo = document.getElementById('parrafo');
//     const txt = text.value.split('');
//     const numbers = [];
//  txt.map(t=>{
//     if (!isNaN(parseInt(t)) && t != null) {
//         numbers.push(parseInt(t));
//     } else {
//         alert(`${t} no es un numero`)
//     }
//  })
//  console.log(numbers)
//  let total = numbers.reduce((a, b)=> a + b,0);
//  parrafo.innerHTML=total;
// }

// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// const myFunction = () => {
//   const text = document.getElementById("text");
//   const parrafo = document.getElementById("parrafo");
//   const txt = text.value.split("");
//   const numbers = [];
//   txt.map((t) => {
//     if (!isNaN(parseInt(t)) && t != null) {
//       if (parseInt(t) >= 0 && parseInt(t) <= 99999999) {
//         numbers.push(parseInt(t));
//       } else {
//         alert(`${t} no es un numero de DNI valido`);
//       }
//     }
//     text.value='';
//   });
//   const results = parseInt(numbers.join(''));

//   if (results >=0 && results <= 99999999) {
//   const result = parseInt(results) % 23;
//   result === 0 && alert("T");
//   result === 1 && alert("R");
//   result === 2 && alert("W");
//   result === 3 && alert("A");
//   result === 4 && alert("G");
//   result === 5 && alert("M");
//   result === 6 && alert("Y");
//   result === 7 && alert("F");
//   result === 8 && alert("P");
//   result === 9 && alert("D");
//   result === 10 && alert("X");
//   result === 11 && alert("B");
//   result === 12 && alert("N");
//   result === 13 && alert("J");
//   result === 14 && alert("Z");
//   result === 15 && alert("S");
//   result === 16 && alert("Q");
//   result === 17 && alert("V");
//   result === 18 && alert("H");
//   result === 19 && alert("L");
//   result === 20 && alert("C");
//   result === 21 && alert("K");
//   result === 22 && alert("E");
//   } else {
//     alert(`${results} no es un numero de DNI valido`);
//   }

// };

// for (let i = 1; i <= 30; i++) {

//     for (let rep = 0; rep < i; rep++) {

//         document.write(i);
//      }
//      document.write("<br>");
//  }

// let number = parseInt(prompt('elije un numero'))

// for (let i = number; i > 1; i--) {

//      for (let rep = 0; rep < i; rep++) {

//          document.write(i);
//      }
//      document.write("<br>");
//     }

// let number = parseInt(prompt('elije un numero'))

//  for (let i = 1; i <= number; i++) {

//      for (let rep = 0; rep < i; rep++) {

//          document.write(i);
//       }
//       document.write("<br>");

//   }

// for (let i = 1; i < 500; i++) {

//     if (i%4===0) {
//         document.write(`${i} (multiplo de 4)`);
//     }else if(i%9===0) {
//         document.write(`${i} (multiplo de 9)`);
//     } else if(i%5 == 0){
//         document.write(`${i}<br><hr>`);
//     } else {
//         document.write(i)
//     }

//     document.write("<br>");
// }

// let filas = parseInt(prompt('elija nro de filas'));
// let columnas = parseInt(prompt('elija el nro de columnas'));

// let total = filas * columnas;

// document.write('<table border>');
// for(let indiceFila=0; indiceFila < filas; indiceFila++){
//     document.write('<tr>');

//     for(let indiceColumna=0; indiceColumna< columnas; indiceColumna++){
//         document.write('<td>'+total+'</td>');
//          total--;
//     }
//     document.write('</tr>');
// }
// document.write('</table>');

// let nombre1 = prompt('primer nombre:');
// let edad1 = parseInt(prompt('primer nro de edad'));

// let nombre2 = prompt('segundo nombre:');
// let edad2 = parseInt(prompt('segundo nro de edad'));

// let nombre3 = prompt('tercer nombre');
// let edad3 = parseInt(prompt('tercer nro de edad'));

// let mayor = Math.max(edad1,edad2,edad3);

// if (mayor === edad1) {
//     document.write(`el mayor es ${nombre1}`)
// } else if(mayor === edad2){
//     document.write(`el mayor es ${nombre2}`)
// }else{
//     document.write(`el mayor es ${nombre3}`)
// }

//  let number = Math.floor(Math.random()*(99 - 1) + 1);

//  console.log(number);

// let text = prompt('introduzca su texto aqui');

// alert(`${text.toLocaleUpperCase()}`);

//  const text = prompt('introduzca su texto aqui');

//  const txt = text.split('');

// const txto = txt.join('-');

// console.log(txto);

// const texto = prompt('ingrese un texto').toUpperCase();

// const txt = texto.split('');

// let number = 0;

// txt.map(t=>{
//     if (t=="A" || t=="E" || t=="I" || t=="O" || t=="U") {
//         number++;
//     }
// })

// document.write(`el numero de vocales son ${number}`);

// const texto = prompt('ingrese un texto');

// const txt = texto.split('').reverse();

// const newTxt = txt.join('')

// document.write(newTxt)

// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// let texto = prompt("ingrese un texto").toLowerCase();
// let vocales = ["a", "e", "i", "o", "u"];
// let posición = 0;
// let stop = false;
// // const txt = texto.split("");

// // txt.map((t, i) => {
// //    t == "A" && console.log(i);
// //    t == "E" && console.log(i);
// //    t == "I" && console.log(i);
// //    t == "O" && console.log(i);
// //    t == "U" && console.log(i);

// //  });

// for (let i = 0; i < texto.length; i++) {
//     for (let p = 0; p < vocales.length; p++) {
//         if(vocales[p] === texto.charAt(i)){
//             posición = i;
//             stop = true;
//             break;
//         }
//     }
//     if(stop){
//         break;
//     }
// }
// if (stop != true) {
//     document.write(`La palabra ingresada no tiene vocales` );

// } else {
//     document.write(`La primera vocal '${texto.charAt(posición)}' está en la posición ${posición}` );

// }

//EJERCICIOS JS ------------------

// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

// const meses = [
//   "enero",
//   "febrero",
//   "marzo",
//   "abril",
//   "mayo",
//   "junio",
//   "julio",
//   "agosto",
//   "septiembre",
//   "octubre",
//   "noviembre",
//   "diciembre",
// ];

// const lista = document.getElementById("parrafo");

// meses.map((m) => {
//   const list = document.createElement("ul");
//   list.innerHTML = `<li>${m}</li>`;
//   lista.appendChild(list);
// });

// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

//   let cities = [];
//   let exit = true;
//   do {
//    let city = prompt('escriba el nombre de ciudades');
// if (city ===  null) {
//    exit = false;
// } else {
//    cities.push(city);
//    console.log(city)
// }
//   } while (exit);

// document.write(cities.length);

// document.write(cities[0]);
// document.write(cities[2]);
// document.write(cities[cities.length - 1]);

// let newCity = 'Paris';

// cities.push(newCity);
// console.log(cities);

// document.write(cities[1]);

// cities[1] = 'Barcelona';

// console.log(cities)

// 3- Escribir un script que simule el lanzamiento de dos dados.
// Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
//  Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// let suma = [];

// for (let i = 100; i > suma.length; i--) {
//   let dado1 = Math.floor(Math.random() * 7);
//   let dado2 = Math.floor(Math.random() * 7);
//   let sum = dado1 + dado2;
//   suma.push(sum);
// }

// console.log(suma);

// FUNCIONES

//1- Escribir el código de una función a la que se pasa como parámetro un número entero y
//devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// function myFunction(number) {
//    if (number%2===0) {
//       document.write(`el numero ${number} es par`)
//    } else {
//       document.write(`el numero ${number} es impar`)
//    }
// }

// myFunction(8);
// myFunction(9);
// myFunction(36);
// myFunction(13);
// myFunction(36);
// myFunction(99);

// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa,
//la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// function myFunction(cadena) {
//   if (cadena === cadena.toUpperCase()) {
//     document.write(`el texto ${cadena} esta formado solo por mayusculas`);
//   } else if (cadena === cadena.toLowerCase()) {
//     document.write(`el texto ${cadena} esta formado por minusculas`);
//   } else {
//     document.write(`el texto ${cadena} esta formado por una mezcla de ambas`);
//   }
// }

// myFunction("Hola");
// myFunction("EDUARDO");
// myFunction("hola");

// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// let a = parseInt(prompt("ingrese la medida de la base del rectangulo"));
// let b = parseInt(prompt("ingrese la medida de la altura del rectangulo"));

// function perimetro(a, b) {
//   p = 2*(a + b);
//   document.write(`el perimetro del rectangulo es ${p}`);
// }

// perimetro(a, b);

// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

// let number = parseInt(prompt("ingrese el numero de la tabla que desea:"));

// function myFunction(a) {
//   for (let i = 1; i < 11; i++) {
//     let result = a * i;
//     document.write(result);
//   }
// }

// myFunction(number);
