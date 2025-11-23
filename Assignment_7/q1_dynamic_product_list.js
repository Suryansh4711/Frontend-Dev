"use strict";
// Q1 - Dynamic Product List Manager (Add, Edit, Delete - Event Delegation)
// This script builds a small UI when loaded in a browser and attaches event delegation on the <ul>.

if (typeof document !== 'undefined') {
    const app = document.createElement('div');
    app.innerHTML = `
        <h3>Product List Manager</h3>
        <input id="prodInput" placeholder="Enter product name" />
        <button id="addProd">Add</button>
        <ul id="productList" style="list-style:none;padding:0;margin-top:8px;border:1px solid #ddd;min-height:40px"></ul>
    `;
    document.body.appendChild(app);

    const prodInput = document.getElementById('prodInput');
    const addBtn = document.getElementById('addProd');
    const list = document.getElementById('productList');

    function createListItem(name) {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.style.padding = '6px';
        li.style.borderBottom = '1px solid #eee';
        li.innerHTML = `
            <span class="name">${name}</span>
            <button class="edit" style="margin-left:8px">Edit</button>
            <button class="delete" style="margin-left:4px">Delete</button>
        `;
        return li;
    }

    addBtn.addEventListener('click', () => {
        const val = prodInput.value.trim();
        if (!val) return;
        list.appendChild(createListItem(val));
        prodInput.value = '';
    });

    // Event delegation for Edit/Delete
    list.addEventListener('click', (e) => {
        const target = e.target;
        const li = target.closest('li');
        if (!li) return;
        if (target.classList.contains('delete')) {
            li.remove();
            return;
        }
        if (target.classList.contains('edit')) {
            enterEditMode(li);
            return;
        }
    });

    // Click outside saves edits (auto-save)
    document.addEventListener('click', (e) => {
        const editing = document.querySelector('.editing');
        if (!editing) return;
        if (!editing.contains(e.target)) {
            exitEditMode(editing, true);
        }
    });

    function enterEditMode(li) {
        if (li.classList.contains('editing')) return;
        li.classList.add('editing');
        const nameSpan = li.querySelector('.name');
        const current = nameSpan.textContent;
        nameSpan.innerHTML = `<input class="edit-input" value="${current}" /> <button class="save">Save</button>`;
        const input = li.querySelector('.edit-input');
        const saveBtn = li.querySelector('.save');
        input.focus();

        // Save button inside li
        saveBtn.addEventListener('click', () => exitEditMode(li, true));

        // pressing Enter saves
        input.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter') exitEditMode(li, true);
        });
    }

    function exitEditMode(li, save) {
        if (!li.classList.contains('editing')) return;
        const input = li.querySelector('.edit-input');
        const nameSpan = li.querySelector('.name');
        if (save && input) {
            const newVal = input.value.trim() || 'Untitled';
            nameSpan.textContent = newVal;
        } else {
            // revert to original text if no save
            const original = input ? input.defaultValue : '';
            nameSpan.textContent = original;
        }
        li.classList.remove('editing');
    }

} else {
    console.log('q1_dynamic_product_list.js is a browser script. Open in browser to run.');
}
