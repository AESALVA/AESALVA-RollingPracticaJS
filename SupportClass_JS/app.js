// EJERCICIO 1
// Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”,
// los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];                

const newNumbers = numeros.map(number => {
   if (number %3 === 0 && number %5 === 0) {
        number = "fizzfuzz";
}else if(number %5 === 0){
    number = "fuzz"}
    else if(number %3 === 0){number = "fizz"}
    return  number;
});

 console.log(newNumbers);



// EJERCICIO 2
// Invierta la oración "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus"


let words = "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus";

const newWords = words.split(" ");

console.log(newWords);

const newWordsTwo = newWords.reverse();

console.log (newWordsTwo);

const result = newWordsTwo.join(" ");

console.log(result);


// EJERCICIO 3: Reverse String
// Invierta la palabra "abcdefghijk"

let word = "abcdefghijk";

const newWord = word.split("");

console.log(newWord);

const newWordTwo = newWord.reverse();

console.log(newWordTwo);

const newResult = newWordTwo.join("");

console.log(newResult);


// EJERCICIO 4: Reverse String
// Encuentre el minimo y el maximo de la siguiente lista "100, 2000, 3, 50, 6, 7000, 80, 900, 10, 20000, 300, 500, 600"


const lista = [100, 2000, 3, 50, 6, 7000, 80, 900, 10, 20000, 300, 500, 600];

console.log(Math.max(...lista));

console.log(Math.min(...lista));



// EJERCICIO 5: Duplicate Repeats
// Devuelve los distintos valores únicos de una lista que incluye duplicados 1, 3, 5, 3, 7, 3, 1, 1, 5



let newList = [1, 3, 5, 3, 7, 3, 1, 1, 5];

const newListTwo = new Set(newList);

let resultList = [...newListTwo];

console.log(resultList);


// EJERCICIO 6: Multiple Reverse
// Escriba un programa que imprima, en orden inverso, cada múltiplo de 3 entre 1 y 200.

for (let index = 200; index > 1; index--) {
 if (index %3 === 0) {
    const newIndex = [index];
    console.log(newIndex);
    }}