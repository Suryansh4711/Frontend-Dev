"use strict";
if (typeof document !== 'undefined') {
    $(function(){
        $('#app').html(`<div class="box"><h2>Subscribe to Newsletter</h2><input id="email" placeholder="you@example.com"/><button id="sub">Subscribe</button><div id="msg"></div></div>`);
        $('#sub').on('click', ()=>{
            const v = $('#email').val().trim();
            const ok = v.includes('@') && v.indexOf('.') > v.indexOf('@');
            if (!ok) { $('#msg').html('<span class="error">Enter valid email</span>'); return; }
            $('#msg').html('<span style="color:green">Subscribed! Check your inbox.</span>');
            $('#email').val('');
        });
    });
} else { console.log('q8_newsletter.js is a browser script.'); }
