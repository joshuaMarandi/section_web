let currentSection = 0;
const totalSections = document.querySelectorAll('.section').length;
const scrollWrapper = document.querySelector('.scroll-wrapper');

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll Down
        currentSection = Math.min(currentSection + 1, totalSections - 1);
    } else {
        // Scroll Up
        currentSection = Math.max(currentSection - 1, 0);
    }

    scrollToSection();
});


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
