import Contacto from "./crearContacto.js";

//funciones
const abrirModal = () => {
  const modalContacto = new bootstrap.Modal(
    document.getElementById("modalContacto")
  );
  //aqui abro la ventana modal
  modalContacto.show();
  //cambiar variable para q cree contactos
  creandoContacto = true;
};

const creaContacto = () => {
  //todo:tomar los datos del formulario y validar
  //con los datos voy a crear un objeto contacto
  const nuevoContacto = new Contacto(
    inputNombre.value,
    inputApellido.value,
    inputTel.value,
    inputEmail.value,
    inputImg.value,
    inputNota.value
  );
  console.log(nuevoContacto);
  agenda.push(nuevoContacto);
  //guardar la agenda en local storage
  guardarLocalStorage();
  //dibujar este contacto en la tabla
  dibujarFila(nuevoContacto, agenda.length);
  limpiarForm();
  //guardar el contacto en un array
  //mostrar un mensaje al usuario que indique el usuario se guardo correctamente
  Swal.fire({
    title: "Contacto creado!",
    text: `El contacto ${nuevoContacto.nombre} ${nuevoContacto.apellido} se ha creado correctamente`,
    icon: "success",
  });
};

const limpiarForm = () => {
  formularioContacto.reset();
};

const guardarLocalStorage = () => {
  localStorage.setItem("agendaKey", JSON.stringify(agenda));
};

const cargarDatosTabla = () => {
  //verificar si la agenda tiene datos
  if (agenda.length > 0) {
    //dibujar una fila por cada contacto
    agenda.map((contacto, indice) => dibujarFila(contacto, indice + 1));
  }
};

const dibujarFila = (contacto, indice) => {
  console.log(contacto);
  // agregar una fila (tr) nueva al tbody de la tabla de contactos
  tablaContactos.innerHTML += `<tr>
              <th scope="row">${indice}</th>
              <td>${contacto.nombre}</td>
              <td>${contacto.apellido}</td>
              <td>${contacto.telefono}</td>
              <td>${contacto.email}</td>
              <td>
                <button class="btn btn-warning"onclick="prepararContacto('${contacto.id}')" >Editar</button>
                <button class="btn btn-danger" onclick="eliminarContacto('${contacto.id}')" >Borrar</button>
                <button class="btn btn-info">Ver</button>
              </td>
            </tr>`;
};

window.eliminarContacto = (id) => {
  console.log("Eliminando contacto...");
  //buscar y borrar el contacto del array agenda
  const posicionContactoBuscado = agenda.findIndex(
    (contacto) => contacto.id === id
  );
  const contactoBorrar = agenda[posicionContactoBuscado];
  Swal.fire({
    title: `Estas seguro que desea borrar a ${contactoBorrar.nombre} ${contactoBorrar.apellido} ?`,
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, borrar!",
    cancelButtonText: "No, cancelar!",
  }).then((result) => {
    if (result.isConfirmed) {
      agenda.splice(posicionContactoBuscado, 1);
      guardarLocalStorage();
      tablaContactos.children[posicionContactoBuscado].remove();
      Swal.fire({
        title: `El contacto eliminado!`,
        text: "El contacto ha sido eliminado.",
        icon: "success",
      });
    }
  });
};

window.prepararContacto = (id) => {
  console.log("editando...", id);
  const contactoBuscado = agenda.find((contacto) => contacto.id === id);
  inputNombre.value = contactoBuscado.nombre;
  inputApellido.value = contactoBuscado.apellido;
  inputEmail.value = contactoBuscado.email;
  inputTel.value = contactoBuscado.telefono;
  inputNota.value = contactoBuscado.notas;
  inputImg.value = contactoBuscado.imagen;
  abrirModal();
  //guardar el id del contacto
  idContactoEditar = id;
  creandoContacto = false;
};

const editarContacto = () => {
  //agarra los datos del formulario y actualizar la tabla de contactos
  const posicionContacto = agenda.findIndex(
    (contacto) => contacto.id === idContactoEditar
  );
  agenda[posicionContacto].nombre = inputNombre.value;
  agenda[posicionContacto].apellido = inputApellido.value;
  agenda[posicionContacto].email = inputEmail.value;
  agenda[posicionContacto].telefono = inputTel.value;
  agenda[posicionContacto].notas = inputNota.value;
  agenda[posicionContacto].imagen = inputImg.value;
  //actualizar el localStorage
  guardarLocalStorage();
  //actualizar la tabla de contactos

  //limpiar el formulario
  limpiarForm();
  //cerrar modal
  //mensaje de actualizado
};

//declarar variables
const btnAgregar = document.getElementById("btnAgregar");
const formularioContacto = document.querySelector("form");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefono");
const inputImg = document.getElementById("imagen");
const inputNota = document.getElementById("notas");
const agenda = JSON.parse(localStorage.getItem("agendaKey")) || [];
const tablaContactos = document.querySelector("tbody");
let idContactoEditar = null;
let creandoContacto = true;
//agrego los manejadores de eventos
btnAgregar.addEventListener("click", abrirModal);
formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  if (creandoContacto) {
    //Aqui creare un contacto
    creaContacto();
  } else {
    editarContacto();
  }

  //algun dia voy a editar un contacto
});

// resto de la logica

cargarDatosTabla();
