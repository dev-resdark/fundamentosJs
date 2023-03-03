/**
 * EVENTOS DEL DOM -- Evento click
 */

const heading = document.querySelector('#heading')

// heading.addEventListener('click', function() {
//     console.log('diste click en heading')
// })

heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo heading al dar click'
})

//Cuando estas manipulado varios elementos del dom, debes iterar con un foreach
const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        console.log('diste click en un enlace')
    })
})

// heading.addEventListener('click', clickHeading)

// function clickHeading(){
//     console.log('diste click en heading')
// }