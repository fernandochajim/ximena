// scripts.js
function loadLetter(url) {
    const iframe = document.getElementById('content-frame');
    iframe.classList.add('fade-out');  // Añade la clase de salida
    setTimeout(() => {
        iframe.src = url;
        iframe.classList.remove('fade-out'); // Elimina la clase después del cambio
    }, 500);
}

// Para agregar animación de entrada y salida
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('content-frame');
    iframe.onload = () => {
        iframe.classList.add('fade-in');  // Añade clase de entrada
        setTimeout(() => iframe.classList.remove('fade-in'), 500);  // Elimina la clase después de la animación
    };
});

// Función para crear corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤';
    heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración de animación aleatoria

    document.getElementById('hearts-container').appendChild(heart);

    // Eliminar el corazón después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones flotantes a intervalos regulares
setInterval(createHeart, 1000);
