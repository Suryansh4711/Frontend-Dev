"use strict";
// Q5 - Movie Ticket Booking (Objects + RegExp)
// Validate name (alphabets), email, seats (1-10), then create booking object

function validateName(name) { return /^[A-Za-z ]+$/.test(name); }
function validateEmail(email) { return /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email); }
function validateSeats(seats) { return Number.isInteger(seats) && seats >= 1 && seats <= 10; }

console.log('=== Q5 - Movie Ticket Booking ===');

// Example Node-friendly function
function bookTicket(name, email, seats) {
    try {
        if (!validateName(name)) throw new Error('Invalid name');
        if (!validateEmail(email)) throw new Error('Invalid email');
        if (!validateSeats(seats)) throw new Error('Seats must be integer between 1 and 10');

        const booking = { name, email, seats };
        console.log('Booking successful! Ticket details:');
        console.table(booking);
        return booking;
    } catch (err) {
        console.log('Booking failed:', err.message);
        return null;
    }
}

// Example
bookTicket('Mina Rao', 'mina@example.com', 3);
bookTicket('Bad User 123', 'bademail', 15);

// Browser version: build a simple form if document exists
if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = `
        <form id="bookingForm">
            <label>Name: <input id="bname" type="text"></label><div id="err-name" style="color:red"></div>
            <label>Email: <input id="bemail" type="text"></label><div id="err-email" style="color:red"></div>
            <label>Seats: <input id="bseats" type="number" min="1" max="10"></label><div id="err-seats" style="color:red"></div>
            <button type="submit">Book</button>
        </form>
        <pre id="ticket"></pre>
    `;
    document.body.appendChild(div);
    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('bname').value.trim();
        const email = document.getElementById('bemail').value.trim();
        const seats = parseInt(document.getElementById('bseats').value, 10);

        let ok = true;
        if (!validateName(name)) { document.getElementById('err-name').textContent = 'Invalid name'; ok = false; } else document.getElementById('err-name').textContent = '';
        if (!validateEmail(email)) { document.getElementById('err-email').textContent = 'Invalid email'; ok = false; } else document.getElementById('err-email').textContent = '';
        if (!validateSeats(seats)) { document.getElementById('err-seats').textContent = 'Seats 1-10 only'; ok = false; } else document.getElementById('err-seats').textContent = '';

        if (ok) {
            const booking = { name, email, seats };
            document.getElementById('ticket').textContent = JSON.stringify(booking, null, 2);
        }
    });
}

if (typeof module !== 'undefined' && module.exports) module.exports = { bookTicket };
