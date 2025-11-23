"use strict";
// Q3 - Multi-Step Form with Next/Back & Validation
// 3 steps: Name, Email, Password. Next only proceeds when valid. Back navigates back.

if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Multi-Step Form</h3>
        <div id="stepContainer"></div>
    `;
    document.body.appendChild(container);

    const steps = [
        { id: 'name', html: '<label>Name: <input id="nameInput"></label><div id="err-name" style="color:red"></div>' },
        { id: 'email', html: '<label>Email: <input id="emailInput"></label><div id="err-email" style="color:red"></div>' },
        { id: 'password', html: '<label>Password: <input id="passInput" type="password"></label><div id="err-pass" style="color:red"></div>' }
    ];

    let current = 0;
    const state = {};
    const stepContainer = document.getElementById('stepContainer');

    function render() {
        const s = steps[current];
        stepContainer.innerHTML = `
            <div>${s.html}</div>
            <div style="margin-top:8px">
                ${current > 0 ? '<button id="backBtn">Back</button>' : ''}
                <button id="nextBtn">${current < steps.length -1 ? 'Next' : 'Finish'}</button>
            </div>
            <div id="summary" style="margin-top:12px"></div>
        `;
        attachHandlers();
    }

    function attachHandlers() {
        if (current > 0) document.getElementById('backBtn').addEventListener('click', () => { current--; render(); });
        document.getElementById('nextBtn').addEventListener('click', () => {
            if (validateCurrent()) {
                if (current === 0) state.name = document.getElementById('nameInput').value.trim();
                if (current === 1) state.email = document.getElementById('emailInput').value.trim();
                if (current === 2) state.password = document.getElementById('passInput').value;

                if (current < steps.length -1) { current++; render(); }
                else showSummary();
            }
        });

        // Prefill if state exists
        if (current === 0 && state.name) document.getElementById('nameInput').value = state.name;
        if (current === 1 && state.email) document.getElementById('emailInput').value = state.email;
        if (current === 2 && state.password) document.getElementById('passInput').value = state.password;
    }

    function validateCurrent() {
        let ok = true;
        if (current === 0) {
            const v = document.getElementById('nameInput').value.trim();
            if (!/^[A-Za-z ]+$/.test(v)) { document.getElementById('err-name').textContent = 'Enter valid name'; ok = false; }
            else document.getElementById('err-name').textContent = '';
        }
        if (current === 1) {
            const v = document.getElementById('emailInput').value.trim();
            if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(v)) { document.getElementById('err-email').textContent = 'Enter valid email'; ok = false; }
            else document.getElementById('err-email').textContent = '';
        }
        if (current === 2) {
            const v = document.getElementById('passInput').value;
            if (v.length < 6) { document.getElementById('err-pass').textContent = 'Password min 6 chars'; ok = false; }
            else document.getElementById('err-pass').textContent = '';
        }
        return ok;
    }

    function showSummary() {
        stepContainer.innerHTML = `<h4>Summary</h4><pre>${JSON.stringify(state, null, 2)}</pre>`;
    }

    render();
} else {
    console.log('q3_multi_step_form.js is a browser script. Open in browser to run.');
}