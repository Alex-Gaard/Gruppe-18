
//This function checks if the login name and password contains only valid characters.
function validCharacter( x, y ){

	var characters = "abcdefghijklmnopqrstuvwxyzæøå-1234567890";
	var name = x.toLowerCase();
	var password = y.toLowerCase();
									
	for( var i = 0; i < x.length; i++ ){
		
		if( characters.indexOf( name.charAt(i) ) < 0 ){

			return false;
			
		}

	}
	
	for( var j = 0; j < y.length; j++ ){
	
		if( characters.indexOf( password.charAt(j) ) < 0 ){

			return false;
	
	    }
		
	}
	
	return true;
	
}//End function validCharacter().

//Validates that all fields in the form are filled out.
function validateForm( name, password ){
	
	var x = name; //Sets x as the value of name field.
	var y = password; //Sets y as the value of password field.
	
	
	//Checks if username and password contains only valid characters.
	if( validCharacter( x, y) == false ){
	
		alert("Either username or password contains invalid characters!");
		return;
	
	}
	
	//Checks if any of the fields are empty and gives a message to the user.
	if( x == null || x == "" || y == null || y == ""){
	
		alert("Please fill out all fields of the form!");
		return;
	
	}
	
	if( getCookieName( x ) === -1 ){
		
		createCookie( x, y );
	    setLoggedInAs( x );
		alert( "A new user was created!\n" +
		       "Username: " + x + "\n" +
			   "Password: " + y );
		return;
		
	}
	
	//Checks if a cookie exists.
	if( getCookieName( x ) != -1 ){
		
		//Checks if the name that the user logged in with is the same as username in cookie.
		if( getCookieName( x ) == x ){
			
			//Checks if the password that the user logged in with is the same as password stored in cookie.
			if( getCookiePassword( x ) == y ){
				
				setLoggedInAs( x );
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
		setLoggedInAs( x );//Sets current user.
		
		alert( "A new user was created.\n" + "Username: " + x + "\nPassword: " + y );
		
		return;
	
	}
	

}//End function validateForm().

//Use to check what information is stored in the cookie.

function loggedInAs(){

	alert( getLoggedInAs() );

}

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
	
	alert ( getCookieScore( name ) );

}

function getScoreInt(){

	var name = prompt( "Select user" );
	
	alert( getCookieScoreInt( name ) );

}

function getAchievement(){

	var name = prompt( "Select user" );
	
	alert( getCookieAchievement( name ) );

}
