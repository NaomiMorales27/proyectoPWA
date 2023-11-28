//Configurar el Service worker
alert('hola')
if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('sw.js') //Ruta al archivo del service worker
    .then(function (registration){
        //El Service worker se ha registrado correctamente
        console.log('Service Worler registrado con exito.', registration);
    })
    .catch(function (error){
        //Hubo un error al registrar el Service Worker
        console.error('Error al registar el Service Worker:', error);     
    });
}else{
    console.error('Error no soporta el Service Worker');
}
// Configurar el Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js') // Ruta al archivo del service worker
        .then(function (registration) {
            // El Service worker se ha registrado correctamente
            console.log('Service Worker registrado con éxito.', registration);
        })
        .catch(function (error) {
            // Hubo un error al registrar el Service Worker
            console.error('Error al registrar el Service Worker:', error);
        });
} else {
    console.error('El navegador no soporta Service Worker');
}

// Detección de Ubicación
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            // `position` contiene información sobre la ubicación del usuario
            console.log('Latitud:', position.coords.latitude);
            console.log('Longitud:', position.coords.longitude);

            // Puedes utilizar esta información para realizar acciones específicas en tu aplicación
        },
        function (error) {
            console.error('Error al obtener la ubicación:', error.message);
        }
    );
} else {
    console.error('La geolocalización no está disponible en este navegador.');
}

// Acceso al Micrófono
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
        // El usuario ha concedido permisos y el micrófono está disponible
        console.log('Micrófono disponible.');

        // Puedes utilizar `stream` para realizar acciones específicas, como grabar audio, etc.
    })
    .catch(function (error) {
        console.error('Error al acceder al micrófono:', error.message);
    });

// Ocultar la pantalla de inicio (splash) después de 3 segundos (ajustable)
setTimeout(function () {
    document.getElementById('splash-screen').style.display = 'none';
}, 3000);

// Contenido de la página principal (Home)
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el contenedor de las tarjetas
    const cardContainer = document.querySelector('.row');

    // Ejemplo de datos para las tarjetas
    const cardsData = [
        {
            imageUrl: 'url_imagen_1.jpg',
            title: 'Título Tarjeta 1',
            description: 'Descripción de la tarjeta 1.'
        },
        {
            imageUrl: 'url_imagen_2.jpg',
            title: 'Título Tarjeta 2',
            description: 'Descripción de la tarjeta 2.'
        }
        // Puedes agregar más datos de tarjetas según sea necesario
    ];

    // Crear y agregar tarjetas al contenedor
    cardsData.forEach(cardData => {
        const cardElement = createCardElement(cardData);
        cardContainer.appendChild(cardElement);
    });

    // Función para crear elementos de tarjeta (card)
    function createCardElement(cardData) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4');

        const cardInnerHtml = `
            <div class="card">
                <img src="${cardData.imageUrl}" class="card-img-top" alt="Card Image">
                <div class="card-body">
                    <h5 class="card-title">${cardData.title}</h5>
                    <p class="card-text">${cardData.description}</p>
                </div>
            </div>
        `;

        cardDiv.innerHTML = cardInnerHtml;
        return cardDiv;
    }
});
