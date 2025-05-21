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
    const contactoNuevo = new Contacto('Darth' ,'Vader', '345345', '', '','')
    console.log(contactoNuevo)
    //guardar el contacto en un array
}


//declarar variables
const btnAgregar = document.getElementById('btnAgregar')
const formularioContacto = document.querySelector('form')
const agenda = []

//agrego los manejadores de eventos
btnAgregar.addEventListener('click', abrirModal)
formularioContacto.addEventListener('submit', (e)=>{
    e.preventDefault();
    //aqui voy a crear un contacto
    crearContacto()
    //algun dia aqui voy a editar un contacto
})