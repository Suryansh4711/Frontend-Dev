"use strict";
if (typeof document !== 'undefined') {
    $(function(){
        const data = [
            {name:'Alice', age:24}, {name:'Bob', age:31}, {name:'Carol', age:29}, {name:'Dave', age:22}
        ];
        function render(arr){
            let html = '<table><thead><tr><th data-key="name">Name</th><th data-key="age">Age</th></tr></thead><tbody>';
            arr.forEach(r=> html += `<tr><td>${r.name}</td><td>${r.age}</td></tr>`);
            html += '</tbody></table>';
            $('#app').html(html);
            $('th').on('click', function(){
                const key = $(this).data('key');
                const asc = $(this).data('asc') ? 0 : 1; // toggle
                $(this).data('asc', asc);
                const sorted = data.slice().sort((a,b)=> (a[key] > b[key]?1:-1)*(asc?1:-1));
                render(sorted);
            });
        }
        render(data);
    });
} else { console.log('q10_sortable_table.js is a browser script.'); }
