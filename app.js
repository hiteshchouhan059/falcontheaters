document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add staggered delay to hero fade-up elements
    const heroElements = document.querySelectorAll('.hero .fade-up');
    heroElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.15}s`;
    });

    // Initial query
    document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

    // Generate Sparkles
    const sparklesContainer = document.getElementById('sparkles-container');
    if (sparklesContainer) {
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            // Random positioning
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            
            // Random size between 2px and 6px
            const size = Math.random() * 4 + 2;
            
            // Random animation duration between 2s and 5s
            const duration = Math.random() * 3 + 2;
            
            // Random delay
            const delay = Math.random() * 5;
            
            sparkle.style.top = `${top}%`;
            sparkle.style.left = `${left}%`;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.setProperty('--duration', `${duration}s`);
            sparkle.style.animationDelay = `${delay}s`;
            
            sparklesContainer.appendChild(sparkle);
        }
    }

    // Contact Form WhatsApp Logic
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const phone = document.getElementById('form-phone').value;
            const occasion = document.getElementById('form-occasion').value;
            const date = document.getElementById('form-date').value;
            const guests = document.getElementById('form-guests').value;
            const message = document.getElementById('form-message').value;

            const waMessage = `Hello Blings & Celebrations! I would like to enquire about a booking:\nName: ${name}\nPhone: ${phone}\nOccasion: ${occasion}\nDate: ${date}\nGuests: ${guests}\nMessage: ${message}`;
            
            const encodedMessage = encodeURIComponent(waMessage);
            const waUrl = `https://wa.me/919743999547?text=${encodedMessage}`;
            window.open(waUrl, '_blank');
        });
    }

    // Floating WhatsApp Tooltip Logic
    const waTooltip = document.getElementById('wa-tooltip');
    if (waTooltip) {
        setTimeout(() => {
            waTooltip.classList.add('show');
            setTimeout(() => {
                waTooltip.classList.remove('show');
            }, 3000);
        }, 1000);
    }
});
