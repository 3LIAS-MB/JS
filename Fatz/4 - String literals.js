const background = '#303030';
const color = 'white';
const isAuthorized = true;

// innerText: Propiedad que se utiliza para obtener
//  o establecer el texto visible de un elemento.
const button = document.createElement("button");
button.innerText = "click me";

const result = `estos son estilos ${color} ${background}` // ... while #303030

//button.style = `background: red; color: white;`
//button.style = `background: ${background}; color: ${color}`
button.style = `background ${isAuthorized ? 'red' : background}; color: ${color}`


// '?' -> operador ternario