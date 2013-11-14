
//This function creates a cookie with username, password and startscore.
function createCookie( name, password ){
	
	var cookieString = ""
	var exDate = new Date();
	exDate.setDate( exDate.getDate() + 100 );
	
	//Sets startscore of user to 0 with format "xxxxx";
	var score = "00000"
	
	cookieString += name + "=" + "password!" + password + "!score!" + name + score + "!;";
	cookieString += "expires=" + exDate.toUTCString() + ";";
	//cookieString += "path=/;";
	//cookieString += "domain=student.cs.hioa.no;";
	
	document.cookie = cookieString;

}

function checkCookie(){
	
	var exists = false;
	
	if( document.cookie.indexOf( "name," ) != -1 ){
		
		exists =  true;
	
	}
	
	return exists

}

function deleteCookie(){
	
	document.cookie = "expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	
}

//Returns username of the cookie.
function getCookieName( name ){
	
	//Stores the cookie in a variable.
	var value = document.cookie;
	
	//Stores the length of the name chosen.
	var nameLength = name.length;
	
	//Sets startindex as the index of name.
	var nameSrc = name + "=";
	var start = value.indexOf( nameSrc );
	
	//Sets endindex as the end of the name.
	var end =  start + name.length;
	
	if( decodeURI( value.substring( start, end ) ) == name ){
		
		//If the name entered exists in the cookie, the method return sthe name value in the cookie.
		value = decodeURI( value.substring( start, end ) );
		
		return value;
	
	}
	
	//Returns -1 if the name doesnt exist in the cookie.
	return -1;
	
}//End function getCookie.

//Returns the password of a cookie.
function getCookiePassword( name ){

	//If a user exists, check for password of that user.
	if( getCookieName( name )  != -1 ){
		
		//Stores the cookie in as a variable.
		var value = document.cookie;
		
		//Setting start variable to where the password starts.
		var nameIndex = value.indexOf( name );
		var start = value.indexOf( "password" , nameIndex ) + 9;
		var end = value.indexOf( "!" , start );
		
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
		
		//Finds the index of input name in the cookie.
		var scoreIndex = getCookieScoreIndex( name );
		
		//Finds the end of the score.
		var end = value.indexOf( "!", scoreIndex );
		
		//Gets the score, which is between the found indexes.
		var score = decodeURI( value.substring( scoreIndex, end ) );
		
		//Returns the score.
		return score;
		
	}
	
	return -1;//If the user doesnt exists, returns -1.

}

//Convert a users score to an integer value, so it can be compared to other scores.
function getCookieScoreInt( name ){
	
	//If the name is valid.
	if( getCookieName( name ) != -1 ){
		
		//Gets unique score for the user chosen and substracts the id from the string leaving only the number.
		//Converts the score to an integer.
		var scoreString = getCookieScore( name );
		scoreString = scoreString.replace( name, "" );
		
		//Converts the number portion of the scorestring to an integer.
		var scoreInt = parseInt( scoreString );
		
		//Returns the integer value of the score.
		return scoreInt;
	
	}
	
	//If name is not valid, returns -1.
	return -1;

}

//Finds and returns the index of score of a chosen username.
function getCookieScoreIndex( name ){

	if( getCookieName( name ) != -1 ){
		
		var value = document.cookie;
		var nameIndex;
		var scoreIndex;
		
		if( getCookieName( "loggedIn" ) != -1 ){
	
			nameIndex = value.indexOf( name, name );
			scoreIndex = value.indexOf( "score", nameIndex ) + 6;
			
			return scoreIndex;
			
		}
		
		nameIndex = value.indexOf( name );
	    scoreIndex = value.indexOf( "score", nameIndex ) + 6;
		
		return scoreIndex;

	}
	
	return -1;
}

//Formats a score to fit score string in cookie.
function changeScoreFormat( score ){
	
	var formattedScore = "";
	
	if( score.length <= 5 ){
	
		for( var i = 0; i <= ( 4 - score.length ); i++ ){
			
			//Builds up the formatted score to the preferred format "xxxxx"
			formattedScore += "0";
	
		}
		
		//Adds appropriate zeroes to number so that it fits the format "xxxxx";
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
		
		//Used for setting a expiration date when the score is changed in the cookie.
		var exDate = new Date();
	    exDate.setDate( exDate.getDate() + 100 );
		
		//Gets old score from the cookie
		var oldScore = getCookieScore( name );
		
		//Formats the score to "xxxxx"
		var formattedScore = changeScoreFormat( score );
		
		//Makes a new score with a unique id.
		var newScore = name + formattedScore;

		//Replaces old score with new score.
		document.cookie = document.cookie.replace( oldScore, newScore );

		
		//Gets the password for the user.
		var pword = getCookiePassword (name);
		
		document.cookie = " " + name + "=password!" + pword+ "!score!" + newScore + "!;" + "expires=" + exDate + ";";
		
		alert( document.cookie.toString() );
		
	}
	
	return -1;
	
}//End function setCookieScore
