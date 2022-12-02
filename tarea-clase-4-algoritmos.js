//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/


//Desafío de programación #1: Imprimí los números del 1 al 10
//Resultado: 10 9 8 7 6 5 4 3 2 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Completado
//Desafìo de programación  #2: Imprimí los números impares del 1 al 100
//1 3 5 ... 99

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Completado

//Desafío de programación #3: Imprimí la tabla de multiplicación del 7
//7x0 = 0
//7x1 = 7
//...
//7x9 = 63

for (let i = 0; i < 11; i++) {
  resultado = 7 * i;
  console.log("7 x " + i + " = " + resultado);
}

//Completado


//Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
//1x0 = 0
//...
//1x9 = 9
//2x0 = 0
//...
//2x9 = 18
//...
//...
//9x9 = 81

function tablaMultiplicar(tabla, hasta = 10) {
  for (let i = 0; i <= hasta; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}
tablaMultiplicar(7);

function todasLasTablasDeMultiplicar() {
  tablaMultiplicar(1);
  tablaMultiplicar(2);
  tablaMultiplicar(3);
  tablaMultiplicar(4);
  tablaMultiplicar(5);
  tablaMultiplicar(6);
  tablaMultiplicar(7);
  tablaMultiplicar(8);
  tablaMultiplicar(9);
}

todasLasTablasDeMultiplicar();

//Completado
//Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = 0;
for (let i = 0; i < numeros.length; i++) {
  resultado = resultado + numeros[i];
}
console.log(resultado);

//completado


//Desafío de programación #6: Calcula 10!(10 factorial)
//10 * 9 * 8 * ... * 1

const numerosN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoN = 1;
for (let numerO of numerosN) {
  resultadoN *= numerO;
}
console.log(resultadoN);

//Completado

//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

function calcularSumaDeNumeros() {
  let acumulador = [];
  let resultado = 0;
  for (let i = 10; i <= 30; i++) {
    if (i % 2 !== 0) {
      acumulador.push(i);
    }
  }
  for (let numero of acumulador) {
    resultado += numero;
  }
  console.log(resultado);
}
calcularSumaDeNumeros();

//Completado


//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit


function convertirCelsiusEnFahrenheit(celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  return fahrenheit;
}
console.log("35° Celsius son " + convertirCelsiusEnFahrenheit(35) + "° Fahrenheit");

//Completado

//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

function convertirFahrenheitEnCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}
console.log("95° Fahrenheit son " + convertirFahrenheitEnCelsius(95) + "° Celsius");

//Completado

//Desafío de programación #10: Calcula la suma de todos los números en un array de números


function sumaDeArray(array) {
  let resultado = 0;
  for (let numero of array) {
    resultado += numero;
  }
  return resultado;
}
sumaDeArray([3, 4, 5, 6])


//Completado


//Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

function calcularPromedio() {
  const numeros = [17, 15, 20, 14];
  let sumaDeNumeros = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumaDeNumeros = sumaDeNumeros + numeros[i];
  }
  console.log(sumaDeNumeros / numeros.length);
}

calcularPromedio();

function calcularPromedio(numeros) {
  let resultado = 0;
  for (let sumaDeNumeros of numeros) {
    resultado += sumaDeNumeros;
  }
  console.log(resultado / numeros.length);
}

calcularPromedio([17, 15, 20, 14]);

//Completado

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

function retornarNumerosPositivos(arrays) {
  for (let i = 0; arrays[i] < arrays.length; i += 1) {
    if (arrays[i] !== 0) {
      arrays.shift(i);
    };
  };
  return arrays;
}
retornarNumerosPositivos([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]);

//Completado

//Desafío de programación #13: Find the maximum number in an array of numbers

function logearNumeros(numeros) {
  let actual = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > actual) {
      actual = numeros[i];
    }
  }
  return actual
}
logearNumeros([10, 3, 15, 7, 9, 11]);

// Completado

//Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

const miAgreglo = [];
for (let i = 1; i < 10; i++) {
  miAgreglo.push(i);
}

/*
Fibonacci(lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

Desafío de programación #16: Crear una función que dado un número retorne un Boolean(true / false) dependiendo si es primo o no.

let boolean = function (numero) {
  if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    return false;
  } else {
    return true;
  }
}
boolean();

Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
123 = 1 + 2 + 3 = 6
2 = 2
1234 = 1 + 2 + 3 + 4 = 10

function sumaDeNumeros(numeros) {
  let numerosEnString = String(numeros).split('');
  let suma = 0;
  let numerosModificados = numerosEnString.map(
    numero => Number(numero)
  );
  for (let numero of numerosModificados) {
    suma += numero;
  }
  return suma;
}
sumaDeNumeros(123);
// 6
sumaDeNumeros(1234);
// 10


/*
Desafío de programación #18: Imprimir los primeros 100 números primos

Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]

Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]

Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"

Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */
