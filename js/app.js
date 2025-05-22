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
    const nuevoContacto = new Contacto(inputNombre.value, inputApellido.value, inputTel.value,inputEmail.value,inputImg.value,inputNota.value)
    console.log(nuevoContacto);
    agenda.push(nuevoContacto)
    limpiarForm()
    //guardar la agenda en local storage
    guardarLocalStorage()
    //guardar el contacto en un array
}

const limpiarForm =()=>{
    formularioContacto.reset()
}

const guardarLocalStorage =()=>{
    localStorage.setItem('agendaKey', JSON.stringify(agenda))
}

//declarar variables
const btnAgregar = document.getElementById('btnAgregar')
const formularioContacto= document.querySelector('form')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const inputEmail = document.getElementById('email')
const inputTel = document.getElementById('telefono')
const inputImg = document.getElementById('imagen')
const inputNota = document.getElementById('notas')
const agenda = JSON.parse(localStorage.getItem('agendaKey')) || []

//agrego los manejadores de eventos
btnAgregar.addEventListener('click', abrirModal)
formularioContacto.addEventListener('submit',(e)=>{
    e.preventDefault();
    //Aqui creare un contacto
    creaContacto()
    //algun dia voy a editar un contacto
})