function setTheme(theme) {
    document.documentElement.className = theme;
    const themeIcon = document.getElementById('themeIcon');
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        document.cookie = "theme=light; max-age=31536000; path=/";
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        document.cookie = "theme=dark; max-age=31536000; path=/";
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const themePreference = getCookie('theme');
    if (themePreference) {
        setTheme(themePreference);
    } else {
        setTheme('dark');
    }

    const toggleButton = document.getElementById('themeToggleButton');
    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.className;
        if (currentTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
});
