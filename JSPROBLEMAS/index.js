// 2)

// Dado un número, indicar si ese número es mayor a 10.

// let numero = prompt("Ingrese su número");

// if (numero > 10) {
// 	alert("El número es mayor a 10");
// };

// Dado un número, indicar si ese número es menor o igual a 10.

// let numero = prompt("Ingrese un número:");

// if (numero <= 10) {
// 	alert("El número es menor o igual a 10")
// }

// Dado un número, indicar si ese número es par.

// let numero = prompt("Ingrese un número: ");

// if (numero%2 === 0) {
// 	alert("El número es par.")
// }



// Dado un número, indicar si ese número es impar.

// let numero = prompt("Ingrese un número: ");

// if (numero%2 !== 0) {5
// 	alert("El número es impar.")
// if (valor.length > 0) {
// 	alert("Este valor tiene contenido");
// }





// 3)

// Dado un número, indicar si ese número es mayor o menor o igual
// a 10.

// let numero = prompt("Ingrese un número: ");

// if (numero > 10) {
// 	alert("El número es mayor a 10");
// } else {
// 	alert("El número es menor o igual a 10");
// }

// Dado un número, indicar si ese número es par o impar.

// let numero = prompt("Ingrese un número");

// if (numero%2 === 0 ) {
// 	alert("El número es par");
// } else {
// 	alert("El número es impar");
// }

// Dados dos números, indicar cual es el mayor.

// let numero1 = prompt("Ingrese un número");
// let numero2 = prompt("Ingrese otro número");

// if (numero1>numero2){
// 	alert("El primer numero es mayor");
// } else {
// 	alert("El segundo número es mayor o igual");
// }

// Ante un valor ingresado, indicar si tiene o no contenido.

// TAREA!

// 4)

// Dados dos números, indicar cual es mayor o si son iguales.

// let numero1 = prompt("Ingrese un número");
// let numero2 = prompt("Ingrese otro número");

// if (numero1>numero2) {
// 	alert("El primer número es mayor.");
// } else if (numero1<numero2){
// 	alert("El segundo número es mayor.");
// } else {
// 	alert("Ambos números son iguales.")
// }

// let numero1 = prompt("Ingrese un número");
// let numero2 = prompt("Ingrese otro número");

// if (numero1>numero2) {
// 	alert("El primer número es mayor.");
// }
// if (numero1<numero2) {
// 	alert("El segundo número es mayor.");
// }
// if (numero1===numero2) {
// 	alert("Ambos números son iguales.");
// }

// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.

// let notas1 = 1;
// console.log(notas1);
// let notas2 = 1;
// console.log(notas2);
// let notas3 = 1;
// console.log(notas3);

// let promedio = (notas1+notas2+notas3)/3;
// console.log(promedio);

// if (promedio>6) {
// 	alert("Aprobado!, su promedio es de " + promedio)
// } else if (promedio<6) {
// 	alert("Desaprobado!, su promedio es de " + promedio);
// } else {
// 	alert("Recupera!, su promedio es de " + promedio)
// }

// Crear un algoritmo que pida al usuario el diámetro de una rueda
// y su grosor (en metros) y realice las siguientes operaciones:

// TAREA

// a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje
//“La rueda es para un vehículo grande”. Si es menor o igual a 1.4
// pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para
// un vehículo mediano”. Si no se cumplen ninguna de las condiciones
// anteriores debe mostrarse por pantalla el mensaje “La rueda es
//para un vehículo pequeño”.

//let diametro = prompt("indique el diametro de su rueda");
//	if ( diametro > 1.4){
//		alert("la rueda es para un vehiculo grande");
//	}
//		else if (diametro <= 1.4 && diametro > 0.8){
//			alert("La rueda es para un vehiculo mediano");
//		}
//		else alert("La rueda es para un vehiculo pequeño");

// TAREA

// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.



//let numero = prompt("que numero de mes elige:");

/*

  if (numero == 1) {
  alert("ENERO");
} else if (numero == 2) {
  alert("FEBRERO");
} else if (numero == 3) {
  alert("MARZO");
} else if (numero == 4) {
  alert("ABRIL");
} else if (numero == 5) {
  alert("MAYO");
} else if (numero == 6) {
  alert("JUNIO");
} else if (numero == 7) {
  alert("JULIO");
} else if (numero == 8) {
  alert("AGOSTO");
} else if (numero == 9) {
  alert("SEPTIEMBRE");
} else if (numero == 10) {
  alert("OCTUBRE");
} else if (numero == 11) {
  alert("NOAVIEMBRE");
} else if (numero == 12) {
  alert("DICIEMBRE");
} else alert("el numero elegido no corresponde a ningun mes.");


*/


// Solicitar un numero de día y mostrar el nombre del día






/*

let dia = prompt("que numero de dia elige:");

   if (dia==1){
	alert("DOMINGO");
}   else if(dia==2){
	alert("LUNES");
}	else if(dia==3){
	alert("MARTES");
}	else if(dia==4){
	alert("MIERCOLES");
}	else if(dia==5){
	alert("JUEVES");
}	else if (dia==6){
	alert("VIERNES")
}	else if (dia==7){
	alert("SABADO")
}	else alert("El numero no corresponde a ningun dia.");


*/


// 5)

// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4,
// ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un
// grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para
// esta rueda es inferior al recomendado”


/*

let diametro = prompt("ingrese el diametro:");
let grosor = prompt("indique el grosor:");

if (diametro > 1.4 && diametro <= 1.4 && diametro > 0.8 || grosor < 0.4 && grosor < 0.25 ){
	alert("El grosor para esta rueda es inferior al recomendado");
}
else alert("el grosor es el correcto.");



*/


// 6)

// Hacer ahora con Switch:
// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.

/*

let matematicas = prompt("nota de matematicas:")*1;
let lengua = prompt("nota de lengua:")*1;
let fisica = prompt("nota de fisica:")*1;

let promedio = (matematicas + lengua + fisica)/3 ;


switch (true) {
 case	promedio>6:

		alert("APROBADO");
	
		
		break;
 case promedio<6:
	 alert("DESAPROBADO");
	 	break;

 case promedio == 6:
	 alert("RECUPERACION");
	 break

}

*/





// TAREA

// Hacer ahora con Switch:
// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.

/*

let mes = prompt("elegir un numero de mes:")*1;

switch (mes) {
	        case 1:
		    alert("ENERO")
		    break;
		    case 2:
			alert("FEBRERO")
			break;
			case 3:
			alert("MARZO")
			break;
			case 4:
			alert("ABRIL")
			break;
			case 5:
			alert("MAYO")
			break;
			case 6:
			alert("JUNIO")
			break;
			case 7:
			alert("JULIO")
			break;
			case 8:
			alert("AGOSTO")
			break;
			case 9:
			alert("SEPTIEMBRE")
			break;
			case 10:
			alert("PCTUBRE")
			break;
			case 11:
			alert("NOVIEMBRE")
			break;	
			case 12:
			alert("DICIEMBRE")
			break;
		default:alert("ese numero no corresponde a ningun mes del año")
		break;


}

*/



// Hacer ahora con Switch:
// Solicitar un numero de día y mostrar el nombre del día

/*

let dia = prompt("Que numero de dia elije:")*1;

switch (dia) {
		case 1:
		alert("LUNES")
		break;
		case 2:
		alert("MARTES")
		break;
		case 3:
		alert("MIERCOLES")
		break;
		case 4:
		alert("JUEVES")
		break;
		case 5:
		alert("VIERNES")
		break;
		case 6:
		alert("SABADO")
		break;
		case 7:
		alert("DOMINGO")
		break;

	default:alert("el numero ingresado no corresponde a ningun dia de la semana.")
		break;
}


*/


// TAREA

// Escribe un programa que responda a un usuario que quiere comprar
// un helado en una conocida marca de comida rápida cuanto le costará
// en función del topping que elija. Si no hay concidencias debe
// informarlo.
// El helado sin topping cuesta $100.
// El topping de oreo cuesta $150.
// El topping de KitKat cuesta $175.
// El topping de brownie cuesta $175.



/*

let topping = prompt("que topping desea:");

switch (topping) {
	case "oreo":
		alert("El topping de oreo cuesta $150.")
		
		break;
	case "kitkat":
		alert("El topping de KitKat cuesta $175.")

		break;
	case "brownie":
		alert("El topping de brownie cuesta $175.")
		break;

	default:alert("El helado sin topping cuesta $100.")
		break;
}


*/







// TAREA

// Solicitar al usuario un modelo de auto que desea comprar e
// informarle cuánto cuesta. Si no hay concidencias debe informarlo.


/*

let auto = prompt("que modelo de auto desea comprar:");

switch (auto) {
	case "fiat":
		alert("$2.2m")
		break;
	case "ford":
		alert("$2.8m")
		break;
	case "renault":
		alert("$2.5m")
		break;
	case "volkswagen":
		alert("$2.7m")
		break;
	case "chevrolet":
		alert("$2.4m")
		break;
	case "peugeot":
		alert("$2.9m")
		break;


	default:alert("no se encuentran coincidencias al modelo solicitado")
		break;
}


*/

// TAREA