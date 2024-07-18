/*-------------------MANIPULACIÓN DE DOM---------------------*/
// Puedo crear elementos y guardalos en constantes
// 'createElement' permite crear elementos de html
const title = document.createElement('h1');
// con 'innerText' colocalos un texto a mostrar 
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click'

/*------EVENT HANDLER -> MANEJADORES DE EVENETOS------------*/
/*Esto de añadir escuchas se lo conoce con el nombre de
'event handlers' o manejadores de eventos*/
button.addEventListener('click', function(){ // -> Funcion anonima
    console.log('Hola mundo')
    title.innerText = 'Texto actualizado con js'
    alert('se realizó un click')
    // Estos son eventos que los usuarios pueden
    // hacer con esta interfaz.
})

// 'append' espera un elemento creado con JS
document.body.append(title)
document.body.append(button)


/**/
const user = {
    name: 'Joe',
    age: 30
}

/*----------DESTRUCTURAR OBJETOS -> no solo funciona como parametro-------------
 * -----------en la funcion. si no en cualquier parte del codigo----------------*/

// Funcion que recibe un objeto y que lo estamos utilizando para
// poder devolver un elemento que va a ser utilizado en el DOM

// Decimos que esperamos un objeto que tenga la propiedad 'name'

//function printInfo({ name, age }) {
function printInfo(user){
    // Extraigo el valor 'name' y 'age
    // y lo guardo en una constante
    const {name, age} = user;
    console.log(name, age)

    // return '<h1>Hola ' + user['age'] + '</h1>';   
    return '<h1>Hola ' + user.name + '</h1>'; // -> accede al objeto a través de la notacion de punto 

    //return '<h1>Hola ' + name + '</h1>';
    //return '<h1>Hola ' + age + '</h1>'
}

console.log(printInfo(user)) // Se muestra en la consola
    

/*document.body.append(printInfo(user));*/  

//innerHTML -> lo que va a estas colando adentro del body
// el espera un String que sea un formato de HTML 
document.body.innerHTML = printInfo(user);
document.body.innerHTML = 'Texto añadido';