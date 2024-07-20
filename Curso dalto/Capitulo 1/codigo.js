/*3 chicos de 23 años perfectamente normales entran a una heladeria a comprar helado pero hay un problema:
Los precios no estan al lado de cada estante con su respectivo helado. Ellos quieren comprar el helado
màs caro que puedan con la plata que tienen , asi que... Veamos cómo podemos  ayudarlos.

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de los helados son los siguientes:
- Palito helado de agua  $0.6 USD
- Palito de helado con crema: $1 USD
- Bombóm helado marca heladix: $1.6 USD
- Bombóm helado marca heladovich: $1.7 USD
- Bombóm helado  marca helardo: $1.8 USD
- Potecito de helado con confites: $2.9 USD
- Pote de  1/4 KG -> $2.9 USD
0
CREAR SOLUCIONES:
- Pedirles que ingresen el monto que tienen y mostrarles el helado más caro
- Si hay  2 o más con el mismo sabor precio mostrar ámbos
- Cofla quiere saber cual es el vuelto.*/

dineroCofla = prompt("¿Cúanto dinero tienes, Cofla?")

dineroCofla = parseInt(dineroCofla) /*Convertimos el string en un numero entero*/

if (dineroCofla >= 0.6 && dineroCofla <  1) {
    alert("Cofla, comprate el helado de agua");
    alert("Y te sobran: " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, comprate el helado de crema");
    alert("Y te sobran: " + (dineroCofla - 1));

}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, comprate el helado de heladix");
    alert("Y te sobran: " + (dineroCofla - 1.6));

}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, comprate el helado de heladovich");
    alert("Y te sobran: " + (dineroCofla - 1.7));

}   
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, comprate el helado de helardo");
    alert("Y te sobran: " + (dineroCofla - 1.8));

}
else if (dineroCofla >= 2.9) {
    alert("Cofla, comprate el helado con confites o el pote de 1/4kg");
    alert("Y te sobran: " + (dineroCofla - 2.9));

} else {
    alert("Lo siento, Cofla, pobre de mierda, no te  alcanza para ningun helado")
}

/**/

dineroRoberto = prompt("¿Cúanto dinero tienes Roberto?")

if (dineroRoberto >= 0.6 && dineroRoberto <  1) {
    alert("Roberto, comprate el helado de agua")
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, comprate el helado de crema")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, comprate el helado de heladix")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, comprate el helado de heladovich")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, comprate el helado de helardo")
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto, comprate el helado con confites o el pote de 1/4kg")

} else {
    alert("Lo siento, Roberto, pobre de mierda, no te  alcanza para ningun helado")
}

/**/

dineroPedro = prompt("¿Cúanto dinero tienes Pedro?")

if (dineroPedro >= 0.6 && dineroPedro <  1) {
    alert("Pedro, comprate el helado de agua")
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comprate el helado de crema")
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, comprate el helado de heladix")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, comprate el helado de heladovich")
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comprate el helado de helardo")
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate el helado con confites o el pote de 1/4kg")

} else {
    alert("Lo siento,  pobre de mierda, no te  alcanza para ningun helado")
}
            
/**/

const definirCompra = (n)=>{
    let din = prompt(`Dinero de ${n}`);
    if (din >= 0.6 && din < 1) return  (`${n}: helado de agua`);
    if (din >= 1 && din < 1.6) return  (`${n}: helado de crema`);
    if (din >= 1.6 && din < 1.7) return  (`${n}: helado de heladix`);
    if (din >= 1.7 && din < 1.8) return  (`${n}: helado de heladovich`);
    if (din >= 1.8 && din < 2.9) return  (`${n}: helado de helardo`);
    if (din >= 2.9) return (`${n}: helado de confites o pote de 1/4kg`);
    else return (`${n}: No te alcanza para ningun helado pobre de mierda`);
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));