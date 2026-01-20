// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#060c18';
        nav.style.padding = '1rem 10%';
    } else {
        nav.style.background = 'var(--primary)';
        nav.style.padding = '1.5rem 10%';
    }
});

// Form Submission (Demo)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting MB Group. Our representative will call you shortly.');
});
