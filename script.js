// script.js
function toggleMenu() {
    const menu = document.getElementById('dropdown-links');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default jump behavior
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

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

function toggleMenu() {
    const menu = document.getElementById('dropdown-links');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.style.height = '0';
    } else {
        menu.classList.add('show');
        menu.style.height = menu.scrollHeight + 'px';
    }
}
