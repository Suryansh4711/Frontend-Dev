"use strict";
// Q4 - Custom Form Builder (Forms + Classes)
// FormBuilder class takes an array of field definitions and renders a form via innerHTML.

class FormBuilder {
    constructor(containerId, fields = []) {
        this.containerId = containerId;
        this.fields = fields; // array of { type, label, name }
    }

    render() {
        if (typeof document === 'undefined') {
            console.log('FormBuilder.render() requires a browser environment (document).');
            return;
        }
        const container = document.getElementById(this.containerId);
        if (!container) throw new Error('Container not found');

        let html = '<form id="generatedForm">';
        this.fields.forEach(f => {
            html += `<label>${f.label}: <input type="${f.type}" name="${f.name}" id="${f.name}"></label><br/>`;
        });
        html += '<button type="submit">Submit</button></form>';
        container.innerHTML = html;

        const form = document.getElementById('generatedForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = this.getFormData();
            console.log('Form submitted. Data:', data);
        });
    }

    getFormData() {
        if (typeof document === 'undefined') {
            console.log('getFormData() requires browser DOM');
            return {};
        }
        const data = {};
        this.fields.forEach(f => {
            const el = document.getElementById(f.name);
            data[f.name] = el ? el.value : null;
        });
        return data;
    }
}

console.log('=== Q4 - Custom Form Builder ===');
console.log('This module provides FormBuilder class. To use in browser: create a container element with an id and call new FormBuilder(id, fields).render();');

if (typeof module !== 'undefined' && module.exports) module.exports = { FormBuilder };
