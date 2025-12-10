// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// FAQ Accordion
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');

    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// ===================================
// Scroll Animations
// ===================================
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

// Observe all cards
const cards = document.querySelectorAll('.city-card, .service-card, .feature-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// ===================================
// Phone Number Click Tracking
// ===================================
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Track phone clicks (can integrate with analytics)
        console.log('Phone number clicked:', link.href);

        // Optional: Send to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_call', {
                'event_category': 'engagement',
                'event_label': 'Phone Call Click'
            });
        }
    });
});

// ===================================
// CTA Button Hover Effect
// ===================================
const ctaButtons = document.querySelectorAll('.btn--primary');
ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// City Card Click Tracking
// ===================================
const cityCards = document.querySelectorAll('.city-card');
cityCards.forEach(card => {
    const cityName = card.querySelector('.city-card__title').textContent;
    const viewButton = card.querySelector('.city-card__btn');

    viewButton.addEventListener('click', (e) => {
        // Track city clicks
        console.log('City viewed:', cityName);

        // Optional: Send to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'city_view', {
                'event_category': 'engagement',
                'event_label': cityName
            });
        }
    });
});

// ===================================
// Parallax Effect for Hero
// ===================================
let lastScrollY = window.scrollY;
let ticking = false;

function updateParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.scrollY;
        const parallaxSpeed = 0.5;
        hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax();
        });
        ticking = true;
    }
});

// ===================================
// Service Card Interaction
// ===================================
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        const icon = this.querySelector('.service-card__icon');
        if (icon) {
            icon.style.animation = 'bounce 0.6s ease-in-out';
        }
    });

    card.addEventListener('mouseleave', function () {
        const icon = this.querySelector('.service-card__icon');
        if (icon) {
            icon.style.animation = '';
        }
    });
});

// Add bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(-5deg); }
        50% { transform: scale(1.15) rotate(5deg); }
        75% { transform: scale(1.1) rotate(-5deg); }
    }
`;
document.head.appendChild(style);

// ===================================
// Loading Animation Complete
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('LocksmithsKansas.com loaded successfully');
});

// ===================================
// Mobile Menu Toggle (if needed later)
// ===================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}

// ===================================
// Performance Optimization
// ===================================
// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
