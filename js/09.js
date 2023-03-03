/**Array o Arreglos (Añadir o Eliminar elementos) 
 * 
*/
const tecnologias = [ "HTML", "CSS", "JS", "React", "Javascript", "Node.js"]


/**Añadir Elementos al Arreglo*/
// const nuevoArreglo = [...tecnologias, 'GraphQL'] //Crea un nuevo arreglo, con una copia de tecnologias, y le agregas un nuevo elemento al final.

// const nuevoArreglo = [ 'GraphQL',...tecnologias] //Crea un nuevo arreglo, agregas el o los elementos que necesites que estén en el array y luego creas una copia del arreglo.

/**Eliminar Elementos del Arreglo - Método Filter -- crea un nuevo arreglo, el cual no busca modificar el valor de los elementos para el nuevo arreglo, únicamente retorna aquellos elementos que cumplan con las condiciones del filtro, los cuales serán almacenados en otro arreglo.
* 
*/

// const nuevoArray = tecnologias.filter( function(tech){
//     return tech !== 'HTML'
// })

/**Modificar Elementos del Arreglo -- Metodo Map -- tambien se encarga de crear un nuevo arreglo al igual que el metodo Filter. Lo podemos recorrer y pasar los elementos a una funcion para almacenar los nuevos valores en un arreglo nuevo
 * 
*/
const nuevoArray = tecnologias.map(function(tech){
    if(tech === 'HTML'){
        return 'GraphQL'
    } else {
        return tech
    }
})
console.table(tecnologias)
console.table(nuevoArray)
