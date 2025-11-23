/* q2_product_highlight.js
   jQuery-driven product interactions:
   - click to highlight
   - hover to show details
   - favorite toggle
   - styling for discounted items via attribute selector
   - alert for out-of-stock (data-stock="0")
*/

$(function(){
  const $list = $('#productList');

  // Apply different styles to products with discounts using attribute selector
  // selects elements that have data-discount attribute
  $list.find('li[data-discount]').addClass('discount');

  // Event delegation: handle click on a product to highlight background
  $list.on('click', 'li', function(e){
    // if favorite icon clicked, don't toggle highlight here
    if ($(e.target).hasClass('fav')) return;

    $(this).toggleClass('highlight');
    // If product is out of stock, show alert
    if ($(this).data('stock') === 0) {
      alert($(this).find('.title').text() + ' is out of stock!');
    }
  });

  // Hover over product -> show additional product details
  $list.on('mouseenter', 'li', function(){
    $(this).find('.details').fadeIn(150);
  }).on('mouseleave', 'li', function(){
    $(this).find('.details').fadeOut(100);
  });

  // Clicking a Favorite icon toggles selected class (using event delegation)
  $list.on('click', '.fav', function(e){
    e.stopPropagation(); // prevent parent li click
    $(this).toggleClass('selected');
    if ($(this).hasClass('selected')) $(this).text('♥ Favorited');
    else $(this).text('♡ Favorite');
  });

  // Demonstrate attribute selection: alert products with discount > 10%
  $list.find('li[data-discount]').each(function(){
    const disc = Number($(this).data('discount'));
    if (disc > 10) {
      $(this).css('box-shadow', '0 0 8px rgba(0,128,0,0.2)');
    }
  });
});
