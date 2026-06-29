// Welcome message
window.onload = function () {
    alert("Welcome to Soul💖Union Matrimony!");
};

// Highlight the current page in the navigation
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.fontWeight = "bold";
        link.style.color = "black";
    }
});

// Hero button (if you add one later)
const heroButton = document.getElementById("heroBtn");

if (heroButton) {
    heroButton.addEventListener("click", function () {
        window.location.href = "registration.html";
        heroButton.style.backgroundColor="blue";
    });
}