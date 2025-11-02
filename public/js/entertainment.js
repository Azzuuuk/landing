document.addEventListener('DOMContentLoaded', () => {
    // === MOBILE MENU TOGGLE ===
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksList = document.querySelector('.nav-links');

    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close mobile menu on link click
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

    // === SET CURRENT YEAR ===
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // === ANIMATED COUNTER ===
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString() + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString() + '+';
            }
        };

        updateCounter();
    };

    // === INTERSECTION OBSERVER FOR COUNTERS ===
    const counterElements = document.querySelectorAll('.counter, [data-count]');
    if (counterElements.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    const target = parseInt(entry.target.getAttribute('data-count')) || 
                                   parseInt(entry.target.textContent.replace(/[^0-9]/g, ''));
                    
                    if (target) {
                        animateCounter(entry.target, target);
                    }
                }
            });
        }, {
            threshold: 0.5
        });

        counterElements.forEach(el => counterObserver.observe(el));
    }

    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // === FADE IN ON SCROLL ANIMATION - ONE TIME ONLY ===
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Only animate if element hasn't been animated yet
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                entry.target.classList.add('animate-in');
                entry.target.setAttribute('data-animated', 'true');
                // Stop observing this element after animation
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards, sections, and other elements that should fade in
    const elementsToAnimate = document.querySelectorAll('.card, .section-header, .cta-strip, .blyza-loop');
    elementsToAnimate.forEach(el => {
        // Add initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        fadeInObserver.observe(el);
    });

    // === FORM HANDLING (if contact form exists) ===
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 0.5em;"></i>Sending...';
            
            try {
                // Note: Replace with your actual form handling endpoint
                // For now, this will work with Formspree or similar services
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success
                    submitButton.innerHTML = '<i class="fas fa-check" style="margin-right: 0.5em;"></i>Message Sent!';
                    submitButton.style.backgroundColor = '#00BFA6';
                    contactForm.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitButton.innerHTML = originalButtonText;
                        submitButton.disabled = false;
                        submitButton.style.backgroundColor = '';
                    }, 3000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error handling
                submitButton.innerHTML = '<i class="fas fa-exclamation-triangle" style="margin-right: 0.5em;"></i>Error - Try Again';
                submitButton.style.backgroundColor = '#FF4444';
                
                setTimeout(() => {
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                    submitButton.style.backgroundColor = '';
                }, 3000);
            }
        });
    }

    // === HEADER SCROLL EFFECT (subtle) ===
    let lastScroll = 0;
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add slight shadow when scrolled
            if (currentScroll > 50) {
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
            } else {
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            }
            
            lastScroll = currentScroll;
        });
    }

    // === STATS DATA ATTRIBUTES (for easy updating) ===
    // These numbers can be easily updated by changing the data-count attributes in HTML
    // Example: <span class="credibility-number" data-count="55000">55,000+</span>
    
    console.log('🎮 Blyza Entertainment - Powered by fun. Built to scale.');
});
