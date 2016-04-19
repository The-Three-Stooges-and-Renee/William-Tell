<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="login.aspx.vb" Inherits="backendDB.login" %>

<!DOCTYPE html>
<html lang="en-US">
  <!--=================================================================================

    login.aspx
  
    Designed by: Dean Nelson and Renée Weaver with assistance from Brian Semrau
    PHP and JavaScript developed by: Brian Semrau
  
    Purpose: To serve as the login page in our project. This page displays the IIT logo
    along with a login window that scales with the browser size for comparability with
    all devices.  It also talks to the Database we have running and sends unauthorized
    users to varius websites in an attempt to waste their time to ease the load on 
    our servers.
  
    Issues with this page should be submitted to:
    https://github.com/The-Three-Stooges-and-Renee/William-Tell-DB/issues
  
    All questions, comments, or inquiries about supporting this project should be sent to:
    williamtell@webhomework.geekkidconsulting.com.
  
    =================================================================================-->
	
  <head runat="server">
    <title>Timesheet Login</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=no" />
    <link rel="stylesheet" type="text/css" href="http://webhomework.geekkidconsulting.com/iit-timesheet/css/Screen.css" />
  </head>
  <body class="login">
    <div class="logo">
			 <img src="http://webhomework.geekkidconsulting.com/iit-timesheet/Images/IIT_logo_blk.png" alt="IIT logo">
    </div>
    <form id="form1" runat="server">
      <div id="login_form">
        <p>Username:</p>
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        <p>Password:</p>
        <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox>
        <asp:Button ID="Button1" runat="server" Text="Login" />
        <asp:Button ID="Button2" runat="server" Text="Create test account" />
      </div>
    </form>
  </body>
</html>
