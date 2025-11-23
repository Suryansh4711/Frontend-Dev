"use strict";
// Q2 - Student Form Validator (Forms + RegExp)
// Provides validation functions and builds a simple browser form when run in DOM.

function validateName(name) {
    // Only alphabets (allow spaces for full names)
    return /^[A-Za-z ]+$/.test(name);
}

function validateEmail(email) {
    // Basic email pattern
    return /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email);
}

function validatePhone(phone) {
    // Exactly 10 digits
    return /^\d{10}$/.test(phone);
}

function validatePassword(password) {
    // At least 1 uppercase, 1 number, 1 special char and min length 8
    return /(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}/.test(password);
}

console.log('=== Q2 - Student Form Validator ===');

// Example test (Node-friendly)
const sample = {
    name: 'Amit Kumar',
    email: 'amit@example.com',
    phone: '9876543210',
    password: 'Secure@123'
};

console.log('Sample validation results:');
console.log('Name valid:', validateName(sample.name));
console.log('Email valid:', validateEmail(sample.email));
console.log('Phone valid:', validatePhone(sample.phone));
console.log('Password valid:', validatePassword(sample.password));

// Browser UI builder (if running in browser)
if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.innerHTML = `
        <form id="studentForm" style="max-width:400px">
            <label>Name: <input type="text" name="name" id="name"></label><div id="err-name" style="color:red"></div>
            <label>Email: <input type="text" name="email" id="email"></label><div id="err-email" style="color:red"></div>
            <label>Phone: <input type="text" name="phone" id="phone"></label><div id="err-phone" style="color:red"></div>
            <label>Password: <input type="password" name="password" id="password"></label><div id="err-password" style="color:red"></div>
            <button type="submit">Submit</button>
        </form>
    `;
    document.body.appendChild(container);

    const form = document.getElementById('studentForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;

        // Validate and show red/green border + message
        const checks = [
            { ok: validateName(name), el: 'name', msg: 'Name must contain only letters' },
            { ok: validateEmail(email), el: 'email', msg: 'Invalid email format' },
            { ok: validatePhone(phone), el: 'phone', msg: 'Phone must be 10 digits' },
            { ok: validatePassword(password), el: 'password', msg: 'Password must be 8+ chars with uppercase, number, special' }
        ];

        checks.forEach(c => {
            const input = document.getElementById(c.el);
            const err = document.getElementById('err-' + c.el);
            if (!c.ok) {
                input.style.border = '2px solid red';
                err.textContent = c.msg;
            } else {
                input.style.border = '2px solid green';
                err.textContent = '';
            }
        });

        if (checks.every(c => c.ok)) alert('Form valid!');
    });
}

// Export validators for tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateName, validateEmail, validatePhone, validatePassword };
}
