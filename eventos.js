document.addEventListener('DOMContentLoaded', function() {
    const saludarButton = document.getElementById('saludarButton');
    const botonContainer = document.getElementById('botonContainer');

    saludarButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Detiene la propagación del evento
        alert('¡Hola desde el botón!');
    });

    botonContainer.addEventListener('click', function() {
        alert('¡Hola! Soy el div');
    });
});