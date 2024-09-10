document.addEventListener('DOMContentLoaded', function () {
    // Activar el carrusel automáticamente al cargar la página
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,  // Cambiar cada 3 segundos
        ride: 'carousel'
    });

    // Validación y envío del formulario
    document.querySelector('#myForm').addEventListener('submit', function(event) {
        var email = document.querySelector('#exampleInputEmail1').value;
        var password = document.querySelector('#exampleInputPassword1').value;
        var checkbox = document.querySelector('#exampleCheck1').checked;

        if (email === '' || password === '' || !checkbox) {
            event.preventDefault(); // Detiene el envío del formulario si los campos están vacíos o el checkbox no está marcado
            alert('Por favor, complete todos los campos y marque la casilla antes de enviar.');
        } else if (password.length < 6) {
            event.preventDefault(); // Detiene el envío del formulario si la contraseña es demasiado corta
            alert('La contraseña debe tener al menos 6 caracteres.');
        } else {
            event.preventDefault(); // Detiene el envío para mostrar notificación
            alert('Formulario enviado con éxito');
        }
    });

    // Cambiar estilo al hacer clic en el botón
    document.querySelector('#toggleStyleButton').addEventListener('click', function() {
        document.body.classList.toggle('green-theme');
    });
});

