"use strict";
// Q6 - Registration with duplicate check (Axios)
// Run: json-server --watch q6_db.json --port 3006
if (typeof document !== 'undefined') {
  (function(){
    const BASE = 'http://localhost:3006/users';
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const msg = document.getElementById('msg');
    const btn = document.getElementById('reg');
    function setMsg(t, cls){ msg.innerHTML = `<span class="${cls}">${t}</span>`; }
    btn.addEventListener('click', async ()=>{
      const name = nameEl.value.trim();
      const email = emailEl.value.trim();
      if (!name || !email) return setMsg('Enter name and email', 'err');
      try{
        // check duplicate
        const res = await axios.get(BASE + '?email=' + encodeURIComponent(email));
        if (res.data && res.data.length>0){ setMsg('Email already registered.', 'err'); return; }
        // otherwise create
        const create = await axios.post(BASE, { name, email });
        if (create.status >=200 && create.status < 300){ setMsg('Registered successfully!', 'ok'); nameEl.value=''; emailEl.value=''; }
      } catch(e){ setMsg('Error communicating with server', 'err'); }
    });
  })();
} else { console.log('q6_registration.js is a browser script.'); }
