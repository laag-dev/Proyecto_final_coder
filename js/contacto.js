/*codigo de contactos*/

/*boton enviar*/
let boton = document.getElementById("btnEnviar")
boton.addEventListener("click",(e)=>{
  e.preventDefault()
    ejecutarEnviar()
})

/*valido usuario*/
function existePacientesEnStorage() {
    let existe = false;
    if(localStorage.getItem("pacientes")) {
        existe = true;
    }
}
/*creo usuario*/
function crearListaPacientesEnStorage () {
    localStorage.setItem("pacientes", JSON.stringify([]));
}
/*obtengo usuario*/
function obtenerPacientesEnStorage() {
    return JSON.parse(localStorage.getItem("pacientes"));
}
/*guardo usuario*/
function guardarPacientesEnStorage(listaPacientes) {
    localStorage.setItem("pacientes",JSON.stringify(listaPacientes));
}
/*creo clase para objeto*/
class pacientes {
    constructor(nuevoPaciente) {
        this.nombre = nuevoPaciente.nombre;
        this.apellido = nuevoPaciente.apellido;
        this.email = nuevoPaciente.email;
        this.telefono = nuevoPaciente.telefono;
        this.problematica = nuevoPaciente.problematica;
    }
}
/*obtengo array*/
function cargarNuevoPacientes(cargarPacientes) {
    const arrayDestorage = obtenerPacientesEnStorage();
    arrayDestorage.push(cargarPacientes);
    guardarPacientesEnStorage(arrayDestorage);

}
const modal = document.querySelector('.modal')

/*ejecuto envio de información*/
function ejecutarEnviar () {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido"); 
    const email = document.getElementById("email"); 
    const telefono = document.getElementById("telefono")
    const problematica = document.getElementById("motivoConsulta");
    
    const modalTitle = document.querySelector(".modal__content--title")
    const modalText = document.querySelector('.modal__content--text')

    const nuevoPacientes = new pacientes({
        nombre: nombre.value,
        apellido: apellido.value, 
        email: email.value, 
        telefono: telefono.value,
        problematica: problematica.value});
        console.log(nuevoPacientes)
    cargarNuevoPacientes (nuevoPacientes);
    
    /*Muestro modal*/

    modal.style.display='flex'
    modalTitle.innerHTML = `Su solicitud fue recibida, ${nombre.value} ${apellido.value}`
    modalText.innerHTML = `Nos contactaremos en la brevedad posible a su email o numero registrado: ${email.value} ${telefono.value}` 

    nombre.value='';
    apellido.value='';
}
if(!existePacientesEnStorage()) {
    crearListaPacientesEnStorage();
}

const modalClose = document.querySelector('.modal__content--close')

modalClose.addEventListener('click',()=>{
modal.style.display='none';
})