"use strict";
// Q8 - Custom Dropdown Using Only JavaScript (No <select> Tag)
// Button toggles options, clicking outside closes (use capture phase), option updates button text

if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Custom Dropdown</h3>
        <div class="dropdown" style="display:inline-block;position:relative">
            <button id="ddBtn">Select Option ▾</button>
            <ul id="ddList" style="position:absolute;left:0;top:100%;background:#fff;border:1px solid #ccc;display:none;list-style:none;padding:6px;margin:0">
                <li class="opt">Option 1</li>
                <li class="opt">Option 2</li>
                <li class="opt">Option 3</li>
                <li class="opt">Option 4</li>
                <li class="opt">Option 5</li>
            </ul>
        </div>
    `;
    document.body.appendChild(container);

    const btn = document.getElementById('ddBtn');
    const list = document.getElementById('ddList');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        list.style.display = list.style.display === 'none' ? 'block' : 'none';
    });

    // Clicking an option updates the button text
    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('opt')) {
            btn.textContent = e.target.textContent + ' ▾';
            list.style.display = 'none';
        }
    });

    // Use capturing phase to close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        // capture phase handler closes the dropdown
        if (list.style.display === 'block') list.style.display = 'none';
    }, true);

} else {
    console.log('q8_custom_dropdown.js is a browser script. Open in browser to run.');
}
