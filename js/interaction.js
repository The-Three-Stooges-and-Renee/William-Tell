$( document ).ready(function() {
  $( '.jshide' ).addClass('hidden').removeClass('jshide');
  $( '#date' ).bind('input', function(){
    //window.location.replace('index.php?date=' + $('#date').val());
    $.ajax({
      url: ('http://submit-iit-timesheet.geekkidconsulting.com/default.aspx?action=pull&date=' + $('#date').val()),
      crossDomain: true,
      success: setinfo(),
      error: function() { $( '.hidden' ).addClass('.jshide').removeClass('hidden'); }
    });
  })
});
function setinfo(){
  alert('setting info');
}