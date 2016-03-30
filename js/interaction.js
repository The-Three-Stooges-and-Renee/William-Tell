$( document ).ready(function() {
  $( '.jshide' ).addClass('hidden').removeClass('jshide');
  $( '#date' ).bind('input', function(){
    //window.location.replace('index.php?date=' + $('#date').val());
    $.ajax({
      url: ('http://submit-iit-timesheet.geekkidconsulting.com/default.aspx?action=pull&date=' + $('#date').val()),
      crossDomain: true
    }).done(setinfo());
  })
});
function setinfo(){
  alert('setting info');
}