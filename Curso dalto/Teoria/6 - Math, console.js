// 22) objeto Math - Básico
// METODOS

// - sgrt() - Devuelve la raíz cuadrada positiva de un número.
var numero = 25;
var raizCuadrada = Math.sqrt(numero);
console.log(raizCuadrada); // Imprime 5 (la raíz cuadrada de 25 es 5)

// - cort() - Devuelve la raíz cúbica de un número.
var numero = 8;
var raizCubica = Math.cbrt(numero);
console.log(raizCubica); // Imprime 2 (la raíz cúbica de 8 es 2)

// - max( ) - Devuelve el mayor de cero o más números.
var numeros = [4, 9, 2, 17, 5];
var maximo = Math.max(...numeros);
console.log(maximo); // Imprime 17 (el número más grande en la lista)

// - min() - Devuelve el más pequeño de cero o más números.
var numeros = [4, 9, 2, 17, 5];
var minimo = Math.min(...numeros);
console.log(minimo); // Imprime 2 (el número más pequeño en la lista)

// - random() - Devuelve un número pseudo-aleatorio entre 0 y 1.
var numeroAleatorio = Math.random();
console.log(numeroAleatorio); // Imprime un número entre 0 y 1

// - round( ) - Devuelve el valor de un número redondeado al número entero más cercano.
var numero = 4.7;
var numeroRedondeado = Math.round(numero);
console.log(numeroRedondeado); // Imprime 5 (el número redondeado más cercano)

// - fround() - Devuelve la representación flotante de precisión simple más cercana de un número.
var numero = 4.7;
var flotanteSimple = Math.fround(numero);
console.log(flotanteSimple); // Imprime la representación flotante de precisión simple

// - floor() - Devuelve el mayor entero menor que o igual a un número.
var numero = 4.7;
var enteroMenor = Math.floor(numero);
console.log(enteroMenor); // Imprime 4 (el entero menor más cercano)

// - trunc () - Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.
var numero = 4.7;
var parteEntera = Math.trunc(numero);
console.log(parteEntera); // Imprime 4 (la parte entera del número)

// PROPIEDADES

// PI - Ratio de la circunferencia de un circo respecto a su diámetro, aproximadamente 3.14159.
// - SQRT1_2 - Raiz cuadrada de 1/2; Equivalentemente, 1 sobre la raiz cuadrada de 2, aproximadamente 0.707.
// - SQRT2 - Raiz cuadrada de 2, aproximadamente 1.414.


// - E - Constante de Euler, la base de los logaritmos naturales, aproximadamente 2.718
// - LN2 - Logaritmo natural de 2, aproximadamente 0.693
// - LN10 - Logaritmo natural de 10, aproximadamente 2.303
// - LOG2E - Logaritmo de E con base 2, aproximadamente 1.443
// - LOG10E - Logaritmo de E con base 10, aproximadamente 0.434

//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
/*Funciones de registro*/

// - assert() - Aparece un mensaje de error en la consola si la afirmación es falsa.
// si la afirmación es verdadera, no aparecerá nada. (NO ESTANDAR)
console.assert(5 < 4) // Assertion failed

// - clear( ) - limpia la consola
console.clear() 

// - error() - Muestra un mensaje de error en la Consola Web.
console.error("Hola, qué hiciste?XD")

// - info() - Emite un mensaje informativo a la Consola Web. En Firefox y chrome, se
//muestra un pequeño icono "j" junto a estos elementos en el registro de la Consola Web
console.info("XD") // más informativo

// - log() - Muestra un mensaje en la consola web (o del intérprete JavaScript).
console.log("XD") // para depurar

// - table() - Esta función toma un argumento obligatorio: data, que debe ser un array o
// un objeto, y un parámetro adicional: columns y nos muestra una tabla en consola
console.table([4,4,4,4,4]) // Tiene que ser un array o un objeto

// - warn( ) - Imprime un mensaje de advertencia en la Consola Web.
console.warn("Capo, venis bien pero...")

// - Idir() - Despliega una lista interactiva de las propiedades del objeto JavaScript especificado. [NO ESTANDAR]
console.dir([4,5,6,7,8,9,])

/*Funciones de conteo*/

// - count() - Registra el número de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta.
console.count()

// - countReset ( ) - Resetea el contador console.count( )
console.countReset()

/*Funciones de agrupación.*/

// - group() - Crea un nuevo grupo en línea en el registro de la consola web.
console.group("frutas") // frutas el es el nombre del subgrupo al que le podemos  añadir cosas 

// - grupEnd() - Remueve un grupo en linea en el registro de la consola web.
console.groupEnd()

// - groupcollapsed() - Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo.
console.groupCollapsed() // Lo mosmo  que "grup" pero empieza cerrado


/*Funciones de temporizador*/

// time() - Inicia un temporizador
console.time()

// timeLog() Detiene el temporizador
console.timeLog() // Cuando tiempo paso desde que se inicio

// timeEnd() Registra el valor actual de un temporizador
console.timeEnd() // Termina el temporizador

/*APLICAR ESTILO A LA CONSOLAXD*/

console.log("%RANCIO", "color: red; background: green; padding: 25px; border 3px solid blue") // Tiene limitaciones (width, display flex)
 