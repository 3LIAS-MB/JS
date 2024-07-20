/*Un joven  muy afortunado logró ganar el primer premio de la loteria..., exacto, estamos hablando del pobre al que
Cofla le dio una mano, este pobre decide hacer una fiesta  para festejar que salió de la pobreza, compró una 
maquina que solo deja pasar a los mayores de edad, entre otras cosas...

- Dejar pasar solo a los mayores de edad
- La primer persona que entre después de las 2am no paga*/

 let free = false

 const validarCliente = (time)=>{
    let edad = prompt("¿Cúal es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && !free) {
            alert("Podes pasar graits porque sos la primera persona después de las 2am");
            free = true;
        } else {
            alert(`Son las ${time}:00hs y podes pasar, pero tenes que pagar la entrada`);
        }
    } else {
        alert("Sos menor de edad por ende no podes pasar XD");
    }   
 };

 validarCliente(1)
 validarCliente(2)
 validarCliente(4)

/**/

 /*Cofla vuelve de la comisaria exhausto y por lo cansado que estaba se fue a dormir... Al otro día comienzan las clases
 del ciclo basico de la universidad (porque Clofa quiere ser programador y se inscribió en la Facu de Ingenieria). En
 su curso en total son 19 alumnos pero surgió un problema que complico un poco a la facultad: Se rompió el sistema de
 registro de asistencias y durante los proximos 30 dias no se podran hacer registros de datos de ningun tipo, por ende,
 las clases no podran comenzar hasta que esto este solucionado
 
 - Crear mini-sistema que nos permita registrar a los alumnos que estan presentes (P) y ausentes (A) en clase
 - Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nmro total de ausentes y presentes)
 - Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta reprobado*/

//  let cantidad = prompt("¿Cúantos alumnos son?: ")
//  let alumnosTotales = [];   

//  /*REGISTRA A LOS ESTUDIANTES*/

//  for (i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre del alumno: " + (i+1)), 0]; /**/
//  }

//  /*SUMA LAS ASISTENCIAS*/

//  const tomarAsistencia = (nombre, p) =>{
//     let presencia = prompt(nombre); /*Me muestra el nombre en el navegador para poner "p" o "a"*/
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales[p][1]++;
//     }
//  }
// /*MANDA COMO PARAMETRO AL EL NOMBRE DEL ALUMNO Y EL INDICE DE SU ELEMENTO*/

// for (i = 0; i < 5; i++) { /*Cuando llega a 5 ya no vuelve a iterar*/
//     for (alumno in alumnosTotales) {
//         tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}: <br>
//     Presentes: <b> ${alumnosTotales[alumno][1]} <br>
//     Ausentes: <b> ${30 - alumnosTotales[alumno][1]}`;

//     if (30 - alumnosTotales[alumno][1] > 18) { 
//     resultado += " -> REPROBADO POR INASISTENCIA <br><br>";
//     } else {
//     resultado += "<br><br>"
//     }            

//     document.write(resultado)
// }

/**/

const cantidad = parseInt(prompt("¿Cuántos alumnos son?: "));
const alumnosTotales = [];

// Registra a los estudiantes
for (let i = 0; i < cantidad; i++) {    
    const nombre = prompt(`Nombre del alumno ${i + 1}:`);
    alumnosTotales.push({ nombre, asistencias: 0 });
}

// Función para tomar asistencia
const tomarAsistencia = nombre => {
    const presencia = prompt(`Asistencia de ${nombre} (P/A):`).toLowerCase();
    if (presencia === 'p') {
        return true;
    }
    return false;
};

// Toma de asistencia durante 15 días
const diasDeClase = 15;
for (let dia = 0; dia < diasDeClase; dia++) {
    for (const alumno of alumnosTotales) {
        if (tomarAsistencia(alumno.nombre)) {
            alumno.asistencias++;
        }
    }
}

// Mostrar resultados
document.write('<h2>Resultados:</h2>');
alumnosTotales.forEach(alumno => {
    const ausentes = 15 - alumno.asistencias;
    let resultado = `${alumno.nombre}: <br>
    Presentes: <b>${alumno.asistencias}</b> <br>
    Ausentes: <b>${ausentes}</b>`;

    if (ausentes >= 5) {
        resultado += " -> REPROBADO POR INASISTENCIA <br><br>";
    } else {
        resultado += "<br><br>";
    }

    document.write(resultado);
});

/**/

const sumar = (num1, num2) => {
    return (num1 + num2);
}
const restar = (num1, num2) => {
    return num1 - num2;
}
const dividir = (num1, num2) => {
    return num1 / num2;
}
const multiplicar = (num1, num2) => {
    return num1 * num2;
}

alert("¿Qué operación desea realizar?");
let operacion = prompt("1-Suma, 2-Resta, 3-División. 4-Multiplicación");

if (operacion == 1) {
    let numero1 = parseInt(prompt("Primer numero para sumar: "));
    let numero2 = parseInt(prompt("Segundo numero para sumar: "));
    resultado = sumar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = parseInt(prompt("Primer numero para restar: "));
    let numero2 = parseInt(prompt("Segundo numero para restar: "));
    resultado = restar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = parseInt(prompt("Primer numero para dividir: "));
    let numero2 = parseInt(prompt("Segundo numero para dividir: "));
    resultado = dividir(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = parseInt(prompt("Primer numero para multiplicar: "));
    let numero2 = parseInt(prompt("Segundo numero para multiplicar: "));
    resultado = multiplicar(numero1, numero2);
    alert(`Tu resultado es: ${resultado}`);
}