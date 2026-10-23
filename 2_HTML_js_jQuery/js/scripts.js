

$(document).ready(function() {
    $("#mensaje").text("¡jQuery funciona correctamente!");
});


$("#boton").on('click', function() {
    $("#mensaje").text("¡Has pulsado el botón!");
});