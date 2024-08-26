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

// app.js

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKF8svzv88Tf461mgNSg00q8bmpozsn8g",
    authDomain: "cy-modded-apps.firebaseapp.com",
    projectId: "cy-modded-apps",
    storageBucket: "cy-modded-apps.appspot.com",
    messagingSenderId: "409674040256",
    appId: "1:409674040256:web:b03f1fa9c2a4ae3c2d3e25",
    measurementId: "G-XRFF878HZ0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            // Update UI: Replace the user icon with the user's profile picture
            document.getElementById('userIcon').src = user.photoURL;
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during sign in:', errorCode, errorMessage);
        });
}
