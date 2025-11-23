"use strict";
// Q9 - Form Submit Blocker with preventDefault() and Live Errors
// Name (required), Email (required & must contain @), Password (min 6 chars)

if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Registration Form</h3>
        <form id="regForm" style="max-width:360px">
            <label>Name: <input id="name" name="name"></label><div id="err-name" style="color:red"></div>
            <label>Email: <input id="email" name="email" type="email"></label><div id="err-email" style="color:red"></div>
            <label>Password: <input id="password" name="password" type="password"></label><div id="err-pass" style="color:red"></div>
            <button type="submit">Submit</button>
        </form>
        <div id="status" style="color:green;margin-top:8px"></div>
    `;
    document.body.appendChild(container);

    const form = document.getElementById('regForm');
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const passEl = document.getElementById('password');
    const errName = document.getElementById('err-name');
    const errEmail = document.getElementById('err-email');
    const errPass = document.getElementById('err-pass');
    const status = document.getElementById('status');

    function validate() {
        let ok = true;
        if (!nameEl.value.trim()) { errName.textContent = 'Name required'; nameEl.style.border = '1px solid red'; ok = false; } else { errName.textContent = ''; nameEl.style.border = ''; }
        if (!emailEl.value.includes('@')) { errEmail.textContent = 'Valid email required'; emailEl.style.border = '1px solid red'; ok = false; } else { errEmail.textContent = ''; emailEl.style.border = ''; }
        if (passEl.value.length < 6) { errPass.textContent = 'Password min 6 chars'; passEl.style.border = '1px solid red'; ok = false; } else { errPass.textContent = ''; passEl.style.border = ''; }
        return ok;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // stop real submission
        status.textContent = '';
        if (validate()) {
            status.textContent = 'Form Submitted Successfully';
            form.reset();
        }
    });

    // On input, hide errors automatically
    [nameEl, emailEl, passEl].forEach(el => el.addEventListener('input', () => { validate(); status.textContent = ''; }));

} else {
    console.log('q9_form_submit_blocker.js is a browser script. Open in browser to run.');
}
