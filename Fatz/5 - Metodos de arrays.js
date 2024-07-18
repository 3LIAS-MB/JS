/*--------METODOS DE ARRAYS----------*/

const names = ['ryan', 'joe', 'maria'];

// for(let i=0; i < names.length; i++){
//     const element = names[i];
//     console.log(element)
// }

// ForEach espera como parametro una funcion
// Recorre cada uno de los elementos
names.forEach(function (name){
    console.log(name)
})

/*---------------------------------------*/

// Esta funcion map al memento de recorrer me produce
// el mismo resultado, pero no solo lo recorre
// si no que nos retorna un nuevo arreglo
const newNames = names.map(function (name){
    return `Hola ${name}`
})

console.log(names) // ['ryan', 'joe', 'maria']
console.log(newNames) // ['Hola ryan', 'Hola joe', 'Hola maria']

/*---------------------------------------*/
// Este metodo 'find' es para buscar un elemento
// Tambien recorre cada uno de los elementos
// solo que al momento de recorrer podemos colocar
// una codincion dentro de la funcion
const nameFound = names.find(function (name){
    if(name === 'joe'){
        return name;
    }
})
console.log(nameFound) // joe
/*---------------------------------------*/
// Filter nos permite crear un nuevo arreglo con
// elementos que hayamos filtrado, que cumplan una
// condicion. Es como un 'delete'
const nameFilter = names.filter(function (name){
    if(name !== 'joe'){
        return name;
    }
})
console.log(nameFilter) // (2) ['ryan', 'maria]
// Es una forma de quitar elementos de un arreglo
/*---------------------------------------*/
//El metodo 'concat' nos permite concatenar arreglos
const namess = ['ryan', 'joe', 'maria'];
const newNmaes = ['marcos', 'mario', 'john']

console.log(namess.concat(newNames));

/**/

// 'spread operator' -> también nos permite concatenar
// arreglos, es lo mismo que contact (mejor segun fazt)

console.log([...names, ...newNames]);   
// -> ['ryan', 'joe', 'maria', 'marcos', 'mario', 'john']
// NO ALTERA LOS ARREGLOS ORIGINALES    

/**/

const user = {
    name: 'ryan',
    lastname: 'ray'
}

const address= {
    street: 'main street 123',
    city: 'bogota'
}

const userInfo = {
    ...user,
    ...address
}
console.log(user) // {name: 'ryan', lastname: 'ray'}
console.log(address) // {street: 'main street 123', city: 'bogota'}
console.log(userInfo) // {name: 'ryan', lastname: 'ray', street: 'main street 123', city: 'bogota}

