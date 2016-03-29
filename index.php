

<?php
  if (!(isset($_COOKIE["372fd75847c64826d41b24ac512d11803834447a"])))
    {
      header('Location: http://submit-iit-timesheet.geekkidconsulting.com/login.aspx');
    }
  $dat = date("Y-m-d");
  if (!($_GET['date'] == ''))
  {
    $dat = $_GET['date'];
  }
  if (!(isset($_COOKIE[$dat])))
    {
      //header('Location: http://submit-iit-timesheet.geekkidconsulting.com/default.aspx?action=pull&date=' + $dat);
      echo "<script>alert('Location: http://submit-iit-timesheet.geekkidconsulting.com/default.aspx?action=pull&date='" + $dat +");</script>";
    } else {
      $inh1 = $_COOKIE[$dat]["inh1"];
      $inh2 = $_COOKIE[$dat]["inh2"];
      $inh3 = $_COOKIE[$dat]["inh3"];
      $inh4 = $_COOKIE[$dat]["inh4"];
      $inm1 = $_COOKIE[$dat]["inm1"];
      $inm2 = $_COOKIE[$dat]["inm2"];
      $inm3 = $_COOKIE[$dat]["inm3"];
      $inm4 = $_COOKIE[$dat]["inm4"];
      $inam1 = $_COOKIE[$dat]["inam1"];
      $inam2 = $_COOKIE[$dat]["inam2"];
      $inam3 = $_COOKIE[$dat]["inam3"];
      $inam4 = $_COOKIE[$dat]["inam4"];
      $outh1 = $_COOKIE[$dat]["outh1"];
      $outh2 = $_COOKIE[$dat]["outh2"];
      $outh3 = $_COOKIE[$dat]["outh3"];
      $outh4 = $_COOKIE[$dat]["outh4"];
      $outm1 = $_COOKIE[$dat]["outm1"];
      $outm2 = $_COOKIE[$dat]["outm2"];
      $outm3 = $_COOKIE[$dat]["outm3"];
      $outm4 = $_COOKIE[$dat]["outm4"];
      $outam1 = $_COOKIE[$dat]["outam1"];
      $outam2 = $_COOKIE[$dat]["outam2"];
      $outam3 = $_COOKIE[$dat]["outam3"];
      $outam4 = $_COOKIE[$dat]["outam4"];
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
      <input type="date" name="date" value="<?php echo $dat;?>" />
      
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