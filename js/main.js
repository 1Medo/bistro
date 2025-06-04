const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('header .nav ul');
const navLinks = document.querySelectorAll('header .nav ul li a');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    // Initialize Lottie animation
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/animate.json'
    });

    // When animation completes
    animation.addEventListener('complete', () => {
        // Add hide class to slide up the overlay
        loadingOverlay.classList.add('hide');
        
        // Remove the overlay from DOM after animation completes
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 800); // Same duration as the CSS transition
    });
});