"use strict";
// Q2 - Employee Status Dashboard (XMLHttpRequest + PATCH)
// Run json-server with: json-server --watch q2_db.json --port 3002
if (typeof document !== 'undefined') {
  (function(){
    const BASE = 'http://localhost:3002/employees';
    const tbl = document.getElementById('tbl');
    const err = document.getElementById('error');
    function showError(msg){ err.textContent = msg; setTimeout(()=> err.textContent='', 4000); }
    function createTable(items){
      let html = '<table><thead><tr><th>Name</th><th>Status</th><th>Toggle</th></tr></thead><tbody>';
      items.forEach(e => {
        html += `<tr data-id="${e.id}"><td>${e.name}</td><td class="status">${e.status}</td><td><button class="tog">Toggle</button></td></tr>`;
      });
      html += '</tbody></table>';
      tbl.innerHTML = html;
      tbl.querySelectorAll('.tog').forEach(b=> b.addEventListener('click', onToggle));
    }
    function fetchAll(){
      const xr = new XMLHttpRequest();
      xr.open('GET', BASE);
      xr.onload = function(){ if (xr.status>=200 && xr.status<300) createTable(JSON.parse(xr.responseText)); else showError('Failed to load'); };
      xr.onerror = ()=> showError('Network error');
      xr.send();
    }
    function onToggle(e){
      const row = e.target.closest('tr');
      const id = row.getAttribute('data-id');
      const statusEl = row.querySelector('.status');
      const old = statusEl.textContent;
      const next = old === 'active' ? 'inactive' : 'active';
      // Optimistically update UI
      statusEl.textContent = next;
      const xr = new XMLHttpRequest();
      xr.open('PATCH', BASE + '/' + id);
      xr.setRequestHeader('Content-Type', 'application/json');
      xr.onload = function(){
        if (!(xr.status>=200 && xr.status<300)){
          // revert
          statusEl.textContent = old;
          showError('Failed to update status');
        }
      };
      xr.onerror = function(){ statusEl.textContent = old; showError('Network error'); };
      xr.send(JSON.stringify({ status: next }));
    }
    fetchAll();
  })();
} else { console.log('q2_employee_dashboard.js is a browser script.'); }
