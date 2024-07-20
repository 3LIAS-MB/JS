/*-----------------------------------------------------------------------------METODOS STRING-------------------------------------------*/
// -------------------------------------------------BUSCAR CADENA Y QUE ME DEVUELVA ALGO---------------------------------------------------

/*- concat() - junta dos o mas cadenas y retorna una nueva*/

//let cadena = "Cadena de prueba";
var cadena = new String("Cadena de prueba") // lo de arriba es exactamente lo mismo que esto, en realidad asi nace un string
var cadena2 = "cadena 2";

resultado = cadena.concat(cadena2); // forma para concatenar

document.write(resultado); // Cadena de prueba cadena 2

/*startswith() - si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.*/

var cadena = "cadena de prueba";
var cadena2 = "cadena"

resultado = cadena.startsWith(cadena2);

document.write(resultado); //true

// - endswith() - si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.

var cadena = "cadena de prueba";
var cadena2 = "prueba"  

resultado = cadena.startsWith(cadena2);

document.write(resultado); //true

// - includes() - si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.

var cadena = "pedro es un tarado inmaduro";

resultado = cadena.includes("de");

document.write(resultado); //true

// - indexof() - devuelve el indice del primer caracter de la cadena, si no existe, devuelve - 1

var cadena = "pedro es un tarado tarado tarado tarado tarado";

resultado = cadena.indexOf("tarado");

document.write(resultado); //La palabra "tarado" comienza en la posicion 12 (el primer "tarado")
document.write(cadena[0] + cadena[1]) // pe

// - lastIndex0f() - devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve

var cadena = "pedro es un tarado tarado tarado tarado tarado";

resultado = cadena.lastIndexOf("tarado");

// ---------------------------------------------------------------------------------------------------------
//-----------------------------------MODIFICAR Y RELLENAR---------------------------------------------------
document.write(resultado); //La palabra "tarado" comienza en la posicion 40 (pero ultimo "tarado")
document.write(cadena[40] + cadena[41] + cadena[42]); //tar

// - padStart() [propuestas Estandar] - Rellenar cadena al principio con los caracteres deseados.

var cadena = "abc";

resultado = cadena.padStart(10, "12");  

document.write(resultado); // 1212121abc

// padEnd() [propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados

var cadena = "abc";

resultado = cadena.padStart(10, "12");  

document.write(resultado); // abc1212121


// repeat() - Devuelve la misma cadena pero repetida la cantidad de veces

var cadena = "123 ";

resultado = cadena.repeat(4);  

document.write(resultado); // 123 123 123 123

// ---------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
 
// split() - Dividae la cadena  como lo pidamos

var cadena = "Hola, como, estas ";

resultado = cadena.split("como");
resultado = cadena.split(",");

document.write(resultado); // Hola , estas
document.write(resultado); //  Array (3) = ['Hola', 'como', 'estas'] -> Hola, como, estas

// substring() - Nos retorna un pedazo de cadena que seleccionamos

var cadena = "ABCDEFG"

resultado = cadena.substring(0, 4); //-> Arranca en "0" y termina en la "3" (no cuenta el "4")

document.write(resultado) //ABCD

// toLoweCase() - Convierte una cadena a miniscula

var cadena = "A Maria Le Gusta La Joda"

resultado = cadena.toLowerCase();

document.write(resultado) // a maria le gusta la joda

// toUpperCase() - Convierte una cadena a mayuscula

var cadena = "A Maria Le Gusta La Joda"

resultado = cadena.toLowerCase();

document.write(resultado) // A MARIA LE GUSTA LA JODA

// toString() - Convierte a string un dato

var cadena = ["pedro", "matias"]

resultado = cadena.toString();

document.write(resultado) // 'pedro, matias'
document.write(resultado[0]) // p

// length - Me dice cuantos caracteres tiene mi cadena (propiedad de las cadenas, arrays, etc)

var cadena = "  pedro   "

resultado = cadena.length   ();

document.write(resultado) // 10

// trim() - Elimina los espacios en blanco al principio y final

var cadena = "  pedro   "

resultado = cadena.trim();

document.write(resultado) // pedro

// trimEnd() - Elimina los espacios en blanco al final de la cadena

var cadena = "   pedro   "

resultado = cadena.trim(); 

document.write(resultado) // "   pedro"

// trimStart() - Elimina los espacios en blanco al comienzo de una cadena

var cadena = "   pedro   "

resultado = cadena.trim(); 

document.write(resultado) // "pedro    "

// value0f() - Retorna el valor primitivo de un objeto string