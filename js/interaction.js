$( document ).ready(function() {
  $( '.jshide' ).addClass('hidden').removeClass('jshide');
  $( "#date" ).onchange(function() {
    //window.location.replace('index.php?date=' + $('#date').val());
    $.ajax({
      url: ('http://submit-iit-timesheet.geekkidconsulting.com/default.aspx?action=pull&date=' + $('#date').val())
    }).done(setinfo();)
  })
});
function setinfo(){
  alert('setting info');
}