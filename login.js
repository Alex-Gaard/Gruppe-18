
function log( name ){
	
	document.getElementById("log").innerHTML="Welcome back ";

}

//Validates that all fields in the form are filled out.
function validateForm( name, password ){
	
	var x = name; //Sets x as the value of name field.
	var y = password; //Sets y as the value of password field.
	
	//Checks if any of the fields are empty and gives a message to the user.
	if( x == null || x == "" || y == null || y == ""){
	
		alert("Please fill out all fields of the form!");
		return;
	
	}
	
	if( getCookieName( x ) == -1 ){
		
		var answer = prompt( "Cannot find user: " + x + "\nDo you want to create a new user with name " + x + " and password " + y + "\n y/n ?" );
		
		//Creates a new user if the answer is yes.
		if( answer == "y" ){
		
			createCookie( x, y );
			return;
			
		}
		
		//Exits function if answer is something other than yes.
		if( answer != "y" ){
		
			return;
		
		}
		
	
	}
	
	//Checks if a cookie exists.
	if( getCookieName( x ) != -1 ){
		
		//Checks if the name that the user logged in with is the same as username in cookie.
		if( getCookieName( x ) == x ){
			
			//Checks if the password that the user logged in with is the same as password stored in cookie.
			if( getCookiePassword( x ) == y ){
				
				log( x );
				alert( "Welcome back " +  x );
				
				return;
				
			}
			
			if( getCookiePassword( x ) != y ){
			
				alert( "Wrong password! for user " + x );
				return;
				
			}
		
		}
		
    }
	
	//If a cookie doesnt already exists, creates a new cookie with chosen username and password.
	if( getCookieName( x ) == -1 ){
		
		createCookie( x, y );
		
		alert( "A new user was created.\n" + "Username: " + x + "\nPassword: " + y );
	
	}
	

}//End function validateForm().

//Use to check what information is stored in the cookie.
function getInfo(){

	alert( document.cookie.toString() );

}

function getName(){
	
	var name = prompt("Enter name to search for");
	
	alert( getCookieName( name ) );
}

function getPassword(){

	var name = prompt("Enter the user you want the password for");
	
	alert( getCookiePassword( name ) );
	
}

function getScore(){
	
	var name = prompt("Enter the user you want the score for");
	
	alert( getCookieScore( name ) );

}

function getScoreIndex(){
	
	var name = prompt( "Enter the user you want the score index of" );
	
	alert( getCookieScoreIndex( name ) );

}

function setScore(){
	
	var name = prompt( "Select user" );
	var score = prompt( "Give selected score to user");
	
	setCookieScore( name, score );
	
	alert ( document.cookie.toString() );
	
	

}
