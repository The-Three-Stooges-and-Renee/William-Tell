<?php
  if (!(isset($_COOKIE["372fd75847c64826d41b24ac512d11803834447a"])))
    {
      header('Location: http://submit-iit-timesheet.geekkidconsulting.com/login.aspx');
    }else {
      $cokval = explode("&", $_COOKIE["372fd75847c64826d41b24ac512d11803834447a"]);
      $usr = str_replace("user=", "", $cokval[0]);
      $chars = str_split($usr);
      $strbuilder = "20";
      foreach($chars as $char){
        $strbuilder = ($strbuilder . (ord(strtolower($char)) - 95));
      }
      $usr = $strbuilder;
      $chars = str_split($usr);
      $strbuilder = "";
      $counte = 0;
      $addchars = "false";
      if (strlen($strbuilder) < 8){
        $addchars = "true";
      }
      foreach($chars as $char){
        $counte++;
        if (!($counte > 8)){
            $strbuilder = ($strbuilder . $char);
        }
      }
      if (strlen($strbuilder) < 8){
        do {
          $strbuilder = ($strbuilder . "0");
        } while(strlen($strbuilder) < 8);
      }
      
      $regpin = rand(100000, 999999 );
    }
    
?>
<!Doctype HTML>
<html lang="en-US">

=======

<!--=================================================================================

  index.php
  
  Designed by: Dean Nelson and Renée Weaver with assistance from Brian Semrau
  PHP and JavaScript developed by: Brian Semrau
  
  Purpose: To serve as the welcome page in our project.  This page calculates the
  A number of the user, as well as generates a random registration pin and
  ensures that the user has an authentication cookie.  While this page doesn't
  actually verify the cookie is valid, it should be enough for most users.
  The database does check the validity of the cookie before submitting the changes,
  so that prevents un-authorized submittals and shows a proof of concept.
  
  Issues with this page should be submitted to:
  https://github.com/The-Three-Stooges-and-Renee/William-Tell-DB/issues
  
  All questions, comments, or inquiries about supporting this project should be sent to:
  williamtell@webhomework.geekkidconsulting.com.
  
  =================================================================================-->


	<head>
		<title>IIT Student Welcome</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, shink-to-fit=no" />
		<!--Link to CSS style sheets.-->
		<link rel="stylesheet" type="text/css" href="css/Screen.css"/>
	</head>
	<body class="welcome">

		<div class="logo">
			<img src="images/IIT_logo.png" alt="IIT logo">
		</div>
    
    <div id="nav_bar">
      <div class="nav">
        <a href="index.php">Welcome</a>
        <a href="#">Academics</a>
        <a href="#">Finances</a>
        <a href="timesheet.php">Work</a>
        <a href="#">OTS&nbsp;Downloads</a>
        <a href="http://submit-iit-timesheet.geekkidconsulting.com/login.aspx?signout=true">Sign&nbsp;Out</a>
      </div>
    </div> <!-- end of nav_bar -->

    <div id="welcome">
      <h2>Welcome to the Illinois Tech Portal</h2>
      <a href="http://web.iit.edu/university-calendar">Happenings</a>
      <a href="https://iit.edu/news/iittoday/">News</a>
      <a href="http://phonebook.iit.edu/">University Phonebook</a>
    </div><!--End of Welcome-->

    <div id="personal-id">
      <h2>IIT Personal ID Numbers</h2>
      <h3>Banner CWID Number:</h3><p>A<?php echo $strbuilder;?></p>
      <h3>Registration Pin:</h3><p><?php echo $regpin;?></p>
    </div><!--End of Personal ID numbers-->

    <div id="public-safety">
      <h2>Public Safety</h2>
      <h3>Emergency Numbers</h3>
      <h4>Main Campus</h4>
      <p>Emergency: 312.808.6363</p>
      <p>Non-Emergency: 312.808.6300</p>
      <h4>Downtown Campus</h4>
      <p>312.906.5030</p>
      <h4>Moffett Campus</h4>
      <p>708.563.8280</p>
      <h4>Rice Campus</h4>
      <p>630.682.6054</p>
      <h3>Important Public Safety Links</h3>
      <a href="http://web.iit.edu/public-safety">Public Safety</a>
      <a href="http://web.iit.edu/emergency">Emergency Information</a>
      <a href="https://iit.regroup.com/">IIT Alert</a>
      <a href="http://blogs.iit.edu/public_safety/">Incident Reports</a>
      <a href="https://www.facebook.com/IITPublicSafety">Public Safety Facebook Page</a>
    </div><!--End of Public Safety-->

	</body>
</html>