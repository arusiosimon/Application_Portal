// Registration form
const registrationForm = document.getElementById('registration-form');

if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        console.log('Full Name:', fullname);
        console.log('Email:', email);

        alert('Registration form submitted successfully!');
    });
}

// Login form
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Login email:', email);

        alert('Login successful!');
    });
}