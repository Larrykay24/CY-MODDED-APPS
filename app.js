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
firebase.initializeApp(firebaseConfig);

// Function to sign in with Google and handle the popup
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Access token. You can use it to access the Google API.
            const credential = result.credential;
            const token = credential.accessToken;

            // The signed-in user info
            const user = result.user;

            // Replace the user icon with the user's Google profile picture
            const userIcon = document.getElementById('userIcon');
            userIcon.src = user.photoURL;
            userIcon.alt = user.displayName;

            console.log('Access Token:', token);
            console.log('User:', user);

            // Optionally, you could update the title or show a welcome message
            alert(`Welcome ${user.displayName}!`);
        })
        .catch((error) => {
            // Handle Errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = error.credential;

            console.error('Error during sign-in:', errorCode, errorMessage);
        });
}

// Check if the user is already signed in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, show the Google profile picture
        const userIcon = document.getElementById('userIcon');
        userIcon.src = user.photoURL;
        userIcon.alt = user.displayName;

        console.log('User already signed in:', user.displayName);
    } else {
        // No user is signed in, show the default user icon
        const userIcon = document.getElementById('userIcon');
        userIcon.src = 'user.png';
        userIcon.alt = 'User Icon';

        console.log('No user signed in');
    }
});
