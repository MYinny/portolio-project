// script.js
// Function to toggle the dropdown menu visibility
function toggleMenu() {
    const menu = document.getElementById('dropdown-links');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Attach the click event to the dropdown menu button
document.querySelector('.dropdown-menu').addEventListener('click', toggleMenu);


// Smooth scrolling for links (if pointing to sections within the same page)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hrefValue = this.getAttribute('href');
        if (hrefValue.startsWith('#')) {
            e.preventDefault(); // Prevent default behavior if it's a section link
            const targetId = hrefValue.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Highlight active link based on the visible section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 150) {
            // Highlight the corresponding nav link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});