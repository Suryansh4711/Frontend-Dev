"use strict";
// Q4 - Multi-API Dashboard (Fetch + Promise.all)
// Run: json-server --watch q4_db.json --port 3004
if (typeof document !== 'undefined') {
  (function(){
    const base = 'http://localhost:3004';
    const usersEl = document.getElementById('users');
    const ordersEl = document.getElementById('orders');
    const productsEl = document.getElementById('products');
    const warn = document.getElementById('warn');
    // placeholder skeletons are already in HTML
    Promise.all([
      fetch(base + '/users').then(r=> r.ok ? r.json() : Promise.reject('users')),
      fetch(base + '/orders').then(r=> r.ok ? r.json() : Promise.reject('orders')),
      fetch(base + '/products').then(r=> r.ok ? r.json() : Promise.reject('products'))
    ]).then(([users, orders, products]) => {
      usersEl.innerHTML = `<h4>Users</h4><div>${users.length}</div>`;
      ordersEl.innerHTML = `<h4>Orders</h4><div>${orders.length}</div>`;
      productsEl.innerHTML = `<h4>Products</h4><div>${products.length}</div>`;
    }).catch((e)=>{
      // try to still render what we can
      warn.innerHTML = '<div class="warn">Some data could not be loaded.</div>';
      // attempt each independently
      fetch(base + '/users').then(r=> r.json()).then(d=> usersEl.innerHTML = `<h4>Users</h4><div>${d.length}</div>`).catch(()=>{});
      fetch(base + '/orders').then(r=> r.json()).then(d=> ordersEl.innerHTML = `<h4>Orders</h4><div>${d.length}</div>`).catch(()=>{});
      fetch(base + '/products').then(r=> r.json()).then(d=> productsEl.innerHTML = `<h4>Products</h4><div>${d.length}</div>`).catch(()=>{});
    });
  })();
} else { console.log('q4_multi_api_dashboard.js is a browser script.'); }
