// script.js

// Mostrar un mensaje de bienvenida cuando se cargue la página
window.onload = function() {
    alert("¡Bienvenido a mi proyecto web!");
};

// Cambiar el texto de un elemento cuando se haga clic en un botón
function cambiarTexto() {
    document.getElementById("texto-cambiable").innerHTML = "¡El texto ha sido cambiado con JavaScript!";
}

// Cambiar el color de fondo de la página
function cambiarColorFondo() {
    document.body.style.backgroundColor = "#e0f7fa";
}

// Mostrar la fecha y hora actual
function mostrarFechaHora() {
    const fecha = new Date();
    alert("Fecha y hora actual: " + fecha.toLocaleString());
}
