// ========================================
// Navigation & Menu
// ========================================

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ========================================
// Sticky Header
// ========================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ========================================
// Active Navigation Link
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

function activateNavLink() {
    let scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ========================================
// Smooth Scroll
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default for internal anchors
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Accordion Functionality
// ========================================
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionId = header.getAttribute('data-accordion');
        const content = document.getElementById(accordionId);
        const isActive = header.classList.contains('active');

        // Optional: Close other accordions (comment out if you want multiple open)
        /*
        accordionHeaders.forEach(h => {
            if (h !== header) {
                h.classList.remove('active');
                const c = document.getElementById(h.getAttribute('data-accordion'));
                c.classList.remove('active');
            }
        });
        */

        // Toggle current accordion
        header.classList.toggle('active');
        content.classList.toggle('active');
    });
});

// ========================================
// Carousel Functionality
// ========================================
class Carousel {
    constructor(trackElement, dotsContainer) {
        this.track = trackElement;
        this.dotsContainer = dotsContainer;
        this.items = this.track.querySelectorAll('.carousel-item');
        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();
        this.totalSlides = Math.ceil(this.items.length / this.itemsPerView);
        this.autoplayInterval = null;

        this.init();
    }

    getItemsPerView() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        if (window.innerWidth <= 992) return 3;
        return 4;
    }

    init() {
        this.createDots();
        this.startAutoplay();

        // Update on window resize
        window.addEventListener('resize', () => {
            const newItemsPerView = this.getItemsPerView();
            if (newItemsPerView !== this.itemsPerView) {
                this.itemsPerView = newItemsPerView;
                this.totalSlides = Math.ceil(this.items.length / this.itemsPerView);
                this.currentIndex = 0;
                this.updateCarousel();
                this.createDots();
            }
        });
    }

    createDots() {
        if (!this.dotsContainer) return;

        this.dotsContainer.innerHTML = '';

        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');

            dot.addEventListener('click', () => {
                this.currentIndex = i;
                this.updateCarousel();
                this.resetAutoplay();
            });

            this.dotsContainer.appendChild(dot);
        }
    }

    updateCarousel() {
        const translateX = -(this.currentIndex * 100);
        this.track.style.transform = `translateX(${translateX}%)`;

        // Update dots
        if (this.dotsContainer) {
            const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateCarousel();
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.next();
        }, 4000);
    }

    resetAutoplay() {
        clearInterval(this.autoplayInterval);
        this.startAutoplay();
    }
}

// Initialize carousel
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');

if (carouselTrack && carouselDots) {
    new Carousel(carouselTrack, carouselDots);
}

// ========================================
// Accordion Functionality (Noticias Section)
// ========================================
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-accordion');
        const content = document.getElementById(targetId);
        const isActive = button.classList.contains('active');

        // Close all accordions
        accordionButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current accordion
        if (!isActive) {
            button.classList.add('active');
            content.classList.add('active');
        }
    });
});

// ========================================
// Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate checkbox
        if (!data.acepto) {
            alert('Por favor acepta los términos para continuar.');
            return;
        }

        // Here you would typically send the data to a server
        console.log('Form data:', data);

        // Show success message
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

        // Reset form
        contactForm.reset();

        // In a real implementation, you would do something like:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        })
        .catch(error => {
            alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
            console.error('Error:', error);
        });
        */
    });
}

// ========================================
// Animations on Scroll
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
const animatedElements = document.querySelectorAll('.mvv-card, .accordion-item, .documento-card, .carousel-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Utility Functions
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add debounced scroll listener
const debouncedScroll = debounce(() => {
    activateNavLink();
}, 10);

window.addEventListener('scroll', debouncedScroll);
