// JavaScript personalizado
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: Mostrar una alerta cuando se envíe el formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío real del formulario
      alert('¡Formulario enviado!');
    });
  });
  