$( document ).ready(function() {
  //$( '.jshide' ).addClass('hidden').removeClass('jshide');
  hideline('.jshide', 0);
  $( '#date' ).bind('input', function(){
    //window.location.replace('index.php?date=' + $('#date').val());
    $.ajax({
      url: ('http://submit-iit-timesheet.geekkidconsulting.com/default.aspx?action=pull&date=' + $('#date').val()),
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: function(output, status, xhr) {
        processcookies(readcookie($('#date').val()) );
      },
      error: function(output, status, xhr) {
        processcookies(readcookie($('#date').val()) );
      },
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
function processcookies(cookievalue) {
  if (cookievalue == '') {
    $( '.hidden' ).addClass('jshide').removeClass('hidden');
  }else {
    var keys = cookievalue.split('&');
    
    $( '#inh1' ).val(keys[0].replace('inh1=', ''));
    $( '#inh2' ).val(keys[1].replace('inh2=', ''));
    $( '#inh3' ).val(keys[2].replace('inh3=', ''));
    $( '#inh4' ).val(keys[3].replace('inh4=', ''));
    
    $( '#inm1' ).val(keys[4].replace('inm1=', ''));
    $( '#inm2' ).val(keys[5].replace('inm2=', ''));
    $( '#inm3' ).val(keys[6].replace('inm3=', ''));
    $( '#inm4' ).val(keys[7].replace('inm4=', ''));
    
    if (keys[8].replace('inam1=', '')=='True') {
      $('#amin1').prop('checked', true);
      $('#pmin1').prop('checked', false);
    }else {
      $('#amin1').prop('checked', false);
      $('#pmin1').prop('checked', true);
    }
    
    if (keys[9].replace('inam2=', '')=='True') {
      $('#amin2').prop('checked', true);
      $('#pmin2').prop('checked', false);
    }else {
      $('#amin2').prop('checked', false);
      $('#pmin2').prop('checked', true);
    }
    
    if (keys[10].replace('inam3=', '')=='True') {
      $('#amin3').prop('checked', true);
      $('#pmin3').prop('checked', false);
    }else {
      $('#amin3').prop('checked', false);
      $('#pmin3').prop('checked', true);
    }
    
    if (keys[11].replace('inam4=', '')=='True') {
      $('#amin4').prop('checked', true);
      $('#pmin4').prop('checked', false);
    }else {
      $('#amin4').prop('checked', false);
      $('#pmin4').prop('checked', true);
    }
    
    $( '#outh1' ).val(keys[12].replace('outh1=', ''));
    $( '#outh2' ).val(keys[13].replace('outh2=', ''));
    $( '#outh3' ).val(keys[14].replace('outh3=', ''));
    $( '#outh4' ).val(keys[15].replace('outh4=', ''));
    
    $( '#outm1' ).val(keys[16].replace('outm1=', ''));
    $( '#outm2' ).val(keys[17].replace('outm2=', ''));
    $( '#outm3' ).val(keys[18].replace('outm3=', ''));
    $( '#outm4' ).val(keys[19].replace('outm4=', ''));
    
    if (keys[20].replace('outam1=', '')=='True') {
      $('#amout1').prop('checked', true);
      $('#pmout1').prop('checked', false);
    }else {
      $('#amout1').prop('checked', false);
      $('#pmout1').prop('checked', true);
    }
    
    if (keys[21].replace('outam2=', '')=='True') {
      $('#amout2').prop('checked', true);
      $('#pmout2').prop('checked', false);
    }else {
      $('#amout2').prop('checked', false);
      $('#pmout2').prop('checked', true);
    }
    
    if (keys[22].replace('outam3=', '')=='True') {
      $('#amout3').prop('checked', true);
      $('#pmout3').prop('checked', false);
    }else {
      $('#amout3').prop('checked', false);
      $('#pmout3').prop('checked', true);
    }
    
    if (keys[23].replace('outam4=', '')=='True') {
      $('#amout4').prop('checked', true);
      $('#pmout4').prop('checked', false);
    }else {
      $('#amout4').prop('checked', false);
      $('#pmout4').prop('checked', true);
    }
  }
}
function hideline(lineid, speed) {
  $( lineid ).switchClass('jshide', 'hidden', speed, 'easeInCubic');
}
function showline(lineid, speed) {
  $( lineid ).switchClass('hidden', 'jshide', speed, 'easeInCubic');
}