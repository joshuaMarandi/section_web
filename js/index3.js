// script.js

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const scrollPos = window.scrollY;
        const sectionTop = section.offsetTop;

        // Calculate the position of each section relative to the scroll
        if (scrollPos > sectionTop - window.innerHeight) {
            const distance = scrollPos - sectionTop;
            section.style.transform = `translateX(${distance}px)`;
        }
    });
});
