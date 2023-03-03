/**Arrow functions
forma normal
*/
// const sumar = (numero, numero2) => {
//     return numero + numero2
// }

/**
 * Si solo tienes una linea de codigo dentro de las llaves, puedes eliminar las llaves, solo que ya no es necesario poner return ya que eso segun JS está implicito.
 */
// const sumar = (numero, numero2) =>  numero + numero2

/**
 * Si solo pasas un parametro a la funcion tampoco son necesarios los parentesis
 */

const sumar = numero =>  numero + 20 // esto devuelve un numero pasado como argumento + 20

const resultado = sumar(14)
console.log(resultado)

const sumaArrow = () => 5+7
const resultado2 = sumaArrow()
console.log(resultado2)

