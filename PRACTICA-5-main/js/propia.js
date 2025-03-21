let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.top = '100%'; 
    });

    // Muestra la diapositiva actual
    slides[index].classList.add('active');
    slides[index].style.top = '0';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide(currentSlide);
}

// Inicia el carrusel
showSlide(currentSlide);
setInterval(nextSlide, 2500); 