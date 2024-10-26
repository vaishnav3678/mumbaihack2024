function toggleForm(formName) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginToggle = document.getElementById('login-toggle');
    const registerToggle = document.getElementById('register-toggle');

    if (formName === 'login') {
        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';
        loginToggle.classList.add('active');
        registerToggle.classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
        loginToggle.classList.remove('active');
        registerToggle.classList.add('active');
    }
}

toggleForm('login');

function handleRegister(event) {
    event.preventDefault();
    console.log("User registered successfully");

    alert("Registration successful! Redirecting to login.");
    toggleForm('login');
}

function handleLogin(event) {
    event.preventDefault();

    console.log("User logged in successfully");

    window.location.href = 'first.html'; 
}
