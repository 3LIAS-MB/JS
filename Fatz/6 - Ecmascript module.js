/**/
export function add(x, y){
    return x + y
}

export function multiply(x, y){
    return x + y
}

export const title = 'js for react'
export const active = true
export const points = [10, 20, 30]

// Exportando titulo por defecto
export default title;

/*---------------------------------*/

/*Asi se importa desde otro archivo*/

import {add, multiply, active, points, title} from "./add.js"

console.log(active, points, title)
console.log(add(20, 30))
console.log(multiply(20, 30))

// Importando titulo por defecto
import addModule from "./add.js";   
console.log(addModule);

