
//This function creates a cookie with username, password and startscore.
function createCookie( name, password ){
	
	//Sets startscore of user to 0;
	var score = 0;
	
	//Sets username in the cookie.
	cookieName = name;
	//Sets userpassword.
	cookiePassword = password;
	
	//Stores the information in the cookie.
	document.cookie = cookieName + "=" + cookiePassword + "*" + score + "?";

}

//Returns username of the cookie.
function getCookieName( name ){

	var value = document.cookie;
	var nameLength = name.length;
	var start = value.indexOf( name );
	var end =  start + name.length;
	
	if( decodeURI( value.substring( start, end ) ) == name ){
		
		value = decodeURI( value.substring( start, end ) );
		
		return value;
	
	}
	
	return -1;
	
}//End function getCookie.

//Returns the password of a cookie.
function getCookiePassword( name ){

	//If a user exists, check for password of that user.
	if( getCookieName( name )  != -1 ){
		
		var value = document.cookie;
		
		//Setting start variable to where the password starts.
		var start = value.indexOf( name ) + name.length + 1;
		var end = value.indexOf( "*", start );
		
		//Sets value as the password.
		value = decodeURI( value.substring( start, end ) );
	
	}
	
	return value;

}//End function getCookiePassword().

//Returns the score of the cookie.
function getCookieScore( name ){
	
	//Stores the cookie in the variable value.
	var value = document.cookie;
	
	
	var start = value.indexOf( "*", name ) + 1;
	var end = value.indexOf( "?", start );
	var score = decodeURI( value.substring( start, end ) );
	
	return score;

}

//Change the score of the user.
function setCookieScore( name, score ){
	
	var n = "Sindre";
	
	var value = document.cookie;
	
	var start = value.indexOf( n, 0 ) + 1;
	var end = value.indexOf( start, "?" );
	value.substring( start, end ) = "100";

}
