

<?php
  if (!(isset($_COOKIE["372fd75847c64826d41b24ac512d11803834447a"])))
    {
      header('Location: http://submit-iit-timesheet.geekkidconsulting.com/login.aspx');
    } else {
      $dat = date("Y-m-d");
      if (!($_GET['date'] == ''))
      {
        $dat = $_GET['date'];
      }
      if (!(isset($_COOKIE[$dat])))
        {
          header('Location: http://submit-iit-timesheet.geekkidconsulting.com/default.aspx?action=pull&date=' .$dat);
        } else {
          $cokval = explode("&", $_COOKIE[$dat]);
          $inh1 = str_replace("inh1=", "", $cokval[0]);
          $inh2 = str_replace("inh2=", "", $cokval[1]);
          $inh3 = str_replace("inh3=", "", $cokval[2]);
          $inh4 = str_replace("inh4=", "", $cokval[3]);
          $inm1 = str_replace("inm1=", "", $cokval[4]);
          $inm2 = str_replace("inm2=", "", $cokval[5]);
          $inm3 = str_replace("inm3=", "", $cokval[6]);
          $inm4 = str_replace("inm4=", "", $cokval[7]);
          $inam1 = str_replace("inam1=", "", $cokval[8]);
          $inam2 = str_replace("inam2=", "", $cokval[9]);
          $inam3 = str_replace("inam3=", "", $cokval[10]);
          $inam4 = str_replace("inam4=", "", $cokval[11]);
          $outh1 = str_replace("outh1=", "", $cokval[12]);
          $outh2 = str_replace("outh2=", "", $cokval[13]);
          $outh3 = str_replace("outh3=", "", $cokval[14]);
          $outh4 = str_replace("outh4=", "", $cokval[15]);
          $outm1 = str_replace("outm1=", "", $cokval[16]);
          $outm2 = str_replace("outm2=", "", $cokval[17]);
          $outm3 = str_replace("outm3=", "", $cokval[18]);
          $outm4 = str_replace("outm4=", "", $cokval[19]);
          $outam1 = str_replace("outam1=", "", $cokval[20]);
          $outam2 = str_replace("outam2=", "", $cokval[21]);
          $outam3 = str_replace("outam3=", "", $cokval[22]);
          $outam4 = str_replace("outam4=", "", $cokval[23]);
        }
    }
  
  
?>
<!Doctype HTML>
<html lang="en-US">

  <!--=================================================================================

  index.php
  
  Designed by: Dean Nelson and Renée Weaver
  PHP and JavaScript developed by: Brian Semrau
  
  Purpose: To serve as the main page in our project.  This page works as the front end
  to allow student workers to submit a log of the hours that they have worked.
  
  Issues with this page should be submitted to:
  https://github.com/The-Three-Stooges-and-Renee/William-Tell-DB/issues
  
  All questions, comments, or inquiries about supporting this project should be sent to:
  williamtell@webhomework.geekkidconsulting.com.
  
  =================================================================================-->
  
  <head>
    <title>Submit timesheet</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=no" />
    <!--Link to CSS style sheets.-->
    <link rel="stylesheet" type="text/css" href="css/Screen.css"/>
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
        <input type="date" name="date" value="<?php echo $dat;?>" />
        <input type="submit" name="submit" formaction="index.php" value="Load Date" class="jshide" />
      
        <div id="in1">
          <p>Time in:</p>
          <input type="number" name="inh1" value="<?php echo $inh1;?>" />:<input type="number" name="inm1" value="<?php echo $inm1;?>" />
          <input type="radio" name="amin1" value="True" <?php if ($inam1=='True'){echo 'checked';}?>>AM<input type="radio" name="amin1" value="False" <?php if ($inam1=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="out1">
          <p>Time out:</p>
          <input type="number" name="outh1" value="<?php echo $outh1;?>" />:<input type="number" name="outm1" value="<?php echo $outm1;?>" />
          <input type="radio" name="amout1" value="True" <?php if ($outam1=='True'){echo 'checked';}?>>AM<input type="radio" name="amout1" value="False" <?php if ($outam1=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="in2">
          <p>Time in:</p>
          <input type="number" name="inh2" value="<?php echo $inh2;?>" />:<input type="number" name="inm2" value="<?php echo $inm1;?>" />
          <input type="radio" name="amin2" value="True" <?php if ($inam2=='True'){echo 'checked';}?>>AM<input type="radio" name="amin2" value="False" <?php if ($inam2=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="out2">
          <p>Time out:</p>
          <input type="number" name="outh2" value="<?php echo $outh2;?>" />:<input type="number" name="outm2" value="<?php echo $outm2;?>" />
          <input type="radio" name="amout2" value="True" <?php if ($outam2=='True'){echo 'checked';}?>>AM<input type="radio" name="amout2" value="False" <?php if ($outam2=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="in3">
          <p>Time in:</p>
          <input type="number" name="inh3" value="<?php echo $inh3;?>" />:<input type="number" name="inm3" value="<?php echo $inm3;?>" />
          <input type="radio" name="amin3" value="True" <?php if ($inam3=='True'){echo 'checked';}?>>AM<input type="radio" name="amin3" value="False" <?php if ($inam3=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="out3">
          <p>Time out:</p>
          <input type="number" name="outh3" value="<?php echo $outh3;?>" />:<input type="number" name="outm3" value="<?php echo $outm3;?>" />
          <input type="radio" name="amout3" value="True" <?php if ($outam3=='True'){echo 'checked';}?>>AM<input type="radio" name="amout3" value="False" <?php if ($outam3=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="in4">
          <p>Time in:</p>
          <input type="number" name="inh4" value="<?php echo $inh4;?>" />:<input type="number" name="inm4" value="<?php echo $inm4;?>" />
          <input type="radio" name="amin4" value="True" <?php if ($inam4=='True'){echo 'checked';}?>>AM<input type="radio" name="amin4" value="False" <?php if ($inam4=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="out4">
          <p>Time out:</p>
          <input type="number" name="outh4" value="<?php echo $outh4;?>" />:<input type="number" name="outm4" value="<?php echo $outm4;?>" />
          <input type="radio" name="amout4" value="True" <?php if ($outam4=='True'){echo 'checked';}?>>AM<input type="radio" name="amout4" value="False" <?php if ($outam4=='False'){echo 'checked';}?>>PM
        </div>
      
        <input type="submit" name="submit" value="Save Changes" />
      </form>
    </div> <!-- end of form -->
    
    <script src="js/jquery.min.js" type="text/javascript"></script>
    <script src="js/interaction.js" type="text/javascript"></script>
  </body>
</html>