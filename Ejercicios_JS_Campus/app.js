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


const frase = prompt("escribe tu frase");
const newFrase = frase.split();
const vocales = ["a","e","i","o","u"];
const vocales2 = ["aeiou"];
const frase2 = newFrase.map(f=>f="a",f="e")
console.log(frase2)
