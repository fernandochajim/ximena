// scripts.js

// Función para cargar el contenido de la carta en el contenedor
function loadLetter(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('letter-content').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la carta:', error));
}

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

// Ajustar la altura del contenedor de la carta
document.addEventListener('DOMContentLoaded', () => {
    loadLetter('carta-18-agosto-2024.html'); // Cargar la carta inicial por defecto
});
