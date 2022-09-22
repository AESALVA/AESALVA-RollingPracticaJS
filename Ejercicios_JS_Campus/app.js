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

