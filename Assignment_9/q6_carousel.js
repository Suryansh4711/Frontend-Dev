"use strict";
if (typeof document !== 'undefined') {
    $(function(){
        const app = $('#app');
        const slides = ['Slide A','Slide B','Slide C'];
        let html = '<div class="carousel"><div class="slides">';
        slides.forEach(s=> html += `<div class="slide">${s}</div>`);
        html += '</div></div><div style="margin-top:8px"><button id="prev">Prev</button> <button id="next">Next</button></div>';
        app.html(html);
        const $slides = $('.slides');
        let idx = 0;
        function show(i){ idx = (i+slides.length)%slides.length; $slides.css('transform', `translateX(${-idx*400}px)`); }
        let timer = setInterval(()=> show(idx+1), 3000);
        $('#next').on('click', ()=> { show(idx+1); clearInterval(timer); timer = setInterval(()=> show(idx+1),3000); });
        $('#prev').on('click', ()=> { show(idx-1); clearInterval(timer); timer = setInterval(()=> show(idx+1),3000); });
    });
} else { console.log('q6_carousel.js is a browser script.'); }
