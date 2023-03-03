/**
 * Arrow Function y Metodos de Arreglos(Map y filter)
 */

const tecnologias = [ "HTML", "CSS", "JS", "React", "Javascript", "Node.js"]

// const nuevoArray = tecnologias.map( tech => {
//     if(tech === 'HTML'){
//         return 'GraphQL'
//     } else {
//         return tech
//     }
// })

const nuevoArray2 = tecnologias.filter( tech => tech !== 'React')

// console.log(nuevoArray)
console.log(nuevoArray2)