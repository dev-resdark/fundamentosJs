/** Manipulando html 
 * 
*/

const heading = document.querySelector('.heading')

heading.textContent = 'Nuevo Heading'
console.log(heading)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'

const enlaces = document.querySelectorAll('.navegacion a')
//Para iterar una lista como en este caso se hace lo siguiente

enlaces.forEach(enlace => enlace.textContent = ' Nuevo Enlace')