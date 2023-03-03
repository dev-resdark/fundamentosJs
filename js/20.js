/**
 * Ternario
 * Es un If en una sola linea
 */

const autenticado = true
//Todo antes de los : es si se cumple la condicion, lo que se escribe luego de los dos puntos es si la condicion no se cumple
autenticado ? console.log('autenticado'): console.log('dirigir hacia login')

//Negando una condicion
!autenticado ? console.log('autenticado'): console.log('dirigir hacia login')

/**
 * Doble ternario
 */

const saldo = 600
const pagar = 500
const tarjeta = true

saldo > pagar ? 
    console.log('Puedes pagar con Saldo') :
    tarjeta ? 
    console.log('Puedes pagar con Tarjeta') : 
    console.log('No puedes pagar')