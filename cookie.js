
//This function creates a cookie with username, password and startscore.
function createCookie( name, password ){
	
	//Sets startscore of user to 0;
	var score = "00000";
	
	//Sets username in the cookie.
	cookieName = name;
	//Sets userpassword.
	cookiePassword = password;
	
	//Stores the information in the cookie.
	document.cookie += "name=" + cookieName + ",password=" + cookiePassword + ",score=" + name + score + "?\n";

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
		var nameIndex = value.indexOf( name );
		var start = value.indexOf( "password" , nameIndex ) + 9;
		var end = value.indexOf( "," , start );
		
		//Sets value as the password.
		value = decodeURI( value.substring( start, end ) );
		
		return value;//Returns the string between given indexes.
	
	}
	
	return -1;//If the username doesnt exists, then the function returns -1.

}//End function getCookiePassword().

//Returns the score of the cookie.
function getCookieScore( name ){
	
	if( getCookieName( name ) != -1 ){
	
		//Stores the cookie in the variable value.
		var value = document.cookie;
	
		var nameIndex = value.indexOf( name );
		var start = value.indexOf( "score", nameIndex ) + 6;
		var end = value.indexOf( "?", start );
		
		var score = decodeURI( value.substring( start, end ) );
	
		return score;
		
	}
	
	return -1;//If the user doesnt exists, returns -1.

}

function getCookieScoreIndex( name ){

	if( getCookieName( name ) != -1 ){
	
		var value = document.cookie;
	
		var nameIndex = value.indexOf( name );
		var scoreIndex = value.indexOf( "score", nameIndex ) + 6;
		
		return scoreIndex;

	}
	
	return -1;
}

//Formats a score to fit score string in cookie.
function changeScoreFormat( score ){
	
	var formattedScore = "";
	
	if( score.length <= 4 ){
	
		for( var i = 0; i <= ( 4 - score.length ); i++ ){
		
			formattedScore += "0";
	
		}
		
		//Adds appropriate zeroes to number so that it fits the format "xxxx";
		formattedScore += score;
	
		return formattedScore;
	}
	
	return -1;
	
}

//Change the score of the user.
function setCookieScore( name, score ){
	
	//Checks if the name entered exists.
	//If it does, sets new score in the cookie.
	if( getCookieName( name ) != -1 ){
		
		//Saves string of the cookie in a variable.
		var cookieString = document.cookie.toString();
		
		//Gets the place where the score starts in string.
		var scoreIndex =  getCookieScoreIndex( name );
		
		//Gets old score from the cookie
		var oldScore = getCookieScore( name );
		
		//Formats the score to "xxxxx"
		var formattedScore = changeScoreFormat( score );
		
		//Makes a new score with a unique id.
		var newScore = name + formattedScore;

		//Replaces old score with new score.
		var newCookieString = cookieString.replace( oldScore, newScore );
		
		//Updates the new cookie with the new score to the selected user.
		document.cookie = newCookieString;
		
	}
	
	return -1;
	
}//End function setCookieScore
