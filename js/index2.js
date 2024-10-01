let currentSection = 0;
const totalSections = document.querySelectorAll('.section').length;
const scrollWrapper = document.querySelector('.scroll-wrapper');

// Handle wheel event for desktop
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll right
        currentSection = Math.min(currentSection + 1, totalSections - 1);
    } else {
        // Scroll left
        currentSection = Math.max(currentSection - 1, 0);
    }
    scrollToSection();
});

// Handle touch events for mobile devices
let touchStartX = 0;
let touchEndX = 0;

scrollWrapper.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

scrollWrapper.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchEndX < touchStartX) {
        // Swiped left (scroll right)
        currentSection = Math.min(currentSection + 1, totalSections - 1);
    } 
    if (touchEndX > touchStartX) {
        // Swiped right (scroll left)
        currentSection = Math.max(currentSection - 1, 0);
    }
    scrollToSection();
}

function scrollToSection() {
    const offset = currentSection * -100;
    scrollWrapper.style.transform = `translateX(${offset}vw)`;

    // Add animations to the current section
    document.querySelectorAll('.section').forEach((section, index) => {
        if (index === currentSection) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}
