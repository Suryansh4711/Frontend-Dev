/* q1_welcome_greeting.js
   Implements dynamic greeting behaviors using jQuery.
*/

$(function() {
  // Determine time-based greeting
  function getTimeGreeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Good Morning!';
    if (h < 18) return 'Good Afternoon!';
    return 'Good Evening!';
  }

  const $welcome = $('#welcome');
  const $welcomeMsg = $('#welcomeMsg');

  // On page load show time-based greeting
  $welcome.text(getTimeGreeting());

  // Clicking greeting shows an alert (requirement)
  $welcome.on('click', function() {
    alert($welcome.text());
  });

  // Change Greeting -> motivational quote
  $('#changeGreeting').on('click', function() {
    $welcome.text('Keep pushing — every step counts!');
  });

  // Toggle visibility of welcome message
  $('#toggleWelcome').on('click', function() {
    $welcomeMsg.toggleClass('hidden');
  });

  // Accessibility: allow Enter key to trigger greeting click
  $welcome.on('keydown', function(e) {
    if (e.key === 'Enter') $(this).trigger('click');
  });
});
