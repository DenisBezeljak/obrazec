// Function to show the appropriate form
function showForm(formType) {
    document.getElementById('welcome-container').style.display = 'none';

    if (formType === 'login') {
        document.getElementById('login-form').style.display = 'block';
        clearLoginFields();
    } else if (formType === 'register') {
        document.getElementById('register-form').style.display = 'block';
        clearRegisterFields();
    }
}

// Function to go back to the welcome screen
function goBack() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('welcome-container').style.display = 'block';
}

// Preset credentials
const presetEmail = 'user@example.com';
const presetPassword = 'password123';

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check for specific credentials
    if (email === presetEmail && password === presetPassword) {
        goToDatingApp(); // Redirect to the dating app section
        Swal.fire({
            title: 'Login Successful!',
            text: 'Welcome to the dating app!',
            icon: 'success',
            confirmButtonText: 'Okay'
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid credentials. Please try again.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
        highlightErrorFields();
    }
}

// Function to redirect to the dating app section
function goToDatingApp() {
    document.getElementById('login-form').style.display = 'none'; // Hide login form
    document.getElementById('dating-app').style.display = 'block'; // Show dating app section
}

// Function to clear login fields
function clearLoginFields() {
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}

// Function to clear registration fields
function clearRegisterFields() {
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-confirm-password').value = '';
}

// Function to handle registration form submission
function handleRegister(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Check if passwords match
    if (password === confirmPassword) {
        Swal.fire({
            title: 'Registration Successful!',
            text: 'Welcome to the dating app!',
            icon: 'success',
            confirmButtonText: 'Okay'
        });
        clearRegisterFields();
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Passwords do not match. Please try again.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
        highlightErrorFields();
    }
}

// Function to highlight error fields (optional)
function highlightErrorFields() {
    document.querySelectorAll('input').forEach(input => {
        if (input.value === '') {
            input.style.borderColor = 'red';
        }
    });
}
