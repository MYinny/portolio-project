// Toggle the navigation menu for small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Add event listener to toggle dropdown menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Add or remove 'show' class
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        const target = document.querySelector(this.getAttribute('href')); // Get the target section

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Close the dropdown menu after clicking a link (small screens only)
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show');
        }
    });
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('show');
    }
});