/*------------------------------------------ARROW FUNCTIONS-------------------------------------------------*/

// Forma tipica para crear funciones en js
function addEventListener(x, y) {
  return x + y;
}

// Función flecha
const add = (x, y) => { // const add = function() {} -> es lo mismo
  return x + y;
}

/**/

const button = document.createElement('button');
button.innerText = 'click me';

const isAuthorized = true;
button.addEventListener('click', () => {
  if(isAuthorized){
      // El return termina el programa, eso nos ahorra
      // el 'else' si es que esta condicion no se cumple
      return alert("Está autorizado")
  }
  alert("No está autorizado")
})

document.body.append(button);

/*-----------------------------------INLINE ARROW FUNCTIONS-------------------------------------------------*/
const showText = () => {
  return 'Hola mundo';
}

console.log(showText());

/*Si no colamos llaves hay un return implicito
-> Esto es una funcion flecha en linea*/
const showMessage = () => 'Hola mundo';
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
// Si no coloco los corchetes js piensa que
// las llaves son el cuerpo de la funcion
// y no un objeto a devolver
const showObject = () => ({name_: 'ryan'})
// Forma larga
const showObjectt = () => {
  // devolviendo un OBJETO
  return {name2: 'ryan'};
}

console.log(showMessage()) // Hola mundo
console.log(showNumber()) // 22
console.log(showBoolean()) // true
console.log(showArray()) // (3) [1, 2, 3] 

console.showObject() // {name2, 'ryan'}