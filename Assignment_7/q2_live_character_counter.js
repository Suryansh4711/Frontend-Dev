"use strict";
// Q2 - Live Character Counter with Warning Behavior
// Textarea with max 100 chars; color changes at thresholds and prevents typing beyond limit

if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Live Character Counter</h3>
        <textarea id="counterTxt" rows="4" cols="50" placeholder="Type... (max 100)"></textarea>
        <div><span id="remaining">100</span> characters remaining</div>
        <button id="resetBtn">Reset</button>
    `;
    document.body.appendChild(container);

    const txt = document.getElementById('counterTxt');
    const rem = document.getElementById('remaining');
    const resetBtn = document.getElementById('resetBtn');
    const MAX = 100;

    txt.addEventListener('keydown', (e) => {
        const current = txt.value.length;
        if (current >= MAX && e.key !== 'Backspace' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            // prevent further typing
            e.preventDefault();
            rem.textContent = 0;
            rem.style.color = 'red';
            return;
        }
    });

    txt.addEventListener('input', () => update());

    function update() {
        let remaining = MAX - txt.value.length;
        if (remaining < 0) remaining = 0;
        rem.textContent = remaining;
        if (remaining <= 0) {
            rem.style.color = 'red';
        } else if (remaining <= 20) {
            rem.style.color = 'orange';
        } else {
            rem.style.color = 'black';
        }
    }

    resetBtn.addEventListener('click', () => {
        txt.value = '';
        update();
    });

    update();
} else {
    console.log('q2_live_character_counter.js is a browser script. Open in browser to run.');
}