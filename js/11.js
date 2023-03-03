//Iteradores en Arreglos

const tecnologias = [ "HTML", "CSS", "React", "Javascript", "Node.js"]


/**
 * ForEach
 * Solo Acceder a cada elemento del array
 */

const arrayForeach = tecnologias.forEach( function (tech) {
    return tech
})

/**Map
 * crea un arreglo nuevo y lo copia y se puede visualizar los elementos del arreglo. En react se utiliza más este método
 */
const arrayMap = tecnologias.map( function (tech) {
    
    return tech
})

console.log(arrayForeach)
console.log(arrayMap)