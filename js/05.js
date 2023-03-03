/**
 * Objetos - Manipulación
 */

const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}

// Object.freeze(producto) - No permite que se modifique ningun valor
// Object.seal(producto) - Solo puedes modificar las propiedades exitentes, no te deja añadir ni eliminar.

//Reescribe el valor ya que no es una variable
producto.nombre = "Monitor Curvo"

//Si no existe lo va añadir
producto.codigo = "0054684564954"

//eliminar un valor
delete producto.codigo
console.table(producto)