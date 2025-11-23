"use strict";
if (typeof document !== 'undefined') {
    $(function(){
        const faqs = [
            {q:'What is your refund policy?', a:'You have 14 days to request a refund.'},
            {q:'How do I contact support?', a:'Email support@example.com.'},
            {q:'Can I upgrade later?', a:'Yes - upgrades are easy from your account.'}
        ];
        let html = '<div class="faq"><h2>FAQs</h2>';
        faqs.forEach((f,i)=> html += `<div class="q" data-i="${i}">${f.q}</div><div class="a" data-i="${i}">${f.a}</div>`);
        html += '</div>';
        $('#app').html(html);
        $('.q').on('click', function(){
            const i = $(this).data('i');
            const $a = $(`.a[data-i='${i}']`);
            $('.a').not($a).slideUp();
            $a.stop(true).slideToggle();
        });
    });
} else { console.log('q7_faq_accordion.js is a browser script.'); }
