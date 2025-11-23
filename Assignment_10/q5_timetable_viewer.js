"use strict";
// Q5 - Timetable Viewer (Fetch + Dynamic Rendering)
// Run: json-server --watch q5_db.json --port 3005
if (typeof document !== 'undefined') {
  (function(){
    const BASE = 'http://localhost:3005/timetable';
    const sel = document.getElementById('day');
    const list = document.getElementById('list');
    function render(items){
      if (!items || items.length === 0) return list.innerHTML = '<div>No classes today.</div>';
      list.innerHTML = items.map(it => `<div class="entry"><strong>${it.subject}</strong> <div>${it.faculty}</div> <div>${it.time}</div></div>`).join('');
    }
    function loadDay(day){
      list.innerHTML = '<div>Loading...</div>';
      fetch(BASE + '?day=' + encodeURIComponent(day)).then(r=> r.ok ? r.json() : Promise.reject('fail')).then(render).catch(()=> list.innerHTML = '<div style="color:red">Failed to load</div>');
    }
    sel.addEventListener('change', ()=> loadDay(sel.value));
    loadDay(sel.value);
  })();
} else { console.log('q5_timetable_viewer.js is a browser script.'); }
