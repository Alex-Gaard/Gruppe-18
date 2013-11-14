
//Stores the name that is logged in
var loggedInAs;

//Sets the name that is logged in.
function setLoggedInAs( name ){

	var cookieString = ""
	
	cookieString += "loggedIn=" + name + ";";
	//cookieString += "path=/;";
	//cookieString += "domain=cs.student.hioa.no;";
	
	//Creates a session cookie with value as the logged in user.
	document.cookie = cookieString;
	
}

//Returns the name that is logged in.
function getLoggedInAs(){
	
	var cookie = document.cookie;
	
	var start = cookie.indexOf( "loggedIn" ) + 9;
	var end = cookie.indexOf( ";" , start );
	
	var loggedInName = decodeURI( cookie.substring( start, end ) );
	
	return loggedInName;
	
}


