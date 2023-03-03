/**
 * Scope
 * 
 * define la accesibilidad de variables, objetos y funciones.

Hay dos tipos de scope en JavaScript.

Alcance global
* son todas las variables que se declaran fuera de una funcion.

Scope local
*es cuando se declara una variable dentro de una funcion. 
 */

const precio = 400

function miFuncion(){
    const precio = 200
    console.log(precio)
}

miFuncion()
console.log(precio)


