// EVENTOS DEL DOM -- Inputs

const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input', function(e){
    console.log(e.target.value)
})

const inputPassw = document.querySelector('.password')

inputPassw.addEventListener('input', function(e){
    inputPassw.type = 'text'

    setTimeout(() => {
        inputPassw.type='password'
    }, 100);
})

//NOTA, el argumento que se pasa en la funcion puede tener cualquier nombre
// ya que se pasa en automatico.