/**
 * Otros Arrays Methods Utiles
 */

const tecnologias = [ "HTML", "CSS", "JS", "React", "Javascript", "Node.js"]
const numeros = [10, 20, 30]


let nuevoArray;

//Filter
nuevoArray2 = tecnologias.filter( tech => tech !== 'React')

//Comprobar si existe algun elemento en un arreglo
// const resultado = tecnologias.includes('React')

//Some, devuelve valor si al menos uno cumple la condicion
// const resultado = numeros.some(numero => numero>15)

//Find - Devuelve el primer elemento que cumpla la condicion
// const resultado = numeros.find( numero => numero > 15)

//Every - Retorna true o false si todos cumplen la condicion
// const restultado = numeros.every( numero => numero >15)

//Reduce(Muy util en carrito de compras) Está diseñado para cantidades
const resultado = numeros.reduce( (total, numero) => numero + total, 0 )
console.log(resultado)

