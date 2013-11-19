<!DOCTYPE html>

<html>
  
  <head>
    <meta charset="utf-8">
	<title>Login forms and validation test</title>
	<script charset="utf-8" type="text/javascript" src="cookie_single.js"></script>
	<script charset="utf-8" type="text/javascript" src="login.js"></script>
	<script charset="utf-8" type="text/javascript" src="loggedinas.js"></script>
  </head>
  
  <body>
    <h1>Form value:</h1>
	<h2 id="log">Logged in:</h2>
	
	<form name="login" onsubmit="return validateForm( namefield.value, passwordfield.value )" action="javascript:void(0)" method="post">
	
	  Name:     <input type="text" name="namefield"></input><br>
	  Password: <input type="password" name="passwordfield"></input>
	            <input type="submit" value="Log in">
	
	</form>
	
	<button onclick="getInfo()">
	  Get Info
	</button>
	
	<button onclick="getName()">
	  Check Name
	</button>
	
	<button onclick="getPassword()">
	  Check Password
	</button>
	
	<button onclick="getScore()">
	  Check score
	</button>
	
	<button onclick="getScoreIndex()">
	  Get Score Index
	</button>
	
	<button onclick="setScore()">
	  Set score
	</button>

	  

  </body>


</html>
