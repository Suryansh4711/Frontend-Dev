"use strict";
// Q6 - Real-Time Table Filter Using input Event
// Builds a student table and filters rows case-insensitively on input

if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.innerHTML = `
        <h3>Student Table Filter</h3>
        <input id="filterInput" placeholder="Search students..." />
        <div id="noResults" style="display:none;color:red;margin-top:8px">No results found</div>
        <table id="studentTable" border="1" style="margin-top:8px;border-collapse:collapse">
            <thead><tr><th>Name</th><th>Branch</th><th>CGPA</th></tr></thead>
            <tbody>
                <tr><td>Amit</td><td>CS</td><td>8.5</td></tr>
                <tr><td>Sara</td><td>IT</td><td>9.0</td></tr>
                <tr><td>Kiran</td><td>EC</td><td>7.2</td></tr>
                <tr><td>Neha</td><td>ME</td><td>8.0</td></tr>
                <tr><td>Rahul</td><td>CS</td><td>7.8</td></tr>
            </tbody>
        </table>
    `;
    document.body.appendChild(container);

    const input = document.getElementById('filterInput');
    const tbody = document.querySelector('#studentTable tbody');
    const noRes = document.getElementById('noResults');

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        let visibleCount = 0;
        Array.from(tbody.rows).forEach(row => {
            const text = row.textContent.toLowerCase();
            const match = text.indexOf(q) !== -1;
            row.style.display = match ? '' : 'none';
            if (match) visibleCount++;
            // Highlight matched text using simple approach: add background to row when match
            row.style.background = match && q ? 'rgba(255,255,0,0.4)' : '';
        });
        noRes.style.display = visibleCount === 0 ? '' : 'none';
    });
} else {
    console.log('q6_real_time_table_filter.js is a browser script. Open in browser to run.');
}
