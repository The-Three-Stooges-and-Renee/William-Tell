<?php
  if (!(isset($_COOKIE["372fd75847c64826d41b24ac512d11803834447a"])))
    {
      header('Location: http://submit-iit-timesheet.geekkidconsulting.com/login.aspx');
    }
  $dat = date("Y/m/d");
  if (!($_GET['date'] == ''))
  {
    $dat = $_GET['date'];
  }
  $inh1 = '00';
  $inh2 = '00';
  $inh3 = '00';
  $inh4 = '00';
  $inm1 = '00';
  $inm2 = '00';
  $inm3 = '00';
  $inm4 = '00';
  $inam1 = 'True';
  $inam2 = 'True';
  $inam3 = 'True';
  $inam4 = 'True';
  $outh1 = '00';
  $outh2 = '00';
  $outh3 = '00';
  $outh4 = '00';
  $outm1 = '00';
  $outm2 = '00';
  $outm3 = '00';
  $outm4 = '00';
  $outam1 = 'True';
  $outam2 = 'True';
  $outam3 = 'True';
  $outam4 = 'True';
?>
<!Doctype HTML>
<html lang="end">

  <head>
    <title>Submit timesheet</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=no" />
    <!--Link to CSS style sheets.-->
    <link rel="stylesheet"
        type="text/css"
        href="Screen.css"/>
  </head>
  <body>
    <div id="iit_banner">
     <h1>IIT Timesheet Project - you have successfully authenticated!</h1>
    </div> <!-- end of iit_banner -->

    <div id="nav_bar">
     <h2>Hi!</h2>
    </div> <!-- end of nav_bar -->

    <div id="form">
     <p>Select a date:</p>
     <form action="http://submit-iit-timesheet.geekkidconsulting.com/default.aspx" method="get">
      <input type="date" name="date" placeholder="<?php echo $dat;?>" />
      
      <input type="number" name="inh1" value="<?php echo $inh1;?>" />:<input type="number" name="inm1" value="<?php echo $inm1;?>" />
      <input type="radio" name="amin1" value="True" <?php if ($inam1=='True'){echo 'checked';}?>>AM<input type="radio" name="amin1" value="False" <?php if ($inam1=='False'){echo 'checked';}?>>PM
      
      
      <input type="number" name="outh1" value="<?php echo $outh1;?>" />:<input type="number" name="outm1" value="<?php echo $outm1;?>" />
      <input type="radio" name="amout1" value="True" <?php if ($outam1=='True'){echo 'checked';}?>>AM<input type="radio" name="amout1" value="False" <?php if ($outam1=='False'){echo 'checked';}?>>PM
      
      
      <input type="number" name="inh2" value="<?php echo $inh2;?>" />:<input type="number" name="inm2" value="<?php echo $inm1;?>" />
      <input type="radio" name="amin2" value="True" <?php if ($inam2=='True'){echo 'checked';}?>>AM<input type="radio" name="amin2" value="False" <?php if ($inam2=='False'){echo 'checked';}?>>PM
      
      
      <input type="number" name="outh2" value="<?php echo $outh2;?>" />:<input type="number" name="outm2" value="<?php echo $outm2;?>" />
      <input type="radio" name="amout2" value="True" <?php if ($outam2=='True'){echo 'checked';}?>>AM<input type="radio" name="amout2" value="False" <?php if ($outam2=='False'){echo 'checked';}?>>PM
      
      
      <input type="number" name="inh3" value="<?php echo $inh3;?>" />:<input type="number" name="inm3" value="<?php echo $inm3;?>" />
      <input type="radio" name="amin3" value="True" <?php if ($inam3=='True'){echo 'checked';}?>>AM<input type="radio" name="amin3" value="False" <?php if ($inam3=='False'){echo 'checked';}?>>PM
      
      
      <input type="number" name="outh3" value="<?php echo $outh3;?>" />:<input type="number" name="outm3" value="<?php echo $outm3;?>" />
      <input type="radio" name="amout3" value="True" <?php if ($outam3=='True'){echo 'checked';}?>>AM<input type="radio" name="amout3" value="False" <?php if ($outam3=='False'){echo 'checked';}?>>PM
      
      
      <input type="number" name="inh4" value="<?php echo $inh4;?>" />:<input type="number" name="inm4" value="<?php echo $inm4;?>" />
      <input type="radio" name="amin4" value="True" <?php if ($inam4=='True'){echo 'checked';}?>>AM<input type="radio" name="amin4" value="False" <?php if ($inam4=='False'){echo 'checked';}?>>PM
      
      
      <input type="number" name="outh4" value="<?php echo $outh4;?>" />:<input type="number" name="outm4" value="<?php echo $outm4;?>" />
      <input type="radio" name="amout4" value="True" <?php if ($outam4=='True'){echo 'checked';}?>>AM<input type="radio" name="amout4" value="False" <?php if ($outam4=='False'){echo 'checked';}?>>PM
      
      
      <input type="submit" name="submit" value="Save Changes" />
     </form>
    </div> <!-- end of form -->
  </body>
</html>