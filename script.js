/* --- NAVIGATION MENU LOGIC --- */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('toggle');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('toggle');
    });
});

/* --- MODAL LOGIC (Pop-ups) --- */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Stop scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Resume scrolling
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

/* --- PERMANENT SCROLL ANIMATIONS (Re-triggerable) --- */

const observerOptions = {
    threshold: 0.15, // Wait until 15% of the item is visible
    rootMargin: "0px 0px -20px 0px" 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // If element is in view, animate it IN
        if (entry.isIntersecting) {
            entry.target.classList.add('show-zoom');
        } 
        // If element leaves view, animate it OUT (Reset)
        else {
            entry.target.classList.remove('show-zoom');
        }
    });
}, observerOptions);

// Select elements to animate
const hiddenElements = document.querySelectorAll('.hidden-zoom');
const projectCards = document.querySelectorAll('.project-card');
const sectionHeaders = document.querySelectorAll('.section-header');
const texts = document.querySelectorAll('.article-content p, .article-content li'); // Animate bio text too

// Start watching them
hiddenElements.forEach((el) => observer.observe(el));
projectCards.forEach((el) => observer.observe(el));
sectionHeaders.forEach((el) => {
    el.classList.add('hidden-zoom'); 
    observer.observe(el);
});
texts.forEach((el) => {
    el.classList.add('hidden-zoom'); // Make bio text animate too
    observer.observe(el);
});
