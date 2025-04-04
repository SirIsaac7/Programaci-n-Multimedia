document.addEventListener('DOMContentLoaded', () => {
    // Configuración de botones del menú
    const menuButtons = document.querySelectorAll('.menu-button');
    const swordImages = document.querySelectorAll('.sword-image');

    menuButtons.forEach((button, index) => {
        const swordImage = swordImages[index];

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            swordImage?.style.setProperty('transform', 'scale(1.05)');
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            swordImage?.style.setProperty('transform', 'scale(1)');
        });

        button.addEventListener('click', () => {
            swordImages.forEach(img => img.style.display = 'none');
            if(swordImage) {
                swordImage.style.display = 'block';
                setTimeout(() => swordImage.style.display = 'none', 1000);
            }
        });
    });
});

window.addEventListener('load', () => {
    const audio = document.getElementById('music');
    let played = false;
    
    const playAudio = () => {
        if(!played && audio) {
            audio.play()
                .catch(error => console.log('Error al reproducir audio:', error));
            played = true;
        }
    };

    const interactionEvents = ['click', 'keypress', 'touchstart'];
    interactionEvents.forEach(event => {
        document.addEventListener(event, playAudio, { once: true });
    });
});