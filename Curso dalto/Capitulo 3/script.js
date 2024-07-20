// /*Cofla entró a una tienda que vende celulares porque le parecio bastante bueno comprarse un nuevo celular.
// De todos los modelos disponibles en esa tienda, a Cofla le llamaron la atencion 3 telefonos especificamente.
// El problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendar absolutamente nada.
// Pero, claro, el antes de comprar alguno quiere ver las cualidades y comportamientos de cada uno, ahi entramos nosotros

// CREAR SOLUCIONES

// - Crear un sistema para mostrarle a Cofla las particularidades de los 3 celulares
// - Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram
// - Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar*/

class celulares {
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolicionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false
    }
    botomEncendido(){
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado")
            this.encendido = false
        }
    }
    reinicar(){
        if (this.encendido == true) {
            alert("Reiniciando celular")
        } else {
            alert("El resultar esta apagado")
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de ${this.resolicionDeCamara}`)
    }
    grabarVideo(){
        alert(`Grabando video  en  ${this.resolicionDeCamara}`)
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b> <br>
        Memoria ram: <b>${this.memoriaRam}</b><br>
        Resolucion de vdeo: <b>${this.resolicionDeCamara}</b><br>`;
    }
} 

class CelularAltaGama extends celulares{
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionDeCamaraExtra = rdce; 
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`
    }
}

// const celular1 = new celulares("rojo", "150g", "5'", "hd", "1GB");
// const celular2 = new celulares("negro", "155g", "5.4'", "Full hd", "2GB");
// const celular3 = new celulares("blanco", "146g", "5.9 '", "Full hd", "2GB");

// document.write(`
//     ${celular1.mobileInfo()} <br>
//     ${celular2.mobileInfo()} <br>
//     ${celular3.mobileInfo()} <br> `);


// celular1.botomEncendido() // "Celular prendido"
// celular1.tomarFoto() // Foto tomada en una resolucion de Full hd
// celular1.grabarVideo() // Grabndo video en 5'
// celular1.reinicar() // Reiniciando celular
// celular1.botomEncendido() // "Celular apagado"

const celular1 = new CelularAltaGama("rojo", "130g", "5.2'", "4K", "3GB", "full had");
const celular2 = new CelularAltaGama("negro", "142g", "6'", "4K", "4GB", "hd");

document.write(`
    ${celular1.infoAltaGama()} <br> <br>
    ${celular2.infoAltaGama()} <br>
    `);


/*Cofla ya tiene su nuevo celular y ahora está mirando las aplicaciones del Play Store ya que quiere jugar juegos que sean
muy populares, que tengan buena puntuación y que pesen poco, pero las 7 apps que llamaron su atención son un tanto similares
y sabe que si se descarga todas, probablemente juegue con todas, pero él se va a descargar solo 2 para tener perdidas
innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede decidirse cual de todas estas
aplicaciones es la que va a descargar.

CREAR SOLUCIONES

- Crear un sistema que ayude a cofla a decidir cual app descargar.
- La información de los instaladores debe contener la cantidad de descargas, la puntuacion y el peso
- Las Apps se deben poder instalar, abrir, cerrar y desinstalar*/

class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso
        this.iniciada = false
        this.instalada = false
    }   
    abrir(){
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("App iniciada");  
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("App instalada correctamente");
        }     
    }
    desintalar(){
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desintalada correctamente");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}<b><br>
        Puntuacion: <b> ${this.puntuacion}<b><br>
        Peso: <b>${this.peso}<b><br>`
    }
}

const app = new App("16.000", "5 estrellas", "900mb");
const app2 = new App("1.000", "4 estrellas", "400mb");
const app3 = new App("6.000", "4.5 estrellas", "100mb");
const app4 = new App("23.000", "4.8 estrellas", "1gb");
const app5 = new App("900", "5 estrellas", "250");
const app6 = new App("17", "3.7 estrellas", "522mb");
const app7 = new App("42.981", "2.9 estrellas", "723mb");

document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>`)

// app.instalar() // App instalada correctamente
// app.abrir() // App iniciada
// app.cerrar() // App cerrada
// app.desintalar() // App desintalada correctamente