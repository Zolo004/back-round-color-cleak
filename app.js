let themeSwitcherBtn = document.getElementById("themeSwitcher");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

themeSwitcherBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.removeItem("theme");
    }
});
