º/*--------------------------------------------------------------------------CLASES---------------------------------------------------------------------------------------------*/
/*TERMINOLOGIA

- Objeto: Una instancia de una clase
- Clase: define las caracteristicas del Objeto
- Propiedad: Una caracteristica del Objeto, como  el dolor
- Metodo: Una capacidad del  objeto, como caminar
- Constructor: Es un metodo llamado en el momento de la creacion de instancias*/

function Persona(nombre){
    this.nombre = nombre; /*Esto se conoce como variable/propiedad PUBLICA*/
    let dni = "123456" /*Esto es una variable/propiedad PRIVADA*/
    
    console.log(`Hola, soy ${nombre}`) /*Hola, soy Elias XD*/
}

let objetoPersona = new Persona("Elias XD"); /*Creamos una instancia. La variable que creamos la vamos a conocer como objeto (objetoPersona)*/

console.log(objetoPersona.nombre);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
/*Una clase es como crear una fabrica de objetos, le decimos crea este objeto y nos lo crea.
"Que pueda hacer estas cosas y que tenga estas cualidades", y nos lo crea.
Queres que la fabrica haga otra cosa? Creamos otra clase..., y asi, con varias cosas

Las clases en JavaScript son una forma de definir estructuras y comportamientos de objetos. 

- Objeto: Las clases crean objetos y los objetos son los resultados de la clase. Lo que crea la clase
- Clase: Define las caracteristicas del Objeto
- Propiedades: Particularidades, atributos, las caracteristicas que tiene nuestro objeto
- Metodo: Son las cosas que puede hacer nuestro objeto. Las acciones que podemos hacer
- Constructor: Es una particulridad que tienen las clases que es una funcion obligatoria.
Cuando creamos una clase tenemos que crear un constructor que nos va a construir las propiedades del objeto

- Y por ultimo, cuando finalizamos todo, se puede decir que la clase esta "instanciada". Estamos instanciando un objeto*/

/*Los metodos se crean dentro de la clase. Basicamente un metodo es  una funcion. Si creamos la
funcion dentro de la clase, se le dice metodo. Si creamos la funcion afuera se le dice funcion*/

class Animal { // Animal {especie: 'perro', edad: 5, color: 'rojo'}
    constructor(especie, edad, color){ // Los parametros que va a tener nuestra clase. Los parametros los defino YO.

        this._especie = especie; // "this" es el objeto que voy a crear, cuando pongo "this" lo que hago  es seleccionar el objeto
        this._edad = edad;       // Cuando pongo "this.color" le estoy diciendo que el objeto va a tener una caracteristica, una propiedad, un a tributo, esa propiedad/atributo va a ser "color"
        this._color = color;     // La propiedad puede ser el "tamaño" (las propiedades son como variables, estamos definiendo variables pero de un objeto (por eso son propíedades) y el valor "seria grande"

        this._info = `Soy ${this._especie}, tengo ${this._edad} años y soy de color ${this._color}`; /*Informacion acerca del animal*/
    }
    verInfo(){ // CREANDO UN METODO DE CLASE que se comparte entre todas las instancias de Aniamal | METODO: Cosas que puede hacer 
        document.write(this._info + "<br>") // "this" solo es cuando creamos metodos o propiedades dentro de la clase, cuando estamos afuera de este bloque el "this ya no sirve"
                                           // Cuando creamos metodos la  forma de acceder al objeto es con "this". Pero si creamos una funcion afuera deberiamos poner "ElObjeto.info" (perro.info)
    // saltar(){}
    // correr(){}  /*Todo el contenido necesario para realizar cada accion deberia estar dentro de las llaves (este codigo es sensillo)*/
    // saluar(){}
    } 
}   

// el "this.verInfo" no es necesario, porque ya se determina que es un metodo, el "this" solamente se pone para el constructor
// las funciones que creamos adentro del bloque no pueden ser funciones flechas "const verInfo()=> {". Las funciones flechas no pueden ser usadas para crear metodos en las clases
// "Cualquier funcion en JavaScript" (que no sea un arrow function) puede ser usada como funcion constructura
    
/*Instanciando esta clase. Creacion de instancias. Para crear una instancia de una clase, simplemente utilizamos el operador new seguido del nombre de la clase y los argumentos requeridos por el constructor.*/

// El "new" lo que hace es decir "bueno, vamos a crear una clase, vamos a instanciar un objeto. Perro va a ser un objeto de la clase "Animal"
const perro1 = new Animal("perro", 5, "rojo"); // -> Perro es un objeto de la clase animal
const gato1 = new Animal("gato", 2, "negro");     // La clase es como la idea de lo que puede llegar a ser, de lo que puede llegar a contener, etc. Y el objeto es el resultado, la instanciacion
const pajaro1 = new Animal("pajaro", 1, "verde"); // Hay un "reglamento" que define al perro (clase). Hay un ser que toma ese reglamento y se convierte en un perro (objeto)

// document.write(perro.info + "<br>") // Soy perro, tengo 5 años y soy de color rojo
// document.write(gato.info + "<br>") // Soy gato, tengo 2 años y soy de color negro
// document.write(pajaro.info + "<br>") // Soy pajaro tengo 1 años y soy de color verde

perro1.verInfo(); // Lo mismo que arriba, pero esto es una forma corta reduciendo codigo a partir de crear un metodo "verinfo(){". XD)
gato1.verInfo(); 
pajaro1.verInfo(); // Soy pajaro, tengo 1 años y soy de color verde

// document.write(perro) // [object Object]
// console.log(perro) // // Un objeto en JS es una estructura de datos formada por pares de clave, valor, que puede tener propíedades y metodos: Animal {especie: 'perro', edad: 5, color: 'rojo'}
// document.write(perro.color) -> estoy remplazando "this.color" por "perro.color" ya que el this es lo mismo y reemplazable

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*--------------------------------------------ABSTRACCION------------------------------------------------------------------------------------------------------------------------
La abstracción en JavaScript te permite enfocarte en lo que hace una entidad o función en lugar de cómo lo hace.
Esto facilita la comprensión, el mantenimiento y la colaboración en el código, ya que puedes interactuar con entidades y funciones
utilizando una interfaz más simple y entendible sin preocuparte por los detalles internos.

Un ejemplo común de abstracción en JavaScript es el uso de funciones. Cuando invocas una función, solo necesitas conocer su nombre y los argumentos que requiere, no necesitas
conocer todos los detalles de cómo se implementa internamente. La función actúa como una abstracción que encapsula una funcionalidad específica detrás de una interfaz simple.

Las clases también son una forma de abstracción. Definir una clase permite encapsular propiedades y métodos relacionados
en un solo lugar, ocultando la complejidad de cómo se almacenan los datos y cómo se implementan los métodos.*/

/*------------------------------------------MODULARIDAD-----------------------------------------------------------------------------------------------
La modularidad en programación se refiere a la práctica de dividir un programa en partes más pequeñas y manejables llamadas módulos.
+Cada módulo tiene una función específica y se centra en una tarea o conjunto de tareas relacionadas. La modularidad es una técnica
que busca mejorar la organización, la legibilidad y la mantenibilidad del código al dividirlo en componentes más simples y cohesivos*/
/*-----------------------------------------ECANPSULAMIENTO--------------------------------------------------------------------------------------------
El encapsulamiento es un concepto fundamental en la programación orientada a objetos que se refiere a la idea de agrupar
datos (atributos) y comportamientos (métodos) relacionados en un solo componente llamado objeto. Además, el encapsulamiento
también implica restringir el acceso directo a ciertos datos o métodos, lo que permite un control más preciso sobre cómo se utilizan y modifican.*/
/*------------------------------------------POLIMORFISMO--------------------------------------------------------------------------------------------
El polimorfismo es un concepto clave en la programación orientada a objetos que permite que objetos de diferentes clases puedan ser tratados como objetos de una clase común más genérica.
En otras palabras, el polimorfismo permite que diferentes clases puedan ser utilizadas de manera intercambiable cuando comparten una interfaz o un comportamiento común

Consiste en ver como un objeto se comporta de manera distinta ante el mismo metodo. Es la capacidad que tiene un objeto para comportarse distinto del resto por sus propiedades (el perro ladra y el gato mauya).*/


class Animal {
    constructor(especie, edad, color){

        this._especie = especie; 
        this._edad = edad;       
        this._color = color;    
        this._info = `Soy ${this._especie}, tengo ${this._edad} años y soy de color ${this._color}`;
    } /*Esto crea un objeto // Animal {_especie: 'perro', _edad: 5, _color: 'rojo', _info: 'Soy un perro, tengo 5 años y soy de color rojo}*/

    verInfo(){ 
        document.write(this._info + "<br>") 
    }
    // ladrar(){
    //     if (this._especie == "perro") {
    //         document.write("Waw! <br>");
    //     } else {
    //         document.write(`No puede ladrar, ya que es un ${this._especie}` + "<br>")
    //     }
    // }
}

/* La herencia es crear una clase que va a tomar todo lo que pueda hacer la otra clase y las
   propiedades de esa clase pero ademas agregarle algunas cosas nuevas. HERENCIA:*/

class Doge extends Animal {
    constructor(especie, edad, color, raza){ // Heredo 3 propiedades (el "verInfo" no) y agrego una nueva "raza"
        super(especie, edad, color);
        this.raza = raza
    }    
    static ladrar(){
        alert("¡Waaw!")
    }
    // Los setters son para modificarlo o definirlo
    set setRaza(newName) {
        this.raza = newName
    }
    // Los getters son para obtener un valor
    get getRaza() { 
        return this.raza
    } 
}

perro.setRaza  = "Pedro";
document.write(perro.setRaza) // "Pedro" -> ahora "raza" es tiene como valor "Pedro"
document.write(perro.getRaza) // "Pedro" -> obtiene el valor de "this.raza"

Doge.ladrar(); // ¡Waaw! -> A traves del nombre de la clase se puede acceder al metodo con STATIC, con la posibilidad de usar o NO los parametros segun (estos tienen que estar definidos)

const Perro = new Doge("perro", 5, "rojo", "doberman"); // Claramente heredo el metodo "verInfo" de la clase "Animal"
// Perro.verInfo() // Soy perro, tengo cinco años y soy de color marron.

const perro = new Animal("perro", 5, "rojo"); // No puedo tener un objeto con el mismo nombre de la clase, por eso lo cambie a "doge"
const gato = new Animal("gato", 2, "negro");    
const pajaro = new Animal("pajaro", 1, "verde"); // Soy pajaro tengo 1 años y soy de color verde (lo mismo para los de arriba)

// perro.ladrar(); // Waw! | estos tres ejemplos salen del metodo "ladrar" de la clase "Animal"
// gato.ladrar(); // No puede ladrar, ya que es un gato
// pajaro.ladrar(); // No puede ladrar, ya que es un pajaro

Perro.ladrar(); // ¡Waaw!
gato.ladrar(); //  TypeError: gato.ladrar is not a function. Esto pasa porque "gato" es de la clase Animal
perro.ladrar(); // //  TypeError: gato.ladrar is not a function. Esto pasa porque "perro" es de la clase Animal

// perro.verInfo(); Soy un perro, tengo 5 años y soy de color rojo
// gato.verInfo(); Soy un gato, tengo 2 años y soy de color negro
// pajaro.verInfo(); Soy un pajaero, tengo 1 años y soy de color verde