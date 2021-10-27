document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var estado = document.getElementById('estado').value;
    var ciudad = document.getElementById('ciudad').value;

    if(nombre.length == 0) {
        alert("Escribe tu Nombre");
        return;
    }
    if(apellido.length == 0) {
        alert("Escribe tu Apellido");
        return;
    }
    if(estado.length == 0) {
        alert("Ingresa el estado en el que vives");
        return;
    }
    if(ciudad.length == 0) {
        alert("Ingresa la ciudad en el que vives");
        return;
    }

    this.submit();
}