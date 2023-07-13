document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.querySelector('.navigation a:first-child');
    homeLink.addEventListener('click', handleHomeLinkClick);
});

// Handle the click event on the home link
function handleHomeLinkClick(event) {
    const currentPage = window.location.href;
    const landingPage = 'index.html';

    if (currentPage.includes(landingPage)) {
        event.preventDefault();
        // Display a message or perform any desired action when already on the landing page
    }
}

// Add an event listener to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        const linkPath = link.getAttribute('href');

        if (currentPage.includes(linkPath)) {
            link.classList.add('active');
        }
    });
});


// Get the header element
const header = document.querySelector('.rectangle');

// Add scroll event listener
window.addEventListener('scroll', () => {
    // Check the scroll position
    if (window.scrollY > 0) {
        // Add the 'scrolled' class to the header
        header.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class from the header
        header.classList.remove('scrolled');
    }
});
