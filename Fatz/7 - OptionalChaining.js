const person = {
    name: 'ryan',
    address: {
        city: london
    },
    location: {}
}

// Si el 'location' existe, accede a su valor city
// Si es que existe, si no da 'undifined' pero no error...
console.log(person.location?.city)
// console.log(person.location.city) -> undifined porque location no existe

