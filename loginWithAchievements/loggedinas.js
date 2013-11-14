
//Sets the name that is logged in.
function setLoggedInAs( name ){

	var cookieString = ""
	
	cookieString += "loggedIn=" + name + "!!;";
	//cookieString += "path=/;";
	//cookieString += "domain=cs.student.hioa.no;";
	
	document.cookie = cookieString;
	
}

//Returns the name that is logged in.
function getLoggedInAs(){
	
	var cookie = document.cookie;
	
	var start = cookie.indexOf( "loggedIn" ) + 9;
	var end = cookie.indexOf( "!" , start );
	
	var loggedInName = decodeURI( cookie.substring( start, end ) );
	
	return loggedInName;
	
}

//Returns the score of the currently logged in user.
function getLoggedInAsScore(){

	var score = getCookieScore( getLoggedInAs() );
	
	return score;
	
}

//Returns the achievements of the cuurently logged in user.
function getLoggedInAsAchievement(){

	var achievement = getCookieAchievement( getLoggedInAs() );
	
	return achievement;

}




