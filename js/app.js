import Contacto from "./crearContacto.js"

//funciones
const abrirModal = ()=>{
const modalContacto = new bootstrap.Modal(document.getElementById('modalContacto'))
//aqui abro la ventana modal
modalContacto.show()
}

const creaContacto=()=>{
    //todo:tomar los datos del formulario y validar
    //con los datos voy a crear un objeto contacto
    const nuevoContacto = new Contacto('Darth', 'Vader','4424454','','')
    console.log(nuevoContacto);
    
    //guardar el contacto en un array
}

//declarar variables
const btnAgregar = document.getElementById('btnAgregar')
const formularioContacto= document.querySelector('form')
const agenda = []

//agrego los manejadores de eventos
btnAgregar.addEventListener('click', abrirModal)
formularioContacto.addEventListener('submit',(e)=>{
    e.preventDefault();
    //Aqui creare un contacto
    creaContacto()
    //algun dia voy a editar un contacto
})