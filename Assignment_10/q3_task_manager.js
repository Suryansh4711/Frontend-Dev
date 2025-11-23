"use strict";
// Q3 - Task Manager (jQuery AJAX + Query Params)
// Run with: json-server --watch q3_db.json --port 3003
if (typeof document !== 'undefined') {
  $(function(){
    const BASE = 'http://localhost:3003/tasks';
    const $list = $('#list');
    function load(filter){
      let url = BASE;
      if (filter === 'completed') url += '?completed=true';
      else if (filter) url += '?priority=' + encodeURIComponent(filter);
      $.getJSON(url, function(data){
        render(data);
      }).fail(()=> $list.html('<div style="color:red">Error loading tasks</div>'));
    }
    function render(items){
      if (!items || items.length===0) return $list.html('<div>No tasks</div>');
      $list.empty();
      items.forEach(it => {
        const $t = $(`<div class="task" data-id="${it.id}"><input type="checkbox" class="done" ${it.completed? 'checked':''}/><div>${it.title}</div><div style="margin-left:auto">${it.priority}</div></div>`);
        $list.append($t);
      });
      $('.done').on('change', function(){
        const row = $(this).closest('.task');
        const id = row.data('id');
        const next = $(this).is(':checked');
        // PATCH
        $.ajax({ url: BASE + '/' + id, method:'PATCH', contentType:'application/json', data: JSON.stringify({ completed: next }), success: function(){}, error: function(){ alert('Failed to update'); row.find('.done').prop('checked', !next); } });
      });
    }
    $('#filter').on('change', function(){ load($(this).val()); });
    load('');
  });
} else { console.log('q3_task_manager.js is a browser script.'); }
