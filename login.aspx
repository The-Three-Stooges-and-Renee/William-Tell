<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="login.aspx.vb" Inherits="backendDB.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
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
