"use strict";
// Q3 - Multi-step registration. Built with jQuery when run in browser.
if (typeof document !== 'undefined') {
    $(function(){
        const app = $('#app');
        app.html(`
            <h2>Register (3 steps)</h2>
            <div id="step1" class="step active">
                <label>First Name: <input id="first" /></label><br>
                <label>Last Name: <input id="last" /></label>
                <div class="buttons"><button id="next1">Next</button></div>
            </div>
            <div id="step2" class="step">
                <label>Email: <input id="email" type="email" /></label><br>
                <label>Phone: <input id="phone" /></label>
                <div class="buttons"><button id="back2">Back</button> <button id="next2">Next</button></div>
            </div>
            <div id="step3" class="step">
                <label>Password: <input id="pass" type="password" /></label><br>
                <label>Confirm: <input id="pass2" type="password" /></label>
                <div class="buttons"><button id="back3">Back</button> <button id="finish">Finish</button></div>
            </div>
            <div id="result" class="summary" style="display:none"></div>
        `);

        function show(i){
            $('.step').removeClass('active').hide();
            $(`#step${i}`).addClass('active').show();
        }
        $('#next1').on('click', ()=>{
            if (!$('#first').val().trim() || !$('#last').val().trim()) { alert('Enter names'); return; }
            show(2);
        });
        $('#back2').on('click', ()=> show(1));
        $('#next2').on('click', ()=>{
            if (!$('#email').val().includes('@')) { alert('Enter valid email'); return; }
            show(3);
        });
        $('#back3').on('click', ()=> show(2));
        $('#finish').on('click', ()=>{
            if ($('#pass').val().length < 6 || $('#pass').val() !== $('#pass2').val()) { alert('Password error'); return; }
            const summary = {
                first: $('#first').val(), last: $('#last').val(), email: $('#email').val(), phone: $('#phone').val()
            };
            $('#result').show().html(`<strong>Summary:</strong><pre>${JSON.stringify(summary, null, 2)}</pre>`);
            $('.step').hide();
        });
    });
} else {
    console.log('q3_multi_step_registration.js is a browser script. Open the HTML in a browser.');
}
