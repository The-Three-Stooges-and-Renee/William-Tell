$( document ).ready(function() {
  //$( '.jshide' ).addClass('hidden').removeClass('jshide');
  hideline('.jshide', 0);
  showline('.jsshow', 0);
  evaluateshown(0);
  
  
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
    evaluateshown(200);
  });

  $( '#inh1' ).bind('input', function() { evaluateshown(1000); });
  $( '#inm1' ).bind('input', function() { evaluateshown(1000); });
  $( '#inh2' ).bind('input', function() { evaluateshown(1000); });
  $( '#inm2' ).bind('input', function() { evaluateshown(1000); });
  $( '#inh3' ).bind('input', function() { evaluateshown(1000); });
  $( '#inm3' ).bind('input', function() { evaluateshown(1000); });
  $( '#inh4' ).bind('input', function() { evaluateshown(1000); });
  $( '#inm4' ).bind('input', function() { evaluateshown(1000); });
  
  $( '#outh1' ).bind('input', function() { evaluateshown(1000); });
  $( '#outm1' ).bind('input', function() { evaluateshown(1000); });
  $( '#outh2' ).bind('input', function() { evaluateshown(1000); });
  $( '#outm2' ).bind('input', function() { evaluateshown(1000); });
  $( '#outh3' ).bind('input', function() { evaluateshown(1000); });
  $( '#outm3' ).bind('input', function() { evaluateshown(1000); });
  $( '#outh4' ).bind('input', function() { evaluateshown(1000); });
  $( '#outm4' ).bind('input', function() { evaluateshown(1000); });
  $( '#punchin' ).bind('click', function() { punchin(); });
  $( '#punchout' ).bind('click', function() { punchout(); });
});
function punchin(){
  var line = findinline();
  if (line == 999) {
    alert('Error: You have already used the maximum number of entries for today.');
  }else {
    var dt = new Date($.now());
    $('#inh' + line).val(dt.getHours());
    $('#inm' + line).val(dt.getMinutes());
    evaluateshown(1000);
  }
}
function punchout() {
  var line = findoutline();
  if (line == 999) {
    alert('Error: You have already used the maximum number of entries for today.');
  }else {
    var dt = new Date($.now());
    $('#outh' + line).val(dt.getHours());
    $('#outm' + line).val(dt.getMinutes());
    evaluateshown(1000);
  }
}
function findinline() {
  var firstopenline = 0;
  if ((($('#inh1').val() == 0) || ($('#inh1').val() == 00)) && (($('#inm1').val() == 0) || ($('#inm1').val() == 00))) {
    firstopenline = 1;
  }else {
    if ((($('#inh2').val() == 0) || ($('#inh2').val() == 00)) && (($('#inm2').val() == 0) || ($('#inm2').val() == 00))) {
      firstopenline = 2;
    }else {
      if ((($('#inh3').val() == 0) || ($('#inh3').val() == 00)) && (($('#inm3').val() == 0) || ($('#inm3').val() == 00))) {
        firstopenline = 3;
      }else {
        if ((($('#inh4').val() == 0) || ($('#inh4').val() == 00)) && (($('#inm4').val() == 0) || ($('#inm4').val() == 00))) {
          firstopenline = 4;
        }else {
          firstopenline = 999;
        }
      }
    }
  }
  return firstopenline;
}
function findoutline() {
  var firstopenline = 0;
  if ((($('#outh1').val() == 0) || ($('#outh1').val() == 00)) && (($('#outm1').val() == 0) || ($('#outm1').val() == 00))) {
    firstopenline = 1;
  }else {
    if ((($('#outh2').val() == 0) || ($('#outh2').val() == 00)) && (($('#outm2').val() == 0) || ($('#outm2').val() == 00))) {
      firstopenline = 2;
    }else {
      if ((($('#outh3').val() == 0) || ($('#outh3').val() == 00)) && (($('#outm3').val() == 0) || ($('#outm3').val() == 00))) {
        firstopenline = 3;
      }else {
        if ((($('#outh4').val() == 0) || ($('#outh4').val() == 00)) && (($('#outm4').val() == 0) || ($('#outm4').val() == 00))) {
          firstopenline = 4;
        }else {
          firstopenline = 999;
        }
      }
    }
  }
  return firstopenline;
}
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
  //$( lineid ).switchClass('jshide', 'hidden', speed, 'easeInCubic');
  $( lineid ).addClass('hidden').removeClass('jshide');
}
function showline(lineid, speed) {
  //$( lineid ).switchClass('hidden', 'jshide', speed, 'easeInCubic');
  $( lineid ).addClass('jshide').removeClass('hidden');
}
function evaluateshown(speed) {
  var hval = 0;
  if ((($('#inh1').val() == 0) || ($('#inh1').val() == 00)) && (($('#inm1').val() == 0) || ($('#inm1').val() == 00))) {
    hideline('#out1', speed);
    hideline('#in2', speed);
    hideline('#out2', speed);
    hideline('#in3', speed);
    hideline('#out3', speed);
    hideline('#in4', speed);
    hideline('#out4', speed);
    
     if (!(($('#inm1').val() == 00) || ($('#inm1').val() == 0))) {
      if (!(round15($('#inm1')) == 60)) {
        $('#inm1').val(round15($('#inm1')));
      }else {
        hval = $('#inh1).val();
        hval++;
        $('#inh1').val(hval);
        $('#inm1').val(00);
      }
    }
  }else {
    showline('#out1', speed);
  }
  if ((($('#outh1').val() == 0) || ($('#outh1').val() == 00)) && (($('#outm1').val() == 0) || ($('#outm1').val() == 00))) {
    hideline('#in2', speed);
    hideline('#out2', speed);
    hideline('#in3', speed);
    hideline('#out3', speed);
    hideline('#in4', speed);
    hideline('#out4', speed);
  }else {
    showline('#in2', speed);
  }
  
  if ((($('#inh2').val() == 0) || ($('#inh2').val() == 00)) && (($('#inm2').val() == 0) || ($('#inm2').val() == 00))) {
    hideline('#out2', speed);
    hideline('#in3', speed);
    hideline('#out3', speed);
    hideline('#in4', speed);
    hideline('#out4', speed);
  }else {
    showline('#out2', speed);
  }
  if ((($('#outh2').val() == 0) || ($('#outh2').val() == 00)) && (($('#outm2').val() == 0) || ($('#outm2').val() == 00))) {
    hideline('#in3', speed);
    hideline('#out3', speed);
    hideline('#in4', speed);
    hideline('#out4', speed);
  }else {
    showline('#in3', speed);
  }  
  
  if ((($('#inh3').val() == 0) || ($('#inh3').val() == 00)) && (($('#inm3').val() == 0) || ($('#inm3').val() == 00))) {
    hideline('#out3', speed);
    hideline('#in4', speed);
    hideline('#out4', speed);
  }else {
    showline('#out3', speed);
  }
  if ((($('#outh3').val() == 0) || ($('#outh3').val() == 00)) && (($('#outm3').val() == 0) || ($('#outm3').val() == 00))) {
    hideline('#in4', speed);
    hideline('#out4', speed);
  }else {
    showline('#in4', speed);
  }
  
  if ((($('#inh4').val() == 0) || ($('#inh4').val() == 00)) && (($('#inm4').val() == 0) || ($('#inm4').val() == 00))) {
    hideline('#out4', speed);
  }else {
    showline('#out4', speed);
  }
}
function round15(inpt) {
  var rounded = inpt;
  if (inpt < 15) {
    if (inpt < 7) {
      rounded = 00;
    }else {
      rounded = 15;
    }
  }else {
    if (inpt < 30) {
      if (inpt < 22) {
        rounded = 15;
      }else {
        rounded = 30;
      }
    }else {
      if (inpt < 45) {
        if (inpt < 37) {
          rounded = 30;
        }else {
          rounded = 45;
        }   
      }else {
          if (inpt < 60) {
            if (inpt < 52) {
              rounded = 45;
            }else {
              rounded = 60;
            }
          }else {
            alert("Error: Didn't understand the minutes entry.")
            return false;
          }
        }
    }
  }
  return rounded;
}