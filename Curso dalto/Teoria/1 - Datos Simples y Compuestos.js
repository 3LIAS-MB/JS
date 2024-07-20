/*TIPOS DE DATOS*/

string = "cadena de texto";
number = 19;
booleano = true;

/*-------------------------------------------------Como se declaran las variables-------------------------------------------------- */

/*let: Al igual que "const", "let" también se utiliza para declarar variables, pero a diferencia de "const", las variables declaradas
con "let" pueden ser reasignadas a diferentes valores. Además, "let" tiene un alcance de bloque, lo que significa que la variable solo
es visible y accesible dentro del bloque en el que se declara.*/

let numero_ = 29; /*La declaramos e inicializamos en la misma linea. "let" se puede modificar*/
alert(numero_)

/**/

let contador = 0;
contador = 1; // Esto es válido

if (true) {
    let contador = 2; // Esta variable es diferente de la anterior (alcance de bloque)
    console.log(contador); // Imprime 2
}

console.log(contador); // Imprime 1 (la variable exterior no se ve afectada)

/*const: Se utiliza para declarar variables cuyo valor no cambiará después de su asignación inicial. Una vez que se asigna un valor a
una variable constante, no se puede reasignar a otro valor. Sin embargo, esto no significa que el valor sea inmutable si la variable
contiene un objeto o un arreglo, ya que las propiedades del objeto o los elementos del arreglo pueden cambiar.
Las variables declaradas con "const" deben ser inicializadas al momento de su declaración.*/

const nombre = dalto

/**/

const pi = 3.14;
// pi = 3.14159; // Esto dará un error, ya que no se puede reasignar pi

/*Antes de la introducción de "let" y "const", "var" era la única forma de declarar variables en JavaScript. Sin embargo, tiene un
comportamiento diferente en términos de alcance. Las variables declaradas con "var" tienen un alcance de función o global, lo que
significa que son visibles en toda la función en la que se declaran o en el ámbito global si se declaran fuera de funciones.
Debido a esta característica, a menudo se generaban problemas de alcance no deseado en programas más grandes.*/

var booleano = true /*'var' en desuso*/
alert(booleano)

/**/

var x = 10;

function ejemplo() {
    var x = 5;
    console.log(x); // Imprime 5
}

console.log(x); // Imprime 10

/*CASOS ESPECIALES -> Nos habla de que las variables no estan definidas o hay un error */

undefined; /*Nos dice que la palabra existe en el programa pero no tiene valor. No esta inicializada*/
null; /*Existe en el programa, pero temporalmente no tiene un valor, quiza mas adelante se le asigne uno*/
nan; /*Salta en pantalla cuando queremos mezclar tipos de datos, es un error, por ejemplo multiplicar un  "string" con un número*/

/*------------------------------------------------Formas de crear multiples variables--------------------------------------------------------------*/

let number, number1, number2;

number = 2
number = 9
number = 13
alert(number)
alert(number1)
alert(number2)

/**/
let numero1 = 23, numero2 = 29
alert(numero1)
alert(numero2)

/**/
let nombre1 = "Elias";
let nombre2 = "Vas";
let nombre3 = "A triunfar";

/*------------------------------------------PRUEBA CON "prompt"-----------------------------------------------------*/

prompt("Hola, rancio") /*Se muestra enpantalla con el texto y un input para rellenar*/

let nnombre = prompt("Decime tu nombre")

alert("Hola" + nnombre) /*Se muestra. Es como el 'print'xd*/


/*OPERADORES*/

/*Operadores de asignación*/
/*Abreviaciones*/

x = y /*Asignación*/
x += y /*Asignación de adicción*/
x -= y /*Asignación de sustracción*/
x *= y /*Asignación de multiplicación*/
x /= y /*Asignación de división*/
x %= y /*Asignación de resto*/
x **= y /*Asignación de exponenciación*/
x <<= y  /*Asignación de desplazamiento a la izquierda*/
x >>= y  /*Asignación de desplazamiento a la derecha*/
x >>>= y /*Asignación sin signo de desplazamiento a la derecha*/
x &= y /*Asignación AND*/
x ^= y /*Asignación XOR*/
x |= y /*Asignación* OR*/

/*Ejemplo*/
let nmro =  10;
nmro += 5;

document.write(numero)

/*------------------------------Operadores aritmèticos---------------------------------------*/

/*Suma. Necesita dos valores-------------------------*/

numero1 = 10
numero2 = 5

resultado = numero1 + numero2
alert(resultado) /*15*/

/*Resta. Necesita dos valores-----------------------*/
numero1 = 10
numero2 = 5

resultado = numero1 - numero2
alert(resultado) /*5*/

/*Incremento. Requiere un numero--------------------*/
numero1 = 10;
numero1++;
resultado = numero1;

alert(resultado)

/*Decrementos. Requiere solo un numero-------------*/

numero1 =10;
numero1--;
resultado = numero1; /*Primero resto "numero" y después se lo asigno a resultado*/
 
alert(resultado) /*9*/

/*-División. Requiere dos numeros-----------------*/

numero1 = 10;
numero2 = 10;
resultado = number1 / numero2

alert(resultado) /*1*/

/*Exponenciación. Requiere un valor--------------*/

numero1 = 10;
numero2 = 5;
resultado = numero1**numero2

alert(resultado) /*100000*/

/*Resto. Requiere dos valores------------------- */
numero1 = 10;
numero2 = 5;
resultado = numero1%numero2

alert(resultado) /*0*/

/*Unary -> Le cambiamos de signo-----------------*/
numero1 = 10;
resultado = -10;

alert(resultado) /*-10*/

/*----------------------------CONCATENACION EN JS------------------------------------*/
saludo = "Hola, pedro!";
pregunta = "¿Como estas?";

frase =  saludo + pregunta;

document.write(frase) /*Se escribe en pantalla "Hola, pedro! ¿Como estas?*/

/**/

numero1 = 5; 
numero2 = 8;
frase = "" + numero1 + numero2 /*Cuando detecta texto (string) convierte todo en una cadena de texto*/

document.write(frase) /*Se escribe en pantalla 58*/

/*Concat. Es un metodo de cadena, solo para los string. Si o si un string*/

numero1 = "53"; 
numero2 = 8;
frase = "" + numero1.concat(numero2)

document.write(frase) /*538*/

/*RECOMENDADA XD*/

nombre = "Elias"
frase2 = `soy ${nombre} y estoy caminando`; /*backtick*/

document.write(frase)

/*-------------------------OPERADORES (intermedio)-----------------*/

/*Comparación -> Los operadores de comparacion comparan dos expresiones y devuelven un valor Boolean que representa la relacion de sus valores*/

let numer1 = 23;
let numer2 = 13;

document.write(numer1 == numer2) /*False. No diferencia de los tipos de datos, puede ser igual un string "23" con el numero 23*/

/*Inegualdad -> Devuelve "true" si son diferentes y "false" si son iguales*/

let nmr1 = 23;
let nmr2 = 13;

document.write(numer1 != numer2) /*True*/

/*Estrictamente igual -> Tiene que ser el mismo tipo de dato y ademas el mismo valor*/

texto = "23";
numb = 23;

document.write(texto === 23) /*False*/

/*Si no es estrictamente igual -> Pregunta si no es el mismo tipo de dato y el mismo valor*/

texto = "Hola";
numb = 23;

document.write(texto !== 23) /*True*/

/*Operador de comparación -> Lo que hace es comparar dos valores y devuelve un valor booleano*/

n1 = 23;
n2 = 12

document.write(n1 > n2) /*True*/
document.write(n1 < n2) /*False*/
document.write(n1 <= n2) /*False*/
document.write(n1 >= n2) /*True*/

/**/

n1 = 23;
n2 = 12;
let resultado = n1 > n2;
 
document.write(resultado) /*True*/

/*Operadores logicos -> Nos devuelven un resultado a partir de que se cumpla ( o no) una condición, su  resultado
es booleano, y sus operadores son valores logicos o asimilables a ellos -> true or false*/

num1 = 24
num2 = 12

afirmacion1 = num1 > num2; // true 
afirmacion2 = num1 != num2; //true

document.write(afirmacion1 && afirmacion2) // true -> "&&": es una conjuncion en donde ambos valores tinen que ser true

/**/

num1 = 12
num2 = 24

afirmacion1 = num1 > num2; // false 
afirmacion2 = num1 != num2; // true

document.write(afirmacion1 || afirmacion2) // true -> "||": es una disyunción en donde almenos una tiene que ser verdadera

/**/

num1 = 12
num2 = 24

afirmacion2 = num1 != num2; // true

document.write(!afirmacion2) // false -> "!": me devuelve lo contrario

/*---------------------------CONDICIONALES----------------------------------------*/
nombre = "Pedro"

if (nombre == "Elias") {
    alert("Tu nombre es malardo");
}
else if (nombre == "Brauilio") {
    alert("tu nombre es buenarde");
}
else {
    alert("Tu nombre es otro"); // Sprintea esto
}