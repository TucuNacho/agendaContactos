import Contacto from "./classContacto.js"

// funciones
const abrirModal = ()=>{
const modalContacto = new bootstrap.Modal(document.getElementById('modalContacto'))
//aqui abro la ventana modal
modalContacto.show()
}

const crearContacto= ()=>{
    //todo: tomar los datos del formulario y validarlos
    //con los datos voy a crear un objeto contacto
    const contactoNuevo = new Contacto( inputNombre.value , inputApellido.value, inputTelefono.value, inputEmail.value, inputImagen.value,inputNotas.value)
    //guardar el contacto en un array
    agenda.push(contactoNuevo)
    limpiarFormulario();
}

const limpiarFormulario = ()=>{
    formularioContacto.reset()
}

//declarar variables
const btnAgregar = document.getElementById('btnAgregar')
const formularioContacto = document.querySelector('form')
const inputNombre = document.querySelector('#nombre')
const inputApellido = document.querySelector('#apellido')
const inputEmail = document.querySelector('#email')
const inputTelefono = document.querySelector('#telefono')
const inputNotas = document.querySelector('#notas')
const inputImagen = document.querySelector('#imagen')
const agenda = []

//agrego los manejadores de eventos
btnAgregar.addEventListener('click', abrirModal)
formularioContacto.addEventListener('submit', (e)=>{
    e.preventDefault();
    //aqui voy a crear un contacto
    crearContacto()
    //algun dia aqui voy a editar un contacto
})