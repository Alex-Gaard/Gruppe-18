<article>
<h1>Form value:</h1>
	<form name="login" onsubmit="validateForm( namefield.value, passwordfield.value )" method="POST" action="javascript:void(0)">
	
	  Name:     <input type="text" required name="namefield"></input><br>
	  Password: <input type="password" required name="passwordfield"></input>
	            <input type="submit" value="Log in"><br/>
                    <input type="checkbox" required name="terms_of_service">
                    Accept our <a href='?page=terms'>terms and conditions</a>.
	</form>
	
	<button class='centerbutton' onclick="deleteCookie()">
	  Delete Cookie
	</button>
<hr id='hr_bottom'/>
</article>
