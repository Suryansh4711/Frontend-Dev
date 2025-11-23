"use strict";
// Q7 - Login Form Validation using RegExp
// Username: at least 5 chars
// Password: at least 8 chars, include number, uppercase, lowercase, special char

function validateUsername(username) {
    return typeof username === 'string' && username.length >= 5;
}

function validateLoginPassword(password) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}/.test(password);
}

console.log('=== Q7 - Login Validation ===');

// Example tests
console.log('Username "user" valid?', validateUsername('user'));
console.log('Username "admin123" valid?', validateUsername('admin123'));
console.log('Password "Weakpass" valid?', validateLoginPassword('Weakpass'));
console.log('Password "Strong1@" valid?', validateLoginPassword('Strong1@'));

// Browser simple form
if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = `
        <form id="loginForm">
            <label>Username: <input id="login-username" type="text"></label><div id="login-err-user" style="color:red"></div>
            <label>Password: <input id="login-password" type="password"></label><div id="login-err-pass" style="color:red"></div>
            <button type="submit">Login</button>
        </form>
        <div id="login-status"></div>
    `;
    document.body.appendChild(div);
    document.getElementById('loginForm').addEventListener('submit', e => {
        e.preventDefault();
        const user = document.getElementById('login-username').value;
        const pass = document.getElementById('login-password').value;
        let ok = true;
        if (!validateUsername(user)) { document.getElementById('login-err-user').textContent = 'Username must be at least 5 characters'; ok = false; } else document.getElementById('login-err-user').textContent = '';
        if (!validateLoginPassword(pass)) { document.getElementById('login-err-pass').textContent = 'Password is weak'; ok = false; } else document.getElementById('login-err-pass').textContent = '';
        document.getElementById('login-status').textContent = ok ? 'Login validation passed' : 'Validation failed';
    });
}

if (typeof module !== 'undefined' && module.exports) module.exports = { validateUsername, validateLoginPassword };
