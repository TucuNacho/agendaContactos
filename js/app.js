const abrirModal = ()=>{
const modalContacto = new bootstrap.Modal(document.getElementById('modalContacto'))
//aqui abro la ventana modal
modalContacto.show()
}

const btnAgregar = document.getElementById('btnAgregar')

btnAgregar.addEventListener('click', abrirModal)