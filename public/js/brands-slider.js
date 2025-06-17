document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.partnership-slides');
    const slides = Array.from(document.querySelectorAll('.partnership-slide'));
    const nextButton = document.querySelector('.partnership-slider-container .next');
    const prevButton = document.querySelector('.partnership-slider-container .prev');
    const dotsContainer = document.querySelector('.slider-dots');

    if (!slidesContainer || slides.length === 0) {
        console.warn('Partnership slider elements not found.');
        return;
    }

    let currentIndex = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        // Simple show/hide (fade is handled by CSS)
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        
        currentIndex = index;
        updateDots();
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }

    // Event Listeners for manual control
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            showNextSlide();
        });
    }
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            showPrevSlide();
        });
    }

    // Initialize
    goToSlide(0); // Show the first slide
});