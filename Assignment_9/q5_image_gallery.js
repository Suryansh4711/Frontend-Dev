"use strict";
if (typeof document !== 'undefined') {
    $(function(){
        const app = $('#app');
        const images = [1,2,3,4,5,6].map(i=>`https://picsum.photos/seed/gallery${i}/600/400`);
        let html = '<h2>Image Gallery</h2><div class="grid">';
        images.forEach(src => html += `<img src="${src}" data-src="${src}"/>`);
        html += '</div><div id="modal" style="display:none" class="modal"><img id="modalImg" src=""/></div>';
        app.html(html);
        $('.grid img').on('click', function(e){
            e.stopPropagation();
            $('#modalImg').attr('src', $(this).data('src'));
            $('#modal').show();
        });
        $('#modal').on('click', function(){ $(this).hide(); });
        $('#modal img').on('click', function(e){ e.stopPropagation(); });
    });
} else { console.log('q5_image_gallery.js is a browser script.'); }
