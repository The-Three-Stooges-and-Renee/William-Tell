<!--<?php
  if (!(isset($_COOKIE["372fd75847c64826d41b24ac512d11803834447a"])))
    {
      header('Location: http://submit-iit-timesheet.geekkidconsulting.com/login.aspx');
    }
?>-->
<!Doctype HTML>
<html lang="end">

  <head>
    <title></title>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width,initial-scale=1.0",shink-to-fit=no"/>
    <!--Link to CSS style sheets.-->
    <link rel="stylesheet"
        type="text/css"
        href="Screen.css"/>
  </head>
  <body>
    <h1>IIT Timesheet Project - you have successfully authenticated!</h1>
    <p>Select a date:</p>
    <form action="http://submit-iit-timesheet.geekkidconsulting.com/default.aspx" method="get">
      <input type="date" name="date" />
      <input type="number" name="inh1" />:<input type="number" name="inm1" />
      <input type="radio" name="amin1" value="True" checked>AM<input type="radio" name="amin1" value="False">PM
      <input type="number" name="outh1" />:<input type="number" name="outh1" />
      <input type="radio" name="amout1" value="True" checked>AM<input type="radio" name="amout1" value="False">PM
      <input type="number" name="inh2" />:<input type="number" name="inm2" />
      <input type="radio" name="amin2" value="True" checked>AM<input type="radio" name="amin2" value="False">PM
      <input type="number" name="outh2" />:<input type="number" name="outh2" />
      <input type="radio" name="amout2" value="True" checked>AM<input type="radio" name="amout2" value="False">PM
      <input type="number" name="inh3" />:<input type="number" name="inm3" />
      <input type="radio" name="amin3" value="True" checked>AM<input type="radio" name="amin3" value="False">PM
      <input type="number" name="outh3" />:<input type="number" name="outh3" />
      <input type="radio" name="amout3" value="True" checked>AM<input type="radio" name="amout3" value="False">PM
      <input type="number" name="inh4" />:<input type="number" name="inm4" />
      <input type="radio" name="amin4" value="True" checked>AM<input type="radio" name="amin4" value="False">PM
      <input type="number" name="outh4" />:<input type="number" name="outh4" />
      <input type="radio" name="amout4" value="True" checked>AM<input type="radio" name="amout4" value="False">PM
      <input type="submit" name="submit" value="Save Changes" />
    </form>
  </body>
