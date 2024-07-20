/*a) Terminó el primer semestre y cofla no sabe aprobará o no las materias, para lograrlo necesitará:
1) Contar con al menos el 90% de asistencia.
2) El promedio por materia debe ser de al menos 7 / 10.
3) Debe tener al menos del 75% de los trabajos prácticos entregados.

- Solicitar los datos y decirle si aprueba o no.
- Mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo)
- Todo esto estructurado como tabla*/

const materias = {
    fisica: [90,6,3, "fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    química: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
    }

const aprobo = ()=> {
    for (materia in materias) {

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias >= 90) {
            console.log("%c Asistencias en orden", "color:green");
        } else {
            console.log("%c Falta de asistencias", "color:red");
        }
        if (promedio >= 7) {
            console.log("%c Promedio en orden", "color: green");
        } else {
            console.log("%c Promedio desaprobado", "color: red");
        }
        if (trabajos >= 3){
            console.log("%c Trabajos practicos en orden", "color: green")
        } else {
            console.log("%c Faltan trabajos practicos", "color: red")
        }
    }
}

aprobo()

/**/

let tp = "100 minutos hacer trabajos prácticos"
let estudio = "100 minutos de estudio"
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console. log("TAREAS");

for (var i = 0; i < 14; i++) {
    if (i == 0){
        console.group("Semana 1")
    }
console.groupCollapsed("dia" + (i+1));
console.log(trabajo);
console.log(descanso);
console.log (estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i == 7) {
    console.groupEnd();
    console.groupCollapsed("Semana 2")
    }
}

console.groupEnd();
console.groupEnd(); 