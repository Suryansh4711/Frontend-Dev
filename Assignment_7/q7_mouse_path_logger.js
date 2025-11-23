"use strict";
// Q7 - Detect Mouse Path & Coordinates Logger
// Creates a 400x400 box, logs clientX/clientY, and drops red dot on double-click

if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Mouse Path & Coordinates Logger</h3>
        <div id="box" style="width:400px;height:400px;border:2px solid #333;position:relative;user-select:none"></div>
        <div id="coords" style="margin-top:8px">Move inside the box to see clientX, clientY</div>
    `;
    document.body.appendChild(container);

    const box = document.getElementById('box');
    const coords = document.getElementById('coords');

    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        coords.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}  —  relativeX: ${Math.round(x)}, relativeY: ${Math.round(y)}`;
    });

    box.addEventListener('dblclick', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const dot = document.createElement('div');
        dot.style.width = '8px';
        dot.style.height = '8px';
        dot.style.background = 'red';
        dot.style.borderRadius = '50%';
        dot.style.position = 'absolute';
        dot.style.left = (x - 4) + 'px';
        dot.style.top = (y - 4) + 'px';
        box.appendChild(dot);
    });
} else {
    console.log('q7_mouse_path_logger.js is a browser script. Open in browser to run.');
}
