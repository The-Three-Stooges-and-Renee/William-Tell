$( document ).ready(function() {
  $( '.jshide' ).addClass('hidden').removeClass('jshide');
  $( '#date' ).bind('input', function(){
    //window.location.replace('index.php?date=' + $('#date').val());
    $.ajax({
      url: ('http://submit-iit-timesheet.geekkidconsulting.com/default.aspx?action=pull&date=' + $('#date').val()),
      crossDomain: true,
      success: function(output, status, xhr) {
        alert(readcookie($('#date').val()) );
      },
      error: function() { $( '.hidden' ).addClass('.jshide').removeClass('hidden'); }
    });
  })
});
/*function setinfo(){
  alert( readcookie($('#date').val()) );
}*/
function readcookie(cookiename) {
  var realname = cookiename + "=";
  var cookarray = document.cookie.split(';');
  for(var i=0; i<cookarray.length; i++) {
    var resp = cookarray[i];
    while (resp.charAt(0)==' ') resp = resp.substring(1);
    if (resp.indexOf(realname) == 0) return resp.substring(realname.length,resp.length);
  }
  return "";
}