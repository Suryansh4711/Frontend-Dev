"use strict";
// Q1 - Live Search (jQuery AJAX)
// Note: Run json-server with: json-server --watch q1_db.json --port 3001
if (typeof document !== 'undefined') {
  $(function(){
    const BASE = 'http://localhost:3001/products';
    const $q = $('#q');
    const $res = $('#results');
    const $loading = $('#loading');
    let timer = null;
    function render(items){
      if (!items || items.length === 0) return $res.html('<div>No products found</div>');
      $res.empty();
      items.forEach(it => {
        const $d = $(`<div class="result"><img class="img" src="${it.image}"/><div><strong>${it.name}</strong><div>$${it.price}</div></div></div>`);
        $res.append($d);
      });
    }
    function search(qv){
      $loading.show();
      $.ajax({ url: BASE + '?q=' + encodeURIComponent(qv), method:'GET', dataType:'json', success: function(data){ render(data); }, error: function(){ $res.html('<div style="color:red">Error loading</div>'); }, complete:function(){ $loading.hide(); } });
    }
    $q.on('input', function(){
      clearTimeout(timer);
      const v = $(this).val().trim();
      timer = setTimeout(()=> search(v), 250);
    });
    // initial load
    search('');
  });
} else {
  console.log('q1_live_search.js is a browser script.');
}
