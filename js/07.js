/**
 * Unir dos o más objetos
 */
const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre: "Juan",
    premium: true
}

// const nuevoObjeto = Object.assign(producto, cliente) -- No se utiliza por que es una mala practica ya que me altera los objetos ya que el valor nombre se repite

// const nuevoObjeto2 = {...producto, ...cliente} //los 3 puntos se llaman spread operator y realiza un copia del objeto. Esto no altera los valores de los objetos como tal pero si los valores en el nuevo objeto.

/**
 * Lo ideal es realizar un Object Literal enhacement aprendido en 04.js añadiendo el spread operator
 */

const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)