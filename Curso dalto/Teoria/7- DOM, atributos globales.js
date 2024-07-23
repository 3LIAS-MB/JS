"27) DOM -> DOCUMENT OBJECT MODE"
// Nodo -> Un nodo en el DOM es cualquier etiqueta del cuerpo, como
// un párrafo, el mismo body o incluso las etiquetas de una lista.

// -> Document: el nodo document es el nodo raiz,
// a partir del cual derivan el resto de nodos.
// -> Element: nodos definidos por etiquetas html.
// -> Text: el texto dentro de un nodo element se 
//considera un nuevo nodo hijo de tipo text (texto).
// -> Attribute: los atributos de las etiquetas definen nodos,
// (en Javascript no los veremos como nodos, sino como
// información asociada al nodo de tipo element)

// -> Comentarios y otros: los comentarios y otros elementos como las
// declaraciones doctype en cabecera de los documentos HTML generan nodos

"-------------------- 28) Metodos de Selección de elementos ---------------------------------"

/*getElementById(id): Este método permite seleccionar un elemento HTML por su atributo id. Devuelve una referencia al primer elemento con el id especificado. Por ejemplo*/

const parrafo = document.getElementById("parrafo");
document.write(parrafo) // [object HTMLParagraphElement]
//----------------------------

/*getElementsByClassName(className): Este método permite seleccionar elementos HTML por su clase.
Devuelve una colección HTML de elementos que tienen la clase especificada. Puedes acceder a los elementos por índice, por ejemplo:*/

const elementos = document.getElementsByClassName('miClase');
const primerElemento = elementos[0];
//----------------------------

/*getElementsByTagName(tagName): Permite seleccionar elementos
HTML por su etiqueta (como 'div', 'p', 'a', etc.).

Devuelve una colección HTML de elementos que coinciden con la etiqueta especificada.
Al igual que getElementsByClassName, puedes acceder a los elementos por índice.*/

parrafo = document.getElementsByTagName("p")
document.write(parrafo) // [object HTMLCollection]
document.write(parrafo[0]) // [object HTMLParagraphElement] -> Es un objeto
//----------------------------

/*querySelector(selectors): Permite seleccionar un elemento HTML usando selectores CSS.
Devuelve EL PRIMER ELEMENTO que coincide con el selector especificado. Por ejemplo:*/

// Selecciona una clase [object HTMLParagraphElement]
const elemento = document.querySelector('.claseEspecifica'); 
//----------------------------

/*querySelectorAll(selectors): Todos los elementos que coinciden con el selector CSS*/
const parrafo1 = document.querySelectorAll(".claseEspecifica");
// [object NodeList] -> Lista de nodos. Puedo acceder
// a cualquiera de esos nodos por el indice "parrafo1[0]"
document.write(parrafo1) 

"------------------------------- 29) METODOS DE CREACIÓN ----------------------------------"
// createElement: Crea un nuevo elemento HTML.
const newElement = document.createElement('div');
//----------------------------

// createTextNode: Crea un nuevo nodo de texto.
const newText = document.createTextNode('Hello, World!');

"------------------------------- 30) METODOS DE EVENTOS ----------------------------------"
// addEventListener: Registra un controlador de eventos.
// Reemplaza a onClick en JavaScript
element.addEventListener('click', () => { console.log('Clicked!'); });

// removeEventListener: Elimina un controlador de eventos.
element.removeEventListener('click', handleClick);

"-------------------29) Metodos para Definir, obtener y Eliminar atributos.-----------------"

//- setattribute( ) - Modifica el valor de un atributo. Si "text" lo dejo vacio, sera un atributo vacio
var rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type", "text") // el input original cambio de range a text
//----------------------------

//- getattribute() - obtiene el valor de un atributo
var rangoEtario = document.querySelector(".rangoEtario");
document.write(rangoEtario.getAttribute("type")) // range

valorDelAtributo = rangoEtario.getAttribute("type")
document.write(valorDelAtributo) // range
//----------------------------

//- removeAttribute( ) - Remueve el valor de un atributo
const rangoEtario = document.querySelector(".rangoEtario");
valorDelAtributo = rangoEtario.removeAttribute("type") // Elimina completamente el atributo "type"
//----------------------------

"-------------------- 30) Atributos globales -> Contienen todos los elementos en comun -------------"

// - class - lista de clases del elemento separadas por espacios
// - contentEditable - indica si el elemento puede ser modificable por el usuario (bool)
var titulo = document.querySelector(".titulo")
titulo.setAttribute("contentEditable",  "true") // Permite modificar esa parte de la pagina
//----------------------------

// - dir - indica la direccionalidad del texto
var titulo = document.querySelector(".titulo")
//"lrt: izquierda a derecha (defect) - rtl: derecha a izquierda"                 
titulo.setAttribute("dir", "lrt") 
//----------------------------

// - hidden - indica si el elemento aún no es, o ya no es, relevante.
var titulo = document.querySelector(".titulo")
titulo.setAttribute("hidden", "true") //  este elemento se oculta
//----------------------------

// - tabindex - indica si el elemento puede obtener un focus de input
var titulo = document.querySelector(".titulo")
titulo.setAttribute("tabindex", "0") // esto se aprecia mas en etiquetas html pero es la priridad de TAB
//----------------------------

// - title - Contiene un texto con información relacionada al elemento al que pertenece.
var titulo = document.querySelector(".titulo")
titulo.setAttribute("title", "jajaja xdxd")
//----------------------------

// - style - Contiene declaraciones de estilo CSS para ser aplicadas al elemento.

