"use strict";
if (typeof document !== 'undefined') {
    $(function(){
        $('#app').html('<button class="open-btn">Open Modal</button><div id="modal" style="display:none" class="modal"><div class="card"><h3>Modal Title</h3><p>This is a sample modal.</p><button id="close">Close</button></div></div>');
        $('.open-btn').on('click', ()=> $('#modal').show());
        $('#modal').on('click', ()=> $('#modal').hide());
        $('.card').on('click', (e)=> e.stopPropagation());
        $('#close').on('click', ()=> $('#modal').hide());
    });
} else { console.log('q9_modal_example.js is a browser script.'); }
