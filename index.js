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
    } else {
        alert('Invalid credentials. Please try again.');
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
}

// Function to highlight error fields (optional)
function highlightErrorFields() {
    document.getElementById('login-email').style.borderColor = 'red';
    document.getElementById('login-password').style.borderColor = 'red';
}

// Function to update age range label
function updateAgeLabel(value) {
    const minAge = 18;
    const rangeLabel = document.getElementById('age-range-label');
    rangeLabel.textContent = `${minAge} - ${value}`;
}

// Handle registration form submission (dummy implementation)
function handleRegister(event) {
    event.preventDefault();
    // Implement registration logic here
    alert('Registration submitted!');
}
