/**
 * Objetos
 * Un objeto puede tener diferentes variables
 */

const nombre = "tablet"
const precio = 300
const disponible = true

/**
 * Ahora si lo que queremos es almacenar todos estos datos en una sola variable debemos crear un objeto
 */

const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}

console.log(producto)
console.table(producto)

/**
 * Tambien puedes ir accediendo a cada valor
 */
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

/**
 * Algo nuevo en Js es el DESTRUCTURING, que es sacar de una estructura. Eso quiere decir que en vez de acceder a los valores "producto.nombre producto.talcosa" podemos crear las variables de estos valores e imprimirlas en la pantalla.
 * En resumen se sacan valores de un objeto y se crean variables.
 */
// const { nombre, precio, disponible } = producto 
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

/**
 * Object Literal enhacement
 * esto sirve para meter variables que estan fuera de un objeto
 */

const autenticado = true
const usuario = "Sergio"

// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario : usuario
// }

/**
 * si se llaman igual como el caso de arriba no hace falta se puede omitir escribir la variable creada.
 */
const nuevoObjeto = {
    autenticado,
    usuario 
}

console.table(nuevoObjeto)