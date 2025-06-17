document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksList = document.querySelector('#main-header .nav-links');
    // const header = document.getElementById('main-header'); // No longer needed for 'scrolled' class

    // --- Mobile Menu Toggle ---
    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // --- Sticky Header Background on Scroll ---
    // This functionality is removed as the header style is now permanent
    /*
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) { 
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    */
    
    // --- Close mobile menu on link click ---
    if (navLinksList) {
        navLinksList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksList.classList.contains('active')) {
                    navLinksList.classList.remove('active');
                    if (menuToggle) {
                        const icon = menuToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }

    // --- Set Current Year in Footer ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Scroll-triggered Animations (AOS) ---
    const animatedElements = document.querySelectorAll('.aos-fade-in, .aos-slide-left, .aos-slide-right, .aos-slide-up, .aos-slide-down, .aos-scale-up, .aos-rotate-in');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                     entry.target.classList.remove('is-visible'); // Re-animate on scroll up
                }
            });
        }, {
            threshold: 0.1 
        });
        animatedElements.forEach(el => observer.observe(el));
    }
});