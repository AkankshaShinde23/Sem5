function login() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple email validation using a regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // For demonstration purposes, we use hardcoded credentials.
    // In a real application, you should never hardcode credentials in the frontend.
    const validUsername = 'admin';
    const validPassword = 'password';

    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Invalid email format';
    } else if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to a different page or perform other actions
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
}
