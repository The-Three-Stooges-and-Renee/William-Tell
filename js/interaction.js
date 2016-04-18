$( document ).ready(function() {
  //$( '.jshide' ).addClass('hidden').removeClass('jshide');
  hideline('.jshide', 0);
  showline('.jsshow', 0);
  evaluateshown(0);
  if ($('#pmin1').is(':checked')) {
    setpm('out1');
    setpm('in2');
    setpm('out2');
    setpm('in3');
    setpm('out3');
    setpm('in4');
    setpm('out4');
  }
  if ($('#pmout1').is(':checked')) {
    setpm('in2');
    setpm('out2');
    setpm('in3');
    setpm('out3');
    setpm('in4');
    setpm('out4');
  }
  if ($('#pmin2').is(':checked')) {
    setpm('out2');
    setpm('in3');
    setpm('out3');
    setpm('in4');
    setpm('out4');
  }  
  if ($('#pmout2').is(':checked')) {
    setpm('in3');
    setpm('out3');
    setpm('in4');
    setpm('out4');
  }
  if ($('#pmin3').is(':checked')) {
    setpm('out3');
    setpm('in4');
    setpm('out4');
  }
  if ($('#pmout3').is(':checked')) {
    setpm('in4');
    setpm('out4');
  }
  if ($('#pmin4').is(':checked')) {
    setpm('out4');
  }
  
  $( '#date' ).bind('input', function(){
    $.ajax({
      url: ('http://submit-iit-timesheet.geekkidconsulting.com/default.aspx?action=pull&meth=ajax&date=' + $('#date').val()),
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: function(output, status, xhr) {
        processcookies(readcookie($('#date').val()) );
        evaluateshown(0);
      },
      error: function(output, status, xhr) {
        processcookies(readcookie($('#date').val()) );
        evaluateshown(0);
      }
    });
    
  });

  $( '#inh1' ).bind('input', function() { 
    validatehour('#inh1');
    evaluateshown(1000); 
  });
  $( '#inm1' ).bind('input', function() { 
    evaluateshown(1000); 
  });
  $( '#inh2' ).bind('input', function() { 
    validatehour('#inh2');
    evaluateshown(1000); 
  });
  $( '#inm2' ).bind('input', function() { 
    evaluateshown(1000); 
  });
  $( '#inh3' ).bind('input', function() { 
    validatehour('#inh3');
    evaluateshown(1000); 
  });
  $( '#inm3' ).bind('input', function() { 
    evaluateshown(1000); 
  });
  $( '#inh4' ).bind('input', function() { 
    validatehour('#inh4');
    evaluateshown(1000); 
  });
  $( '#inm4' ).bind('input', function() { 
    evaluateshown(1000); 
  });
  
  $( '#outh1' ).bind('input', function() { 
    validatehour('#outh1');
    evaluateshown(1000); 
  });
  $( '#outm1' ).bind('input', function() { 
    evaluateshown(1000); 
  });
  $( '#outh2' ).bind('input', function() { 
    validatehour('#outh2');
    evaluateshown(1000); 
  });
  $( '#outm2' ).bind('input', function() { 
    evaluateshown(1000); 
  });
  $( '#outh3' ).bind('input', function() { 
    validatehour('#outh3');
    evaluateshown(1000); 
  });
  $( '#outm3' ).bind('input', function() { 
    evaluateshown(1000); 
  });
  $( '#outh4' ).bind('input', function() { 
    validatehour('#outh4');
    evaluateshown(1000); 
  });
  $( '#outm4' ).bind('input', function() { 
    evaluateshown(1000); 
  });
  
  
  $( '#inh1' ).bind('change', function() { 
    roundall(); 
  });
  $( '#inm1' ).bind('change', function() { 
    roundall(); 
  });
  $( '#inh2' ).bind('change', function() { 
    roundall(); 
  });
  $( '#inm2' ).bind('change', function() { 
    roundall(); 
  });
  $( '#inh3' ).bind('change', function() { 
    roundall(); 
  });
  $( '#inm3' ).bind('change', function() { 
    roundall(); 
  });
  $( '#inh4' ).bind('change', function() { 
    roundall(); 
  });
  $( '#inm4' ).bind('change', function() { 
    roundall(); 
  });
  
  $( '#outh1' ).bind('change', function() { 
    roundall(); 
  });
  $( '#outm1' ).bind('change', function() { 
    roundall(); 
  });
  $( '#outh2' ).bind('change', function() { 
    roundall(); 
  });
  $( '#outm2' ).bind('change', function() { 
    roundall(); 
  });
  $( '#outh3' ).bind('change', function() { 
    roundall(); 
  });
  $( '#outm3' ).bind('change', function() { 
    roundall(); 
  });
  $( '#outh4' ).bind('change', function() { 
    roundall(); 
  });
  $( '#outm4' ).bind('change', function() { 
    roundall(); 
  });
  
  $( '#pmin1' ).bind('change', function() {
    if ($('#pmin1').is(':checked')) {
       setpm('out1');
       setpm('in2');
       setpm('out2');
       setpm('in3');
       setpm('out3');
       setpm('in4');
       setpm('out4');
    }
  });
  $( '#pmout1' ).bind('change', function() {
    if ($('#pmout1').is(':checked')) {
       setpm('in2');
       setpm('out2');
       setpm('in3');
       setpm('out3');
       setpm('in4');
       setpm('out4');
    }
  });
  $( '#pmin2' ).bind('change', function() {
    if ($('#pmin2').is(':checked')) {
       setpm('out2');
       setpm('in3');
       setpm('out3');
       setpm('in4');
       setpm('out4');
    }
  });
  $( '#pmout2' ).bind('change', function() {
    if ($('#pmout2').is(':checked')) {
       setpm('in3');
       setpm('out3');
       setpm('in4');
       setpm('out4');
    }
  });
  $( '#pmin3' ).bind('change', function() {
    if ($('#pmin3').is(':checked')) {
       setpm('out3');
       setpm('in4');
       setpm('out4');
    }
  });
  $( '#pmout3' ).bind('change', function() {
    if ($('#pmout3').is(':checked')) {
       setpm('in4');
       setpm('out4');
    }
  });
  $( '#pmin4' ).bind('change', function() {
    if ($('#pmin4').is(':checked')) {
       setpm('out4');
    }
  });
  
  $( '#punchin' ).bind('click', function() { punchin(); });
  $( '#punchout' ).bind('click', function() { punchout(); });
});
function setpm(line) {
  $('#am' + line).prop('checked', false);
  $('#pm' + line).prop('checked', true);
}
function punchin(){
  var line = findinline();
  if (line == 999) {
    alert('Error: You have already used the maximum number of entries for today.');
  }else {
    var dt = new Date($.now());
    $('#inh' + line).val(dt.getHours());
    $('#inm' + line).val(dt.getMinutes());
    evaluateshown(1000);
    roundall();
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
    roundall();
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
      setpm('out1');
      setpm('in2');
      setpm('out2');
      setpm('in3');
      setpm('out3');
      setpm('in4');
      setpm('out4');
    }
    
    if (keys[9].replace('inam2=', '')=='True') {
      $('#amin2').prop('checked', true);
      $('#pmin2').prop('checked', false);
    }else {
      $('#amin2').prop('checked', false);
      $('#pmin2').prop('checked', true);
      setpm('out2');
      setpm('in3');
      setpm('out3');
      setpm('in4');
      setpm('out4');
    }
    
    if (keys[10].replace('inam3=', '')=='True') {
      $('#amin3').prop('checked', true);
      $('#pmin3').prop('checked', false);
    }else {
      $('#amin3').prop('checked', false);
      $('#pmin3').prop('checked', true);
      setpm('out3');
      setpm('in4');
      setpm('out4');
    }
    
    if (keys[11].replace('inam4=', '')=='True') {
      $('#amin4').prop('checked', true);
      $('#pmin4').prop('checked', false);
    }else {
      $('#amin4').prop('checked', false);
      $('#pmin4').prop('checked', true);
      setpm('out4');
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
      setpm('in2');
      setpm('out2');
      setpm('in3');
      setpm('out3');
      setpm('in4');
      setpm('out4');
    }
    
    if (keys[21].replace('outam2=', '')=='True') {
      $('#amout2').prop('checked', true);
      $('#pmout2').prop('checked', false);
    }else {
      $('#amout2').prop('checked', false);
      $('#pmout2').prop('checked', true);
      setpm('in3');
      setpm('out3');
      setpm('in4');
      setpm('out4');
    }
    
    if (keys[22].replace('outam3=', '')=='True') {
      $('#amout3').prop('checked', true);
      $('#pmout3').prop('checked', false);
    }else {
      $('#amout3').prop('checked', false);
      $('#pmout3').prop('checked', true);
      setpm('in4');
      setpm('out4');
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
  if (speed==0) {
    $( lineid ).addClass('jshide').removeClass('hidden');
  }else {
    $( lineid ).addClass('fadein').removeClass('hidden');
  }
  
}

function roundall() {
  var hval = 0;
  var mval = 0;
  mval = $('#inm1').val();
  if (!((mval == 00) || (mval == 0))) {
    if (!(round15(mval) == 60)) {
      $('#inm1').val(round15(mval));
    }else {
      hval = $('#inh1').val();
      hval++;
      $('#inh1').val(hval);
      $('#inm1').val(00);
    }
  }
  mval = $('#outm1').val();
  if (!((mval == 00) || (mval == 0))) {
    if (!(round15(mval) == 60)) {
      $('#outm1').val(round15(mval));
    }else {
      hval = $('#outh1').val();
      hval++;
      $('#outh1').val(hval);
      $('#outm1').val(00);
    }
  }
  mval = $('#inm2').val();
  if (!((mval == 00) || (mval == 0))) {
    if (!(round15(mval) == 60)) {
      $('#inm2').val(round15(mval));
    }else {
      hval = $('#inh2').val();
      hval++;
      $('#inh2').val(hval);
      $('#inm2').val(00);
    }
  }
  
  mval = $('#outm2').val();
  if (!((mval == 00) || (mval == 0))) {
    if (!(round15(mval) == 60)) {
      $('#outm2').val(round15(mval));
    }else {
      hval = $('#outh2').val();
      hval++;
      $('#outh2').val(hval);
      $('#outm2').val(00);
    }
  }
  
  mval = $('#inm3').val();
  if (!((mval == 00) || (mval == 0))) {
    if (!(round15(mval) == 60)) {
      $('#inm3').val(round15(mval));
    }else {
      hval = $('#inh3').val();
      hval++;
      $('#inh3').val(hval);
      $('#inm3').val(00);
    }
  }
  
  mval = $('#outm3').val();
  if (!((mval == 00) || (mval == 0))) {
    if (!(round15(mval) == 60)) {
      $('#outm3').val(round15(mval));
    }else {
      hval = $('#outh3').val();
      hval++;
      $('#outh3').val(hval);
      $('#outm3').val(00);
    }
  }
  
  mval = $('#inm4').val();
  if (!((mval == 00) || (mval == 0))) {
    if (!(round15(mval) == 60)) {
      $('#inm4').val(round15(mval));
    }else {
      hval = $('#inh4').val();
      hval++;
      $('#inh4').val(hval);
      $('#inm4').val(00);
    }
  }
  
  mval = $('#outm4').val();
  if (!((mval == 00) || (mval == 0))) {
    if (!(round15(mval) == 60)) {
      $('#outm4').val(round15(mval));
    }else {
      hval = $('#outh4').val();
      hval++;
      $('#outh4').val(hval);
      $('#outm4').val(00);
    }
  }
  
  process24hr('in', '1');
  process24hr('in', '2');
  process24hr('in', '3');
  process24hr('in', '4');
  process24hr('out', '1');
  process24hr('out', '2');
  process24hr('out', '3');
  process24hr('out', '4');
}
function process24hr(io, line) {
  var hval = $('#' + io + 'h' + line).val();
  if (hval > 12) {
    $('#am' + io + line).prop('checked', false);
    $('#pm' + io + line).prop('checked', true);
    hval = (hval - 12);
    $('#' + io + 'h' + line).val(hval);
    if (io=='in') {
      if (line==1) {
        setpm('out1');
        setpm('in2');
        setpm('out2');
        setpm('in3');
        setpm('out3');
        setpm('in4');
        setpm('out4');
      }
      if (line==2) {
        setpm('out2');
        setpm('in3');
        setpm('out3');
        setpm('in4');
        setpm('out4');
      }
      if (line==3) {
        setpm('out3');
        setpm('in4');
        setpm('out4');
      }
      if (line==4) {
        setpm('out4');
      }
    }else {
      if (line==1) {
        setpm('in2');
        setpm('out2');
        setpm('in3');
        setpm('out3');
        setpm('in4');
        setpm('out4');
      }
      if (line==2) {
        setpm('in3');
        setpm('out3');
        setpm('in4');
        setpm('out4');
      }
      if (line==3) {
        setpm('in4');
        setpm('out4');
      }
    }
  }
  if ($('#' + io + 'm' + line).val() == 0) {
    $('#' + io + 'm' + line).val() == '00';
  }
}
function evaluateshown(speed) {
  if ((($('#inh1').val() == 0) || ($('#inh1').val() == 00)) && (($('#inm1').val() == 0) || ($('#inm1').val() == 00))) {
    hideline('#out1', speed);
    hideline('#in2', speed);
    hideline('#out2', speed);
    hideline('#in3', speed);
    hideline('#out3', speed);
    hideline('#in4', speed);
    hideline('#out4', speed);
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
    showline('#out1', speed);
    showline('#in2', speed);
  }
  
  if ((($('#inh2').val() == 0) || ($('#inh2').val() == 00)) && (($('#inm2').val() == 0) || ($('#inm2').val() == 00))) {
    hideline('#out2', speed);
    hideline('#in3', speed);
    hideline('#out3', speed);
    hideline('#in4', speed);
    hideline('#out4', speed);
  }else {
    showline('#out1', speed);
    showline('#out2', speed);
    showline('#in2', speed);
  }

  if ((($('#outh2').val() == 0) || ($('#outh2').val() == 00)) && (($('#outm2').val() == 0) || ($('#outm2').val() == 00))) {
    hideline('#in3', speed);
    hideline('#out3', speed);
    hideline('#in4', speed);
    hideline('#out4', speed);
    
  }else {
    showline('#out1', speed);
    showline('#out2', speed);
    showline('#in2', speed);
    showline('#in3', speed);
  }  
  
  if ((($('#inh3').val() == 0) || ($('#inh3').val() == 00)) && (($('#inm3').val() == 0) || ($('#inm3').val() == 00))) {
    hideline('#out3', speed);
    hideline('#in4', speed);
    hideline('#out4', speed);
  }else {
    showline('#out1', speed);
    showline('#out2', speed);
    showline('#in2', speed);
    showline('#in3', speed);
    showline('#out3', speed);
  }
  if ((($('#outh3').val() == 0) || ($('#outh3').val() == 00)) && (($('#outm3').val() == 0) || ($('#outm3').val() == 00))) {
    hideline('#in4', speed);
    hideline('#out4', speed);
  }else {
    if (!(($('#outm3').val() == 00) || ($('#outm3').val() == 0))) {
      showline('#out1', speed);
      showline('#out2', speed);
      showline('#in2', speed);
      showline('#in3', speed);
      showline('#out3', speed);
      showline('#in4', speed);
    }
  }
  if ((($('#inh4').val() == 0) || ($('#inh4').val() == 00)) && (($('#inm4').val() == 0) || ($('#inm4').val() == 00))) {
    hideline('#out4', speed);
  }else {
    showline('#out1', speed);
    showline('#out2', speed);
    showline('#in2', speed);
    showline('#in3', speed);
    showline('#out3', speed);
    showline('#in4', speed);
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
            rounded = 00;
          }
      }
    }
  }
  return rounded;
}
function validatehour(element) {
    if ((!(Math.floor($(element).val()) == $(element).val() && $.isNumeric($(element).val()))) || ($(element).val() > 24)) {
      $(element).addClass('invalid');
    }else{
      $(element).removeClass('invalid');
    }
}