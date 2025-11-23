"use strict";
// Q4 - Theme Switcher Using Attribute Manipulation
// Adds data-theme attribute to <body> and uses setAttribute to apply classes

if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Theme Switcher</h3>
        <button data-theme="light" class="themeBtn">Light</button>
        <button data-theme="dark" class="themeBtn">Dark</button>
        <button data-theme="blue" class="themeBtn">Blue</button>
        <div id="demoBox" style="margin-top:12px;padding:12px;border:1px solid #ccc">Theme demo area</div>
    `;
    document.body.appendChild(container);

    const style = document.createElement('style');
    style.textContent = `
        body[data-theme="light"] { background: #fff; color: #000 }
        body[data-theme="dark"] { background: #111; color: #eee }
        body[data-theme="blue"] { background: #e6f0ff; color: #003366 }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('.themeBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            // Use setAttribute to set class on body and data-theme
            document.body.setAttribute('data-theme', theme);
            document.body.className = '';
            document.body.classList.add('theme-' + theme);
            // Save current theme in custom attribute data-theme already done
            console.log('Theme changed to', theme);
        });
    });

    // Initialize default
    document.body.setAttribute('data-theme', 'light');
} else {
    console.log('q4_theme_switcher.js is a browser script. Open in browser to run.');
}