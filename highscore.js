
$("#postKnapp").click(function(){
postScore();

});

function postScore(){
var name = "Alex Gaard";
var score = 9001;

$.ajax({
	    url: 'highscore.php',
		dataType: 'json',
		type: 'post',
		data: 'name='+name+'&score='+score,
		success: function(data){
		  console.log(data.response);
		}
	 
	 });

}


$("#get").click(function(){
getScore();

});

function getScore(){

$.getJSON('list.json', function(data){
      var utskrift;
	  for(var i = 0; i < data.players.length; i++){
	  utskrift += "Navn: " + data.players[i].name + " Highscore: " + data.players[i].highscore + "   ";
	  }
       alert(utskrift);
  
   })//:
}

/*
$('#send').on('submit', function(){
       var that = $(this);
	   contents = that.serialize();
	   console.log(contents);
	   
	   $.ajax({
	      url: 'highscore.php',
		  dataType: 'json',
		  type: 'post',
		  data: contents,
		  success: function(data){
		    console.log(data);
		  }
	   });
	   
	   
	   return false;

});
*/
