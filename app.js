document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');
    const body = document.body;
    let isDarkMode = false;

    // Load saved mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
        isDarkMode = true;
    }

    modeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            body.classList.add('dark-mode');
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('show');
        searchInput.focus(); // Focus on the input when it's shown
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');

    // Toggle the navbar menu when the button is clicked
    toggleButton.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');

        // Change the button icon between bars and X
        if (navbarMenu.classList.contains('active')) {
            toggleButton.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});
            
