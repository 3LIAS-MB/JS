/*---------------------------FUNCIONES ANONIMAS----------------------------------------------*/
//function start(){
//    return 'Starting...'
//}
//console.log(start())


// Una función anónima es simplemente una
// función que no tiene un nombre asociado. 
console.log(function(){ 
    return 'Starting...'
})

/**/

const button = document.createElement('button');
button.innerText = 'click me';

button.addEventListener('click', function() {
    alert('clicked')
})

document.body.append(button);