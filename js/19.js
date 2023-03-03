/**
 * Condicionales || y &&
 * 
 * || Al menos una condicion debe cumplirse
 * && Todas las condiciones pueden cumplirse
 */

const saldo = 600
const pagar = 500
const tarjeta = true

if (saldo > pagar|| tarjeta){
    console.log('Puedes pagar o')
}else {
    console.log('NO Puedes pagar con tu saldo')
}