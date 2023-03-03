/**Eventos del DOM - submit
 * 
 */

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre')
    const password = document.querySelector('.password')
    console.log(nombre.value)
    console.log(password.value)
    console.log('enviaste formulario')
})