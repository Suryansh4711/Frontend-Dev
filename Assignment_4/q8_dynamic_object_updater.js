"use strict";
// Q8 - Dynamic Object Updater
// user object updated via a form; displays updated object

const user = { name: 'John', email: 'john@mail.com', age: 21 };

console.log('=== Q8 - Dynamic Object Updater ===');
console.log('Initial user object:', user);

if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = `
        <form id="userForm">
            <label>Name: <input id="u-name" value="${user.name}"></label><br/>
            <label>Email: <input id="u-email" value="${user.email}"></label><br/>
            <label>Age: <input id="u-age" type="number" value="${user.age}"></label><br/>
            <button type="submit">Update</button>
        </form>
        <pre id="userDisplay"></pre>
    `;
    document.body.appendChild(div);
    const display = document.getElementById('userDisplay');
    function refreshDisplay() { display.textContent = JSON.stringify(user, null, 2); }
    refreshDisplay();

    document.getElementById('userForm').addEventListener('submit', e => {
        e.preventDefault();
        user.name = document.getElementById('u-name').value.trim();
        user.email = document.getElementById('u-email').value.trim();
        user.age = Number(document.getElementById('u-age').value);
        refreshDisplay();
    });
} else {
    console.log('To update the user object in real time, include this script in a browser.');
}

// Export user for Node tests
if (typeof module !== 'undefined' && module.exports) module.exports = { user };
