//Ejercicio #1: Ciclo de un triángulo
/*Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:
#
##
###
####
#####
######
#######
Código:*/
let acumulador = "#";
for (let i = 1; i <= 7; i++) {
  console.log(acumulador);
  acumulador += "#";
};

//Ejercicio #2: FizzBuzz
/*Escriba un programa que use console.log para imprimir todos los números del 1 al 100,  con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz".
Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números que sean divisibles entre 3 y 5 (Y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos). (Esta es en realidad una pregunta de entrevista que se ha dicho elimina un porcentaje significativo de candidatos a programadores. Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir).
Código:*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  };
}

//Ejercicio #3: Tablero de ajedrez
/*Escribe un programa que cree un string que represente una cuadrícula de 8 x 8, usando caracteres de nueva linea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un caracter "#". los caracteres deberían de formar un tablero de ajedrez.
Pasar este string a console.log debería mostrar algo como esto:
 # # # #
# # # # 
 # # # # 
# # # # 
 # # # # 
# # # # 
 # # # # 
# # # # 
Cuando tengas tu programa que genere este patrón, define una vinculación tamaño = 8 y cambia el programa para que funcione con cualquier tamaño dando como salida una cuadrícula con el alto y ancho dados.
Código: */


function medirMedidaDeTablero(medida) {
  let tablero;
  for (let i = 0; i < medida; i++) {
    if (i % 2 === 0) {
      tablero = " # # # #";
      console.log(tablero);
    } else if (i % 3 === 0 || i % 1 === 0 || i % 5 === 0 || i % 7 === 0) {
      tablero = "# # # # ";
      console.log(tablero);
    } else {
      console.log(i);
    }
  }
}

medirMedidaDeTablero(8);

//Ejercicio #4: Mínimo
/*El capítulo anterior introdujo la función estandar math.min que devuelve su argumento más pequeño. Nosotros podemos construir algo como eso ahora. Escribe una función min que tome dos argumentos y retorne uno.
Código: */

function retornarNumeroMenor(primerDato, segundoDato) {
  
  if (typeof primerDato === "number"
   && typeof segundoDato === "number" 
   && !Number.isNaN(primerDato) 
   && !Number.isNaN(segundoDato)) {

    return Math.min(primerDato, segundoDato);

  }

}

retornarNumeroMenor(10, 5);

//Ejercicio #5: Recursión
/* Hemos visto que el operador % (el operador de residuo) se puede usar para probar si un número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:
* Zero es par
* Uno es impar
* Para cualquier otro número N, su paridad es la misma que N - 2.
Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero positivo) y devolver un booleano.
Pruebalo con 50 y 75. Observa como se comporta con -1. Por qué? Puedes pensar en una forma de agreglar esto?
Código: */

const esPar = n => {

  if (Number.isNaN(n) || n < 0) console.log(`${n} no es número válido`);

  if (n === 0) {
    return true;
  } 
  
  if (n === 1) {
    return false;
  } 
  
  if (n % 2 === 0) {
    return true
  } else {
    return false;
  }

}

esPar(6);

//Ejercicio #6: Conteo de frijoles
/* Puedes obtener el N-enésimo carácter o letra, de un string escribiendo "string"[N]. El valor devuelto será un string que contiene solo un carácter (por ejemplo, "f"). El primer carácter tiene posición cero, lo que hace que el últio se encuentre en la posición string.length - 1. En otras palabras, un string de dos caracteres tiene una longitud de 2 y sus carácteres tendrán las posiciones 0 y 1.
Escribe una función contarFs que tome un string como su único argumento y devuelva un número que indica cuántos carácteres "F" en mayúsculas haya en el string.
Después, escribe una función llamada contarCaracteres que se comporte como contarFs, excepto que toma un segundo argumento que indica el crácter que debe ser contado (en lugar de contar solo caracteres "F" en mayúsculas).
Reescribe contarFs para que haga uso de esta nueva función.
Código: */

const contarFs = string => {
  
  let acumulador = 0;

  for (let f of string) {
    if (f === "F") acumulador++;
  }

  return acumulador;

}

contarFs("FFFffFfFFffffF");
// 7

const contarCaracteres = (string, caracter) => {
  let acumulador = 0;

  for (let i of string) {
    if (i === caracter) acumulador++;
  }

  return acumulador;
}

contarCaracteres("FFFffFfFFfffffffF", "f");
// 10

//Ejercicio #7: La suma de un rango
/* La introducción del libro aludía a lo siguiente como una buena forma de calcular la suma de un rango de números
console.log(suma(rango(1, 10)));
Escribe una función rango que tome dos argumentos (inicio y final) y retorne un array que contenga todos los números desde inicio hasta (e incluyendo final).
Luego, escribe una función suma que tome un array de números y retorne la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente retorna 55.
Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que indique el valor de "paso" utilizado para cuando construyas el array. Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiendo al comportamiento anterior. La llamada a la función rango(1, 10, 2) debería retornar [1, 3, 5, 7, 9]. Asegúrate de que también funcione con valores de pasos negativos para que rango(5, 2, -1) produzca [5, 4, 3, 2].
*/

// Rango
const rangO = (inicio, final) => {
  let conjunto = [];

  for (let i = inicio; i <= final; i++) {
    conjunto.push(i);
  }

  console.log(conjunto);
}

rangO(1, 10);

//Suma
const suma = conjunto => {
  
  let resultado = 0;

  for (let i of conjunto) {
    resultado += i;
  }

  return resultado;
}

suma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Rango con paso
const rango = (inicio, final, paso = 1) => {
  let conjunto = [];

  if (inicio > final) {

    for (let i = inicio; i >= final; i = i + (paso)) {
      conjunto.push(i);
    }

    return console.log(conjunto);

  }

  for (let i = inicio; i <= final; i = i + paso) {
    conjunto.push(i);
  }

  console.log(conjunto);
}

rango(1, 10, 2);

//Ejercicio #8: Revirtiendo un array
/*Los arrays tienen un método reverse que cambia el array invirtiendo el orden en que aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y produce un nuevo array que tiene los mismos elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el método reverse: modifica el array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.
Pensando en las notas acerca de los efectos secundarios y las funciones puras en el capítulo anterior, qué variante esperas que sea útil en más situaciones? Cuál corre más rápido?
*/

//Revertir Array
const revertirArray = array => {

  let nuevoArray = [];

  for (let i of array) {
    nuevoArray.unshift(i);
  }

  console.log(nuevoArray);
}

revertirArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Revertir Array en su lugar
const revertirArrayEnSuLugar = (array) => {

  let contador = array.length;

  for (let i = contador; i >= contador - (contador - 1); i--) {
    array.push(array[i - 1]);
  }

  let nuevoContador = array.length;

  console.log(array.slice(nuevoContador / 2));
}

revertirArrayEnSuLugar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Ejercicio #9: Una lista
/*Los objetos como conjuntos genéricos de valores, se pueden usar para construir todo tipo de estructuras de datos. Una estructura de datos común es la lista (no confundir con un array). Una lista es un conjunto anidado de objetos, con el primer objeto conteniendo una referencia al segundo, el segundo al tercero y así sucesivamente.
let lista = {
  valor: 1,
  resto: {
    valor: 2,
    resto: {
      valor: 3,
      resto: null
    }
  }
};
los objetos resultantes forman una cadena.
Algo bueno de las listas es que pueden compartir partes de una estructura. Por ejemplo, si creo dos nuevos valores {valor: 0, resto: lista} y {valor: -1, resto: lista} (Con lista refiriéndose a la vinculación definida anteriormente), ambos son listas independientes, pero comparten la estructura que conforma sus últimos tres elementos. La lista original también sigue siendo una lista válida de tres elementos.
Escribe una función arrayALista que construya una estructura de lista como el que se muestra arriba cuando se le da [1, 2, 3] como argumento. Tambiém escribe una función listaAArray que produzca un array de una lista. 
Luego agrega una función de utilidad preceder, que tome un elemento y una lista y creé una nueva lista que agrega el elemento al frente de la lista de entrada
, y posicion, que toma una lista y un número y retorne el elemento en la posición dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando no exista tal elemento.
Sin aún no lo haz hecho, también escribe una versión recursiva de posicion.
*/

/*1*/ function arrayALista(array) {
  let lista = {
    valor: 1,
    resto: {}
  };
  for (let i = 0; i < array.length; i++) {
    lista.resto = {
      valor: array[i],
      resto: {}
    };
  };
  console.log(lista);
}
arrayALista([1, 2, 3]);

/*2*/
let lista = {
  lunes: "María",
  martes: "Samantha",
  miercoles: "Jennifer",
  jueves: "Jessica",
  viernes: "Sara",
};
function listaAArray(lista) {
  return Object.keys(lista);
}
console.log(listaAArray(lista));

/*3*/
let miLista = {
  "Pasticho": "pasticho",
  "Pasas": "pasas",
  "Vino": "vino",
  "Ginebra": "Ginebra",
};
function posicion(miLista, numero) {
  let newArray = Object.keys(miLista);
  if (newArray.indexOf(numero)) {
    return newArray[numero];
  } else {
    undefined;
  }
}
console.log(posicion(miLista, 2));

function preceder(elemento, lista) {
  let nuevaLista = {
    item1: elemento,
  };
  return Object.assign(lista, nuevaLista);
};
console.log(preceder("nutella", miLista));

//Ejercicio #10: Comparación profunda
/*El operador == compara objetos por identidad. Pero a veces preferirás comparar los valores de sus propiedades reales.
Escribe una función igualdadProfunda que toma dos valores y retorne true solo si tienen el mismo valor o son objetos con las mismas propiedades, donde los valores de las propiedades sean iguales cuando comparadas con una llamada recursiva a igualdadProfunda.
Para saber si los valores deben ser comparados directamente (usa el operador == para eso) o si deben tener sus propiedades comparadas, puedes usar el operador typeof. Si produce "Object" para ambos valores, deberías hacer una comparación profunda. Pero tienes que toma una excepción tonta en cuenta:
debido a un accidente histórico, typeof null también produce "Object".
La función Object.keys será útil para cuando necesites revisar las propiedades de los objetos para compararlos.
 */

function igualdadProfunda(valor1, valor2) {
  if (valor1 == valor2) {
    return true;
  } else if (typeof valor1 == typeof valor2
    && Object.keys(valor1) === Object.keys(valor2)) {
    return true;
  } else {
    return false;
  };
}

//Ejercicio #11: Aplanamiento
/*
Use el método reduce en combinación con el método concat para 'aplanar' un array de arrays en un único array que tenga todos los elementos de los arrays originales.
*/

console.log([1, 2, 3, 4].reduce((a, b) => a - b))
// 10

[2, 3, 4, 5].reduce((a, b) => a + b).concat([2, 3]);

function aplanarArrays(array1, array2) {
  let resultadoArray1 = [];
  let resultadoArray2 = [];
  if (array1 !== undefined) {
    resultado1 = array1.reduce((a, b) => a + b);
    resultadoArray1.push(resultado1);
  }
  if (array2 !== undefined) {
    resultado2 = array2.reduce((a, b) => a + b);
    resultadoArray2.push(resultado2);
  }
  if (array1 !== undefined && array2 !== undefined) {
    return resultadoArray1.concat(resultadoArray2);
  } else {
    return resultadoArray1;
  }
}
aplanarArrays([2, 3, 4, 5], [2, 3]);
// [14, 5]

//Ejercicio #12: Tu propio ciclo
/*
Escriba una función de orden superior llamada ciclo que proporcione algo así como una declaración de ciclo for. Esta toma un valor, una función de prueba, una función de actualización y un cuerpo de función. En cada iteración, primero ejecuta la función de prueba en el valor actual del ciclo y se detiene si esta retorna falso. Luego llama al cuerpo de la función, dándole el valor actual. Y finalmente, llama a la función de actualización para crear un nuevo valor y comienza desde el principio.
Cuando definas la función, puedes usar un ciclo regular para hacer los ciclos reales.
*/

function ciclo(valorInicial, accion, limite, actualizacion) {
  let valorActual;
  if (prueba(valorInicial) !== false) {
    valorActual = prueba(valorInicial);
  }
  cuerpo(accion, valorActual);
  renovacion(limite, actualizacion, valorActual, accion);
}

function prueba(valor) {
  if (valor === false) {
    return false
  } else {
    return valor;
  }
}

let cuerpo = (accion, valor) => {
  accion(valor);
}
let renovacion = (limite, actualizacion, valor, accion) => {
  if (valor < limite) {
    valor += actualizacion;
    ciclo(valor, accion, limite, actualizacion)
  }
}
ciclo(1, console.log, 5, 1);
// 1
// 2
// 3
// 4
// 5

const numeroS = [1, 2, 3, 4, 5];
for (let numero of numeroS) {
  console.log(numero);
}
// 1
// 2
// 3
// 4
// 5

//Ejercicio #13: Cada
/*
De forma análoga al método some, los arrays también tienen un método every ("cada"). Este retorna true cuando la función dada devuelve verdadero para cada elemento en el array. En cierto modo, some es una versión del operador || que actúa en arrays, y every es como el operador &&.
Implementa every como una función que tome un array y una función predicado como parámetros. Escribe dos versiones, una usando un ciclo y una usando el método some
*/

function every(array) {
  let acumulador = 0;
  for (let numero of array) {
    acumulador += numero;
    if (acumulador % 2 !== 0) {
      return false;
    } else if (array[array.length - 1] % 2 === 0) {
      return true;
    }
  }
}
console.log(every([2, 4, 6, 8]));
// true

let numeros = [2, 4, 6, 8];
numeros.every(numero => numero % 2 === 0);
// true

//Ejercicio #14: Dirección de escritura dominante
/*
Escriba una función que calcule la dirección de escritura dominante en un string de texto. Recuerde que cada objeto de código tiene una propiedad direction que puede ser "ltr" (De izquierda a derecha), "rtl" (De derecha a izquierda), o "ttb" (Arriba a abajo).
La dirección dominante es la dirección de la mayoría de los caracteres que tienen un código asociado a ellos. Las funciones codigoCaracter y contarPor definidas anteriormente en el capitulo sean utiles aquí.
*/

//Funcionamiento de arrays y objetos

let unObjeto = {
  izquierda: 1,
  derecha: 2
};
console.log(unObjeto.izquierda);
delete unObjeto.izquierda;
console.log(unObjeto.izqueirda);
console.log("izquierda" in unObjeto);
console.log("derecha" in unObjeto);

let descripciones = {
  trabajo: "Fui a trabajar",
  "Toque un arbol": "Toque un arbol"
};

let miObjeto = {
  pizza: "lunes",
  pasta: "martes",
  ensalada: "miercoles"
};
console.log(Object.keys(miObjeto));
// ["pizza", "pasta", "ensalada"];

let objetoA = {
  a: 1,
  b: 2
};
Object.assign(objetoA, { b: 3, c: 4 });
console.log(objetoA);
// {a: 1, b: 3, c: 4}

//Convirtiendo la ecuación phi a JavaScript

function phi(tabla) {
  return (tabla[3] * tabla[0] - tabla[2] * tabla[1]) /
    Math.sqrt((tabla[2] + tabla[3]) * (tabla[0] + tabla[1]) * (tabla[1] + tabla[3]) * (tabla[0] + tabla[2]));
}
console.log(phi([76, 9, 4, 1]));
// 0.06859943405700354

// IndexOf y LastIndexOf

console.log([1, 2, 3, 2, 1].indexOf(2));
// 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// 3

//Slice y concat

console.log([0, 1, 2, 3, 4].slice(2, 4));
// [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// [2, 3, 4]
console.log([0, 1, 2, 3, 4].slice());
// [0, 1, 2, 3, 4]

function remover(array, indice) {
  return array.slice(0, indice).concat(array.slice(indice + 1));
}
console.log(remover(["a", "b", "c", "d", "e"], 2));
// ["a", "b", "d", "e"]

console.log("panadería".slice(0, 3));
// pan
console.log("panadería".indexOf("a"));
// 1
console.log("uno dos tres".indexOf("tres"));
// 8

//trim

console.log("   l o v e   ".trim());
//l o v e

//Split y join

let oracion = "Los pájaros secretarios se especializan en pisotear";
let palabras = oracion.split(" ");
console.log(palabras);
// (7)["Los", "pájaros", "secretarios", "se", "especializan", "en",
// "pisotear"]
console.log(palabras.join(". "));
// Los. pájaros. secretarios. se. especializan. en. pisotear

console.log("LA".repeat(3));
// LALALA

//Trigonometría con JS

function puntoAleatorioCirculo(radio) {
  let angulo = Math.random() * 2 * Math.PI;
  return {
    x: radio * Math.cos(angulo),
    y: radio * Math.sin(angulo)
  };
}
console.log(puntoAleatorioCirculo(2));
// {x: -1.2776780343441827, y: -1.5386808767754234}

//JSON

let string = JSON.stringify({
  ardilla: false,
  eventos: ["fin de semana"]
});
console.log(string);
// {"ardilla":false,"eventos":["fin de semana"]}
console.log(JSON.parse(string).eventos);
// ["fin de semana"]

//Functions

const cuadrado = function (x) {
  return x * x;
}
console.log(cuadrado(12));
// 144

const potenciA = function (base, exponente) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
    resultado *= base;
  }
  return resultado;
};
console.log(potenciA(2, 10));
// 1024

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z)
  // 60
}
// y no es visible desde aquí
console.log(x + z);
// 40

const dividirEnDos = numero => numero / 2;
let numero = 10;
console.log(dividirEnDos(100));
// 50
console.log(numero);
//10

//Lote de humus

const humus = function (factor) {
  const ingrediente = function (cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    console.log(cantidadIngrediente + " " + unidad + " de " + nombre);
  }
  ingrediente(1, "lata", "garbanzos");
  ingrediente(0.25, "taza", "tahini");
  ingrediente(0.25, "taza", "jugo de limón");
  ingrediente(1, "clavo", "ajo");
  ingrediente(2, "cucharada", "aceite de oliva");
  ingrediente(0.5, "cucharadita", "comino");
};
humus(2);
// 2 latas de garbanzos
// 0.5 taza de tahini
// 0.5 taza de jugo de limón
// 2 clavos de ajo
// 4 cucharadas de aceite de oliva
// 1 cucharadita de comino

function cuadrado(x) {
  return x * x;
}

console.log("El futuro dice:", future());

function future() {
  return "Nunca tendrán autos voladores";
}
//El futuro dice: Nunca tendrán autos voladores

//Arrow functions

const potencIA = (base, exponente) => {
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
    resultado *= base;
  }
  return resultado;
}
console.log(potencIA(2, 10));
// 1024

const cuadrado1 = (x) => { return x * x };
const cuadrado2 = x => x * x;
console.log(cuadrado1(5));
console.log(cuadrado2(5));
//25
//25

const bocinas = () => {
  console.log("Toot");
};
bocinas();
// Toot

//La pila

function saludar(quien) {
  console.log("Hola " + quien);
}
saludar("Harry");
console.log("Adiós");
//Hola Harry
//Adiós

function gallina() {
  return huevo();
}
function huevo() {
  return gallina();
}
console.log(gallina() + " vino primero.");
// Uncaught RangeError: Maximum call stack size exceeded

function menos(a, b) {
  if (b === undefined) {
    return -a;
  } else {
    return a - b;
  }
}

console.log(menos(10));
// -10
console.log(menos(10, 5));
// 5

/*function potencia(base, exponente = 2) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
    resultado *= base;
  }
  return resultado;
}*/

console.log(potencia(4));
// 16
console.log(potencia(2, 6));
// 64

function envolverValor(n) {
  let local = n;
  return () => local;
}

let envolver1 = envolverValor(1);
let envolver2 = envolverValor(2);
console.log(envolver1());
// 1
console.log(envolver2());
// 2

function multiplicador(factor) {
  return numero => numero * factor;
}
let duplicar = multiplicador(2);
console.log(duplicar(5));
// 10

let potencia = (base, exponente) => {
  if (exponente == 0) {
    return 1;
  } else {
    return base * potencia(base, exponente - 1);
  }
}
console.log(potencia(2, 3));
// 8

function encontrarSolucion(objetivo) {
  function encontrar(actual, historia) {
    if (actual == objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    } else {
      return encontrar(actual + 5, (historia + "5")) ||
        encontrar(actual * 3, (historia + "3"));
    }
  }
  return encontrar(1, "1");
}
console.log(encontrarSolucion(24));

function imprimirInventarioGranja(vacas, pollos) {
  let stringVaca = String(vacas);
  while (stringVaca.length < 3) {
    stringVaca = "0" + stringVaca;
  }
  console.log(stringVaca + " vacas");
  let stringPollo = String(pollos);
  while (stringPollo.length < 3) {
    stringPollo = "0" + stringPollo;
  }
  console.log(stringPollo + " pollos");
}
imprimirInventarioGranja(7, 11);

function imprimirEtiquetaAlcochadaConCeros(numero, etiqueta) {
  let string = String(numero);
  while (string.length < 3) {
    string = "0" + string;
  }
  return string
}
function imprimirInventarioGranja(vacas, pollos, cerdos) {
  imprimirEtiquetaAlcochadaConCeros(vacas, "vacas");
  imprimirEtiquetaAlcochadaConCeros(pollos, "pollos");
  imprimirEtiquetaAlcochadaConCeros(cerdos, "cerdos");
}
imprimirInventarioGranja(7, 11, 3);

function alcocharConCeros(numero, amplitud) {
  let string = String(numero);
  while (string.length < amplitud) {
    string = "0" + string;
  }
  return string;
}
function imprimirInventarioGranja(vacas, pollos, cerdos) {
  console.log(`${alcocharConCeros(vacas, 3)} Vacas`);
  console.log(`${alcocharConCeros(pollos, 3)} Pollos`);
  console.log(`${alcocharConCeros(cerdos, 3)} Cerdos`);
}
imprimirInventarioGranja(7, 16, 3);


for (let i = 0; i < diario.length; i++) {
  let entrada = diario[i];
  // Hacer algo con la entrada
}

let diario = [2, 3, 4, 5, 6];
for (let entrada of diario) {
  console.log(`${entrada} en esta iteración`);
};
// 2 en esta iteración
// 3 en esta iteración
// 4 en esta iteración
// 5 en esta iteración
// 6 en esta iteración


let maximo = (...numeros) => {
  let resultado = -Infinity;
  for (let numero of numeros) {
    if (numero > resultado) {
      resultado = numero;
    }
  }
  return resultado;
}
maximo(9, 2, 23, -1, 11);