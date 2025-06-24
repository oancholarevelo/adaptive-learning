// Dark mode toggle
const darkModeButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const darkModeImages = document.querySelectorAll('.dark-mode-image');

darkModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = '🌙';
        darkModeImages.forEach(image => {
            image.src = image.getAttribute('data-dark-src');
        });
    } else {
        darkModeButton.textContent = '☀️';
        darkModeImages.forEach(image => {
            image.src = image.getAttribute('data-light-src');
        });
    }
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})