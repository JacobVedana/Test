document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");
    const themeToggle = document.getElementById("theme-toggle");

    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const currentTheme = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
        themeToggle.textContent = currentTheme;
    });
});