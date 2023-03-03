/**
 * Destructuring de dos o más objetos
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
//Estoy sacando valores de mis objetos y las convierto en variables
const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente //Cuando se trabaja con API's y demas como no se puede editar los valores, lo que hacemos es sacar el valor nombre del objeto cliente y guardarlo en una variable diferente llamada nombreCliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)