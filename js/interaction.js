$( document ).ready(function() {
  $( '.jshide' ).addClass('hidden').removeClass('jshide');
  $( "#date" ).focusout(function() {
    window.location.replace('index.php?date=' + $('#date').val());
  })
});