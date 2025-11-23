"use strict";
if (typeof document !== 'undefined') {
    $(function(){
        const app = $('#app');
        app.html(`<h2>Theme Switcher</h2><div class="swatches"><button data-theme="light">Light</button><button data-theme="dark">Dark</button><button data-theme="blue">Blue</button></div>`);
        $('.swatches button').on('click', function(){
            const t = $(this).data('theme');
            document.body.setAttribute('data-theme', t);
        });
    });
} else {
    console.log('q4_theme_switcher.js is a browser script.');
}
