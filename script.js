// Get necessary DOM elements
const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Toggle sticky header on scroll
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 60);
});

// Toggle menu on click
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("open");
    }
});

// Close menu when clicking navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("open");
    });
});