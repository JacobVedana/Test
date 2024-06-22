document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    const themeToggle = document.getElementById("theme-toggle");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const targetInfo = document.getElementById(targetId);

            if (targetInfo.style.display === "none" || targetInfo.style.display === "") {
                targetInfo.style.display = "block";
                button.textContent = "Less Info";
            } else {
                targetInfo.style.display = "none";
                button.textContent = "More Info";
            }
        });
    });

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const currentTheme = document.body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
        themeToggle.textContent = currentTheme;
    });
});