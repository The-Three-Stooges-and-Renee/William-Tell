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

  timesheet.php
  
  Designed by: Dean Nelson and Renée Weaver with assistance from Brian Semrau
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
  <body class="timesheet">

    <div class="logo"></div>

    <div id="nav_bar">
      <ul>
        <li><a href="index.php">Welcome</a></li>
        <li><a href="#">Academics</a></li>
        <li><a href="#">Finances</a></li>
        <li><a href="timesheet.php">Work</a></li>
        <li><a href="#">OTS&nbsp;Downloads</a></li>
				<li><a href="#">Sign&nbsp;Out</a></li>
      </ul>
    </div> <!-- end of nav_bar -->

    <div id="ts-form">
      <form action="http://submit-iit-timesheet.geekkidconsulting.com/default.aspx" method="get">
				<p>Select a date:</p>
        <input type="date" id="date" name="date" value="<?php echo $dat;?>" />
        <input type="submit" name="submit" formaction="timesheet.php" value="Load Date" class="jshide" />
      
        <div id="in1" class="time_in">
          <p>Time in:</p>
          <input type="number" id="inh1" name="inh1" value="<?php echo $inh1;?>" />:<input type="number" id="inm1" name="inm1" value="<?php echo $inm1;?>" />
          <input type="radio" id="amin1" name="amin1" value="True" <?php if ($inam1=='True'){echo 'checked';}?>>AM<input type="radio" id="pmin1" name="amin1" value="False" <?php if ($inam1=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="out1" class="jshide time_out">
          <p>Time out:</p>
          <input type="number" id="outh1" name="outh1" value="<?php echo $outh1;?>" />:<input type="number" id="outm1" name="outm1" value="<?php echo $outm1;?>" />
          <input type="radio" id="amout1" name="amout1" value="True" <?php if ($outam1=='True'){echo 'checked';}?>>AM<input type="radio" id="pmout1" name="amout1" value="False" <?php if ($outam1=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="in2" class="jshide time_in">
          <p>Time in:</p>
          <input type="number" id="inh2" name="inh2" value="<?php echo $inh2;?>" />:<input type="number" id="inm2" name="inm2" value="<?php echo $inm1;?>" />
          <input type="radio" id="amin2" name="amin2" value="True" <?php if ($inam2=='True'){echo 'checked';}?>>AM<input type="radio" id="pmin2" name="amin2" value="False" <?php if ($inam2=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="out2" class="jshide time_out">
          <p>Time out:</p>
          <input type="number" id="outh2" name="outh2" value="<?php echo $outh2;?>" />:<input type="number" id="outm2" name="outm2" value="<?php echo $outm2;?>" />
          <input type="radio" id="amout2" name="amout2" value="True" <?php if ($outam2=='True'){echo 'checked';}?>>AM<input type="radio" id="pmout2" name="amout2" value="False" <?php if ($outam2=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="in3" class="jshide time_in">
          <p>Time in:</p>
          <input type="number" id="inh3" name="inh3" value="<?php echo $inh3;?>" />:<input type="number" id="inm3" name="inm3" value="<?php echo $inm3;?>" />
          <input type="radio" id="amin3" name="amin3" value="True" <?php if ($inam3=='True'){echo 'checked';}?>>AM<input type="radio" id="pmin3" name="amin3" value="False" <?php if ($inam3=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="out3" class="jshide time_out">
          <p>Time out:</p>
          <input type="number" id="outh3" name="outh3" value="<?php echo $outh3;?>" />:<input type="number" id="outm3" name="outm3" value="<?php echo $outm3;?>" />
          <input type="radio" id="amout3" name="amout3" value="True" <?php if ($outam3=='True'){echo 'checked';}?>>AM<input type="radio" id="pmout3" name="amout3" value="False" <?php if ($outam3=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="in4" class="jshide time_in">
          <p>Time in:</p>
          <input type="number" id="inh4" name="inh4" value="<?php echo $inh4;?>" />:<input type="number" id="inm4" name="inm4" value="<?php echo $inm4;?>" />
          <input type="radio" id="amin4" name="amin4" value="True" <?php if ($inam4=='True'){echo 'checked';}?>>AM<input type="radio" id="pmin4" name="amin4" value="False" <?php if ($inam4=='False'){echo 'checked';}?>>PM
        </div>
      
        <div id="out4" class="jshide time_out">
          <p>Time out:</p>
          <input type="number" id="outh4" name="outh4" value="<?php echo $outh4;?>" />:<input type="number" id="outm4" name="outm4" value="<?php echo $outm4;?>" />
          <input type="radio" id="amout4" name="amout4" value="True" <?php if ($outam4=='True'){echo 'checked';}?>>AM<input type="radio" id="pmout4" name="amout4" value="False" <?php if ($outam4=='False'){echo 'checked';}?>>PM
        </div>
      
        <input id="save" type="submit" name="submit" value="Save Changes" />
      </form>
			<div id="punchclock" class="jsshow hidden">
				<p class="emph">
					Or:
				</p>
				<button name="punchin" id="punchin">Punch In!</button> <button name="punchout" id="punchout">Punch Out!</button>
    </div>
		</div> <!-- end of form -->
        
    <script src="js/jquery.min.js" type="text/javascript"></script>
    <!--<script src="js/jquery_ui/jquery-ui.min.js"></script>-->
    <script src="js/interaction.js" type="text/javascript"></script>
  </body>
</html>