/*--------------------------------------------------Crear ARRAY -> Los array no son primitivos, son ob---------------------------------------------------
Listas en Python -> Arrays en JavaScript: En JavaScript, los arrays son estructuras de datos que almacenan una secuencia ordenada de elementos.
Los arrays pueden contener elementos de diferentes tipos y se declaran utilizando corchetes []. Aquí tienes un ejemplo de cómo se crean y utilizan arrays en JavaScript:*/

// Creación de un array en JavaScript
const frutas = ['manzana', 'banana', 'naranja'];

// Acceso a elementos del array
console.log(frutas[0]); // Imprime "manzana"
console.log(frutas[1]); // Imprime "banana"

/**/

let Frutas = ["manzana", "banana", "pera"] /*El "array" y sus posiciones ya están declaradas.*/

document.write(frutas[3]) /*En caso de "undefined" es porque el array está declarado pero lo posición no esta definida*/

/*ARRAY ASOCIATIVO -> Es un objeto*/

/*En JavaScript, los objetos son estructuras clave-valor que se utilizan para almacenar y acceder a datos.
  Los objetos pueden contener propiedades que tienen nombres (claves) y valores asociados. Aquí tienes un
  ejemplo de cómo se crean y utilizan objetos en JavaScript:*/

let pc1 = {
    nombre: "EliasPC",
    procesador: "Ryzen 5 5600g",
    ram: "16GB",
    espacio: "480GB"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
        el procesador es: ${procesador} <br>
        la memoria ram es: ${ram} <br>
        el espacio de disco es: ${espacio}`;

document.write(frase);

/*También se puede acceder con el nombre del array y un punto indicando el atributo*/

/*frase = `el nombre de mi PC es: ${pc1.nombre} <br>
        el procesador es: ${pc1.procesador} <br>
        la memoria ram es: ${pc1.ram} <br>
        el espacio de disco es: ${pc1.espacio}`;*/

/**/
/*--------------------------------------------------Bucles e iteración-------------------------------------------*/
/*Sentencia WHILE----------------------*/

let numero = 0;

while (numero < 6) {
        numero ++;
        
        document.write(numero + "<br>") /*1, 2, 3, 4, 5, 6 -> en vertical*/
}

/*Sentencia DO WHILE------------------*/

let numero1 = 0;

do { /*Primero lo ejecuta almenos una vez*/
    numero1++;
    document.write(numero1 + "<br>")
}

while (numero1  <= 6) /*Y después se pregunta*/

/*Sentencia BREAK---------------------*/

let numero2 = 0

while(numero2 < 100) {
    numero2++;
    document.write(numero2);
    if (numero2 == 10) {
        break;
    }
}

/*Sentencia FOR-----------------------*/

for (let i = 0; i < 20; i++) { /*"i" en este bloque es una variable regional/local, es decir, fuera del "for" no existe*/

    document.write(i + "<br>")/*0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 -> en vertical */

    if (i == 12) { /*Si no queremos que se muestre el "12" simplemente ponemos la condicion antes que "document.write"*/
        break;
    }
}

/*Declaramos e inicializamos dentro del bucle for (arriba es lo mismo pero con suma) */

for (let i = 6; i >= 0; i--) {

    document.write(i + "<br>")/*6, 5, 4, 3, 2, 1, 0 -> en vertical */
}

/*Podemos declarar "i" afuera y la validamos dentro del for*/

let i;

for (i = 6; i >= 0; i--) {

    document.write(i + "<br>") /*6, 5, 4, 3, 2, 1, 0 -> en vertical*/
}

document.write(i) /*-1*/

/*Podemos declarar e inicializar "variable" afuera y usarla dentro del bucle*/

let variable = 6;

for (i; i >= 0; i--) {

    document.write(i + "<br>") /*6, 5, 4, 3, 2, 1, 0 -> en vertical*/
}

document.write(i) /*-1*/

/*Sentencia CONTINUE--------------------*/

for (let i = 0; i < 15; i++) {

    if (i == 12) { 
        continue; /*Vuelve a iterar salteandose la parte de mostrar el numero "12*/
    }

    document.write(i + "<br>")/*0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15 -> en vertical */

}

/*Sentencia FOR IN y FOR OF-----------------*/

let animales = ["gato", "perro", "tiranosaurio rex"];
animales.edad = 20  /*revisar*/

for (animal in animales){ /*In: te muestra los indices*/
    document.write(animal + "<br>") /*0, 1, 2, edad*/
}

document.write("<br>")

for (animal of animales){ /*Of: directamente nos muestra el valor*/
    document.write(animal + "<br>") /*gato, perro, tiranosaurio rex, 20*/
}

document.write(animales.edad) 

/*Sentencia LABEL--------------------------*/

array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

estoEsUnLabel: /*Este bloque iterativo se llama "estoEsUnLabel"*/
for (let array in array2) {
    if (array ==  2) {
        for (let array of array1) {
            document.write(array + "<br>"); /*maria, josefa, roberta*/
            break estoEsUnLabel;
        }
    } else {
        document.write(array2[array] + "<br>"); /*pedro, marcelo -> josefina*/
    }
}

/*------------------------------------------------------FUNCIONES----------------------------------------------------*/
/*DISTINTAS FORMAS DE CREAR UNA FUNCION:*/

/**/

function saludar(){
    respuesta = prompt("Hola, Elias, ¿Como estuvo tu dia?");
    if (respuesta == "bien") {
        alert("Me alegro!")
    } else {
        alert("una pena")
    }
}

saludar()

/*Asignandole una variable a la funcion (var)*/

var saludar = function(/*parametro*/) {
    respuesta = prompt("Hola, Elias, ¿Como estuvo tu dia?");
    if (respuesta == "bien") {
        alert("Me alegro!")
    } else {
        alert("una pena")
    }
}

saludar()

/*Asignandole una variable a la funcion (const)*/

const saludar = function(/*parametro*/) {
    respuesta = prompt("Hola, Elias, ¿Como estuvo tu dia?");
    if (respuesta == "bien") {
        alert("Me alegro!")
    } else {
        alert("una pena")
    }
}

saludar()

/*Funcion flechas*/

const saludar = ()=> { /**/
    respuesta = prompt("Hola, Elias, ¿Como estuvo tu dia?");
    if (respuesta == "bien") {
        alert("Me alegro!")
    } else {
        alert("una pena")
    }
}

saludar()

/*RETURN Y PARAMETROS -> Tener en cuenta el SCOPE*/
/*IMPORTANTE: Siempre poner el "let" a la variable, porque
 si no se vuelve una variable por defecto global (var)*/

function saludar() {
    return "todo okay";
    alert("hola") /*No se muestra porque el return devuelve un resultado y corta la funcion*/
}

let saludo = saludar();
document.write(saludo)

/**/

function suma(num1, num2) {
    let res = num1 + num2;
    return res;
}

let num1 = parseInt(prompt("Primer numero: ")); /*Lo convierto a número entero*/
let num2 = parseInt(prompt("Segundo numero: "));

let resultado = suma(num1, num2);
alert(resultado);

/**/

function saludar(nombre){
    let frase = `Hola, ${nombre}, ¿cómo estás?`
    return frase
}

alert(saludar("XD")) /*Muestra en pantalla*/
document.write(saludar("XD")) /*Escribe en pantalla*/


