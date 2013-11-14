//This function creates a cookie with username, password and startscore.
function createCookie( name, password ){
	
	var cookieString = "";
	var exDate = new Date();
	exDate.setDate( exDate.getDate() + 100 );
	
	//Sets startscore of user to 0 with format "xxxxx".
	//Sets achievement variable to 000 ( no achievements and no easteregg enabled ).
	var score = "00000";
	var achieve = "321";
	
	cookieString += name + "=" + "password!" + password + "!score!" + name + score + "!achieve!" + achieve + "!;";
	cookieString += "expires=" + exDate.toUTCString() + ";";
	//cookieString += "path=/;";
	//cookieString += "domain=student.cs.hioa.no;";
	
	//Creates a cookie as the cookie string.
	document.cookie = cookieString;

}

//Deletes all cookies on page.
function deleteCookie(){
	
	var exDate = new Date();
	
	//Sets expiration date to one day in the past.
	exDate.setDate( exDate.getDate() - 1 );
	
	document.cookie = "expires=" + exDate.toUTCString() + ";";

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
		var nameSrc;
		var nameIndex;
		var scoreIndex;
		
		//Gets the index of the name.
		nameSrc = name + "=";
		nameIndex = value.indexOf( nameSrc );
		
		//Gets the index if the score.
		scoreIndex = value.indexOf( "score", nameIndex ) + 6;
		
		//Returns the index of the score.
		return scoreIndex;
	
	}
	
	return -1;
}//End function getCookieScoreIndex().

function setCookieAchievement( name, score ){

	var cookieString = document.cookie.toString();
	

}

function getCookieAchievement( name ){
	
	//Stores the cookies in a string variable.
	var cookieString = document.cookie.toString();
	
	//Gets score index of name in the cookie.
	var scoreIndex = getCookieScoreIndex( name );
	
	//Sets the achievement index.
	var achieveIndex = cookieString.indexOf( "achieve", scoreIndex ) + 8;
	var end = cookieString.indexOf( "!", achieveIndex );
	
	//Gets the score from the cookie.
	var achievement = decodeURI( cookieString.substring( achieveIndex, end ) );
	
	//Returns the score.
	return achievement;
	
}//End function getCookieAchievement();

//Function that gets the index where the score of the achievement starts.
function getCookieAchievementIndex( name ){
	
	//Stores the cookie as a string in a variable.
	var cookieString = document.cookie.toString();
	
	//Gets the index of the score of the user.
	var scoreIndex = getCookieScoreIndex( name );
	
	//Gets the index of the achievement score of the user.
	var achieveIndex = cookieString.indexOf( "achieve", scoreIndex ) + 8;
	
	return achieveIndex;

}//End function getCookieAchievementIndex();

function buildAchievements( name ){
	
	//Achievement string builds here.
	var achievementString = "";
	
	//Stores the achievement number of user in this variable.
	var achievement = getCookieAchievement( name );
	
	var a = "Achievement 1 :";
	var b = "Achievement 2 : ";
	var c = "EasterEggIsSet: ";
	
	var t = "true";
	var f = "false";
	
	var bronze = "Bronze";
	var silver = "Silver";
	var gold = "Gold";
	
	var ac1g = document.getElementById( "AC1G" );
	var ac1s = document.getElementById( "AC1S" );
	var ac1b = document.getElementById( "AC1B" );
	
	var ac2g = document.getElementById( "AC2G" );
	var ac2s = document.getElementById( "AC2S" );
	var ac2b = document.getElementById( "AC2B" );
	
	//Sets first achievement.
	
	if( achievement.charAt( 0 ) === "1" ){
	
		achivementString += a + bronze;
		ac1b.style.display = "block";
		
	}
	
	if( achievement.charAt( 0 ) === "2" ){
	
		achievementString += a + silver;
		ac1s.style.display = "block";
	
	}
	
	if( achievement.charAt( 0 ) === "3" ){
	
		achievementString += a + gold;
		ac1g.style.display = "block";
	
	}
	
	//Sets second achievement
	
	if( achievement.charAt( 1 ) === "1" ){
	
		achievementString += b + bronze;
		ac2b.style.display = "block";
		
	}
	
	if( achievement.charAt( 1 ) === "2" ){
	
		achievementString += b + silver;
		ac2s.style.display = "block";
	
	}
	
	if( achievement.charAt( 1 ) === "3" ){
	
		achievementString += b + gold;
		ac2g.style.display = "block";
	
	}
	
	//Sets the easteregg
	
	if( achievement.charAt( 2 ) === "0" ){
	
		achievementString += c + f;
	
	}
	
	if( achievement.charAt( 2 ) === "1" ){
	
		achievementString += c + t;
	
	}
	
	return achievementString;
	
}//End function buildAchievements().

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
	        
	        //Stores the achievements of the user in a variable.
	        var achievement = getCookieAchievement( name );
		
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
		
		document.cookie = " " + name + "=password!" + pword+ "!score!" + newScore + "!achieve!" + achievement + "!;" + "expires=" + exDate + ";";
		
		alert( document.cookie.toString() );
		
	}
	
	return -1;
	
}//End function setCookieScore
