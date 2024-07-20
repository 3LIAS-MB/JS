/*-----------------------------------------------METODO DE ARRAYS------------------------------------------------------------*/
// TRANSFORMADORES: Modifica completamente el ARRAY principal, por lo que no es necesario crear una nueva variable porque se puede
// usar la misma, depende del caso

// pop - Elimina el ultimo elemento del Array y nos lo muestra

var nombres = ["Pedro", "Maria", "Jorge"];

var resultado = nombres.pop()

document.write(resultado); // Jorge | Esto quedaria como: (2) ['Pedro', 'Maria']

// shift() Elimina el primer elemento de un Array y lo devuelve

var nombres = ["Pedro", "Maria", "Jorge"];

var resultado = nombres.shift()

document.write(resultado); // Pedro | Esto quedaria como: (2) ['Maria', 'Jorge']

/* push() - El método push() en JavaScript se utiliza para agregar uno o más elementos al final de un arreglo (array).
Modifica el arreglo original al añadir los elementos especificados y devuelve la nueva longitud del arreglo después de la adición.*/

var numeros = [1, 2, 3];
numeros.push(4); // Agrega el número 4 al final del arreglo
longitud = numeros.push(5, 6); // Agrega los números 5 y 6 al final del arreglo

document.write(longitud) // Imprime 6
console.log(numeros); // Imprime [1, 2, 3, 4, 5, 6]


// - reverse() - Invierte el orden de los elementos de un array.

var nombres = [1, 2, 3, 4, 5]

var resultado = nombres.reverse();

document.write(resultado); // [5, 4, 3, 2, 1]

// - unshift() - Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

var nombres = [1, 2, 3, 4, 5]

var resultado = nombres.unshift(-2, -1, 0);

document.write(resultado); // [-2, -1, 0, 1, 2, 3, 4, 5]

// - sort() - Ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

var nombres = [1, 5, 2, 4, 7, 3, 5]
var nombres = ["a", "c", "b", "d"]

var resultado = nombres.sort();

document.write(resultado); // [1, 2, 3, 4, 5, 5, 7]
document.write(resultado); // ["a", "b", "c", "d"]

// - splice() - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

var nombres = [1, 2, 3, 4, 5]

// Eliminando
var resultado = nombres.splice(1, 3);
document.write(resultado); // [1, 4, 5]

// Reemplazando
var resultado = nombres.splice(1, 3, "Roberto");
document.write(resultado); // [1, "Roberto", 4, 5]

// Agregando sin eliminar/remplazar
var resultado = nombres.splice(-1, 0, "Roberto");
document.write(resultado); // [Roberto, 1, 2, 3, 4, 5]
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------ACCESORES: DEVUELVE UN NUEVO ARRAY, EL ORIGINAL NO SE MODIFICA----------------------------------

// - join() - Se utiliza en arrays para combinar todos los elementos del array en una sola cadena de texto.
// Este método toma un argumento opcional que especifica el separador que se utilizará entre cada elemento
// del array al construir la cadena resultante.

var nombres = [1, 5, 2, 4, 7, 3, 5] // (7) [1, 5, 2, 4, 7, 3, 5]

var resultado = nombres.join("-"); // Como parametro va la forma en la que queremos separar el Array

document.write(resultado); // '1-5-2-4-7-3-5'

// - slice() - Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin noincluido).

var nombres = [1, 5, 2, 4, 7, 3, 5]

var resultado = nombres.slice(0, 4);
var resultado = nombres.slice(0); // Desde el inicio hasta el final

document.write(resultado); // '1, 5, 2, 4'

// - Metodos ya vistos en cadenas: tostring(), indexof (), lastIndexof (), includes ()

// -----------------------------------------------------------------------------------------------------------------------
// DE REPETICIÓN: Estos metodos funcionan como un bucle-------------------------------------------------------------------

// - filter() - Se utiliza en arrays para crear un nuevo array que contiene todos los elementos del array original que
// cumplen con cierta condición definida por una función de prueba. En otras palabras, filter() se utiliza para filtrar
// elementos de un array según un criterio específico y crear un nuevo array con esos elementos filtrados.

//SINTAXIS -> Recibe como parametro una funcion
array.filter(funcionDePrueba(elemento, índice, array));

//EJEMPLO
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Imprime [2, 4, 6]

// ForEach - Es lo mismo que el "filter" pero no te deja poner una condicion
//------------------------------------------------------------------------------------------------------------------------- 
