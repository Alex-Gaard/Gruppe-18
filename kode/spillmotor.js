var kort = new Array();
var valgt = new Array();
var dealerHand = new Array();
var playerHand = new Array();


var pKortID = new Array();
var dKortID = new Array();

//REGLER
//må testes mer
var card5 = true; 
var soft17 = true;


var stop = false;

//variabler til hit()
var temp = -100;
var valgTemp = 0;
var kortTemp = 0;


var finnes = true;


var cash = 200;
var bet = 0;

var won;
var equal;
var fortsett = 0;

var antallHits = 0;
var alt;
//antallHits må settes til 0 etter runden er over

var spiller_kort_nr = 0; //hvor mange kort er delt ut til spiller
var dealer_kort_nr = 0; //hvor mange kort er delt ut til dealer

var elem = document.getElementById("bet");

var kort_array_navn = 
    {   c14: "Ace of Clubs", 
        c2: "2 of Clubs", 
        c3: "3 of Clubs", 
        c4: "4 of Clubs",
        c5: "5 of Clubs", 
        c6: "6 of Clubs", 
        c7: "7 of Clubs", 
        c8: "8 of Clubs", 
        c9: "9 of Clubs",
        c10: "10 of Clubs", 
        c11: "Jack of Clubs", 
        c12: "Queen of Clubs", 
        c13: "King of Clubs",
        d14: "Ace of Diamonds", 
        d2: "2 of Diamonds", 
        d3: "3 of Diamonds", 
        d4: "4 of Diamonds",
        d5: "5 of Diamonds", 
        d6: "6 of Diamonds", 
        d7: "7 of Diamonds", 
        d8: "8 of Diamonds", 
        d9: "9 of Diamonds",
        d10: "10 of Diamonds", 
        d11: "Jack of Diamonds", 
        d12: "Queen of Diamonds", 
        d13: "King of Diamonds",
        h14: "Ace of Hearts", 
        h2: "2 of Hearts", 
        h3: "3 of Hearts", 
        h4: "4 of Hearts",
        h5: "5 of Hearts", 
        h6: "6 of Hearts", 
        h7: "7 of Hearts", 
        h8: "8 of Hearts", 
        h9: "9 of Hearts",
        h10: "10 of Hearts", 
        h11: "Jack of Hearts", 
        h12: "Queen of Hearts", 
        h13: "King of Hearts",
        s14: "Ace of Spades", 
        s2: "2 of Spades", 
        s3: "3 of Spades", 
        s4: "4 of Spades",
        s5: "5 of Spades", 
        s6: "6 of Spades", 
        s7: "7 of Spades", 
        s8: "8 of Spades", 
        s9: "9 of Spades",
        s10: "10 of Spades", 
        s11: "Jack of Spades", 
        s12: "Queen of Spades", 
        s13: "King of Spades"};



// c = clubs d = diamonds h = hearts s = spades
kort[0] = "c14";  
kort[1] = "c2";
kort[2] = "c3";
kort[3] = "c4";
kort[4] = "c5";
kort[5] = "c6";
kort[6] = "c7";
kort[7] = "c8";
kort[8] = "c9";
kort[9] = "c10";
kort[10] = "c11";
kort[11] = "c12";
kort[12] = "c13";

kort[13] = "d14";
kort[14] = "d2";
kort[15] = "d3";
kort[16] = "d4";
kort[17] = "d5";
kort[18] = "d6";
kort[19] = "d7";
kort[20] = "d8";
kort[21] = "d9";
kort[22] = "d10";
kort[23] = "d11";
kort[24] = "d12";
kort[25] = "d13";

kort[26] = "h14";
kort[27] = "h2";
kort[28] = "h3";
kort[29] = "h4";
kort[30] = "h5";
kort[31] = "h6";
kort[32] = "h7";
kort[33] = "h8";
kort[34] = "h9";
kort[35] = "h10";
kort[36] = "h11";
kort[37] = "h12";
kort[38] = "h13";

kort[39] = "s14";
kort[40] = "s2";
kort[41] = "s3";
kort[42] = "s4";
kort[43] = "s5";
kort[44] = "s6";
kort[45] = "s7";
kort[46] = "s8";
kort[47] = "s9";
kort[48] = "s10";
kort[49] = "s11";
kort[50] = "s12";
kort[51] = "s13";


function antStokk(){
var nyKort = new Array();
var antStokkElem = document.getElementById("antStokker");

if(kort.length > 52){
nyKort = kort.slice(0,52);
kort = nyKort;
}

if(antStokkElem.value != "" && kort.length < 53){
    nyKort = kort;
    for(var i = 0; i < antStokkElem.value; i++){
        kort = kort.concat(nyKort);
        }

    }

}//end of antStokk

	
	
function hit() {
 
	do{
	    temp = valgt[a];
	    temp = Math.floor(Math.random() * kort.length);
	    for(var a = 0; a < valgt.length; a++){
	        if(valgt[a] == temp){ 
			    temp = valgt[a];
				break;
	            }
	        }

	}while(temp == valgt[a])

	valgt[valgTemp] = temp;
    valgTemp++;
    return temp;
	
}//end of hit



function deal(){
    
    //antStokk();

    var elem = document.getElementById("input");
	
	try{
        //fungerer ikke hvis du skriver inn ting som 1 + 1 = 2 osv
        if(isNaN(parseInt(elem.value))) throw "This is not a number";
 
            if(parseInt(elem.value) < 1 || parseInt(elem.value) > cash){
                elem.value = "Place a bet";
                alert("Tallet du oppga er ikke godkjent :( ");
                }else{
				    
                    bet = parseInt(elem.value);
					fortsett = 1;
                    cash -= bet;
					$("#stake_player").text(bet);
	                $("#bank_player").text(cash);

                    }
 
    }catch(e){
        alert("Du oppga ikke et tall");
        elem.value = "Vennligst skriv inn et tall";
        }
		
    if(fortsett == 1){

   
    kortTemp = kort[hit()];
    settInnKort("dealer", kortTemp, kort_array_navn[kortTemp]);
	dealerHand[0] = cleanse(kortTemp);
	
	
    kortTemp = kort[hit()];
    settInnKort("player", kortTemp, kort_array_navn[kortTemp]);
	playerHand[0] = cleanse(kortTemp);
	
	kortTemp = kort[hit()];
    settInnKort("dealer", kortTemp, kort_array_navn[kortTemp]);
	dealerHand[1] = cleanse(kortTemp);
	$("#dealerSum").text(dSum() - dealerHand[0]);
	

	kortTemp = kort[hit()];
    settInnKort("player", kortTemp, kort_array_navn[kortTemp]);
	playerHand[1] = cleanse(kortTemp);
	$("#playerSum").text(pSum());
	
	
	
	
    if(pSum() == 21){
        alert("you won");
        won = true;
        }
    resultat();
	
}//end of if
	
}//end of deal


function startHit() {
   

    if(antallHits == 0){
        kortTemp = kort[hit()];
		settInnKort("player", kortTemp, kort_array_navn[kortTemp]);
		playerHand[2] = cleanse(kortTemp);
		$("#playerSum").text(pSum());
        antallHits++;

    }else if(antallHits  == 1){
        kortTemp = kort[hit()];
        settInnKort("player", kortTemp, kort_array_navn[kortTemp]);
		playerHand[3] = cleanse(kortTemp);
		$("#playerSum").text(pSum());
		antallHits++;

    }else if(antallHits  == 2){
        kortTemp = kort[hit()];
        settInnKort("player", kortTemp, kort_array_navn[kortTemp]);
		playerHand[4] = cleanse(kortTemp);
		$("#playerSum").text(pSum());
		antallHits++;
        }
    
    if(pSum() > 21){
        alert("you lost");
        won = false;
        }
    else if(pSum() == 21 || playerHand.length == 5 && card5 == true){
        alert("you won");
        won = true;
        }
    resultat();
}//end of startHit

function hold() {


    
    flipCard();
    $("#dealerSum").text(dSum());
   
	sjekkDealer();
		
	if(dSum() < 21 && stop == false){
        kortTemp = kort[hit()];
	    settInnKort("dealer", kortTemp, kort_array_navn[kortTemp]);
	    dealerHand[2] = cleanse(kortTemp);
	    $("#dealerSum").text(dSum());
		}
   

    sjekkDealer();

    if(dSum() < 21 && stop == false){
        kortTemp = kort[hit()];
        settInnKort("dealer", kortTemp, kort_array_navn[kortTemp]);
		dealerHand[3] = cleanse(kortTemp);
		$("#dealerSum").text(dSum());
        }

    sjekkDealer();

			
    if(dSum() < 21 && stop == false){
        kortTemp = kort[hit()];
        settInnKort("dealer", kortTemp, kort_array_navn[kortTemp]);
		dealerHand[4] = cleanse(kortTemp);
		$("#dealerSum").text(dSum());
        }

    sjekkDealer();


    resultat();
}//end of hold

function restart() {
    
    ryddBordet();
   

    $("#playerSum").text("0");
    $("#dealerSum").text("0");
	$("#stake_player").text("0");

    for(var i = 0; i < playerHand.length; i++){
        playerHand[i] = 0;
        dealerHand[i] = 0;
        }
		
    for(var i = 0; i < valgt.length; i++){
	    valgt[i] = 0;
	}
	
    valgTemp = 0;
    spiller_kort_nr = 0;
    won = false;
    stop = false;
    equal = false;
    fortsett = 0;
    

}//end of restart

function cleanse(string){
    var string;
    var ny;

    if(string.indexOf("c") >= 0){
        ny = string.replace("c","");
        }

    else if(string.indexOf("h") >= 0){
        ny = string.replace("h","");
        }

    else if(string.indexOf("d") >= 0){
        ny = string.replace("d","");
        }

    else if(string.indexOf("s") >= 0){
        ny = string.replace("s","");
        }

    if(parseInt(ny) >= 10 && parseInt(ny) != 14){
        ny = 10;
        }

    else if(parseInt(ny) == 14){
        ny = 11;
        }

    return ny;
}//end of cleanse


function pSum(){
    var x = 0;

    for(var i = 0; i < playerHand.length; i++){
        x += parseInt(playerHand[i]);
        }

    if(x > 21){
	    for(var i = 0; i < playerHand.length; i++){
            if(playerHand[i] == 11){
                playerHand[i] = 1;
                break;
                }
            }
        }

    x = 0;

    for(var i = 0; i < playerHand.length; i++){
        x += parseInt(playerHand[i]);
        }

    return x;

}//end of pSum

function dSum(){
    var x = 0;

    for(var i = 0; i < dealerHand.length; i++){
        x += parseInt(dealerHand[i]);
        }

    if(x > 21){
        for(var i = 0; i < dealerHand.length; i++){
            if(dealerHand[i] == 11){
                dealerHand[i] = 1;
                break;
                }
            }
        }

    x = 0;

    for(var i = 0; i < dealerHand.length; i++){
        x += parseInt(dealerHand[i]);
        }


 
    return x;
}//end of dSum


function resultat(){
       
    if(won == true && pSum() !=  21){
        cash += bet * 2;
        $("#bank_player").text(cash);
        }
	else if(won == true && card5 == true && playerHand.length == 5){
	    cash += bet * 2;
        $("#bank_player").text(cash);
	    }
	else if(won == true && pSum() ==  21){
		cash += Math.ceil(bet * 3/2);
		$("#bank_player").text(cash);
		}
	else if(equal == true ){
	    cash += bet;
	    $("#bank_player").text(cash);
	}
	

}//end of resultat


function doubleDown(){
    
    if(cash >= bet && pSum() != 21 && playerHand.length < 5){
	
	    cash -= bet;
		$("#bank_player").text(cash);
		
	    bet *= 2;
		$("#stake_player").text(bet);
		
		
		kortTemp = kort[hit()];
        settInnKort("player", kortTemp, kort_array_navn[kortTemp]);
		playerHand[antallHits + 2] = cleanse(kortTemp);
		$("#playerSum").text(pSum());
		antallHits = 3;
		
		if(pSum() < 21){
		    hold();
		    $("#dealerSum").text(dSum());
		    }
		else if(pSum() > 21){
		    won = false;
			stop = true;
			alert("you have lost");
			resultat();
		    }
	    else{
		    won = true;
			stop = true;
			alert("you have won");
			resultat();
		    }
		
	}else{
	    alert("Du kan ikke bruke double down nå");
	}
	
	

}



function sjekkDealer(){
    var gotAce = false;
    for(var i = 0; i < dealerHand.length; i++){
	    if(dealerHand[i] == 11){
		    gotAce = true;
			break;
		    }
	    }
	if(soft17 == true){
	
	    if(gotAce == false && dSum() >= 17 && stop == false){
		    stop = true;
			if(dSum() > pSum()  && dSum() <= 21){
			    won = false;
				alert("you have lost");
			    }
			else if(dSum() < pSum() || dSum() > 21){
				won = true;
				alert("you have won");
				}
			else if(dSum() <= 21 && dealerHand.length == 5 && card5 == true){
	            alert("you have lost");
                won = false;
                stop = true;
	            }
			else{
				won = false;
				equal = true;
				alert("it is a tie");
				}
			
				
		}
		else if(gotAce == true && dSum() >= 17 &&  stop == false){
			    stop = true;
				if(dSum() > pSum() && dSum() <= 21){
				    won = false;
				    alert("you have lost");
				    }
				else if(dSum() == pSum()){
				    won = false;
					equal = true;
					alert("it is a tie");
	
				    }
				else if(dSum() > 21){
				    won = true;
					alert("you have won");
				
				    }
				else if(dSum() <= 21 && dealerHand.length == 5 && card5 == true){
	                alert("you have lost");
                    won = false;
                    stop = true;
	                }
			
			
			    }//end of else if
	
	
	}else{//soft17 == false
	
    if(dSum() <= 21 && dSum() > pSum() && stop == false){
        alert("you have lost");
        won = false;
        stop = true;
		}
    else if(dSum() > 21 && stop == false){
        stop = true;
        won = true;
        alert("you have won");
        }
	else if(dealerHand.length == 5 && card5 == true){
	    alert("you have lost");
        won = false;
        stop = true;
	    }
	
	}//end of else
    
	
	


}//end of sjekkDealer


function settInnKort(kort_eier, kort_id, kort_navn){
    /*------------------------------------------------------*/
    /*  Koden som setter inn kort til dealerens side:       */
    /*------------------------------------------------------*/
    if (kort_eier == "dealer"){
        var bilde_adresse = "./cards/" + kort_id + ".png";      //alle id-er er i samsvar med adresse
        var nytt_bildekort = document.createElement('img');     //lag nytt img-element
        nytt_bildekort.setAttribute('src', bilde_adresse);
        nytt_bildekort.setAttribute('alt', kort_navn);          //hva skjermlesere leser opp
        nytt_bildekort.setAttribute('class', 'card card_right'); //'right' for dealer
        
        //første kortet til dealer skal være skjult til spiller klikker Hold
        var bryt_ut = false;
        if (dealer_kort_nr == 0){
            nytt_bildekort.setAttribute('id', 'hidden_card');
            var hvor_vil_vi_ha_kortet = document.getElementById('dealer_space');
            hvor_vil_vi_ha_kortet.appendChild(nytt_bildekort);
            dealer_kort_nr ++;
            bryt_ut = true;
        }
        if (bryt_ut) return; //stopp funksjonen om dette er første kortet til dealer (skal ikke vises enda)
        
        // så må kort som allerede er tegnet flyttes et hakk opp i id (player_card_xx)
        for (antall_delte_kort = dealer_kort_nr; antall_delte_kort > 0; antall_delte_kort--){
            var sjekk_kort = "dealer_card_" + antall_delte_kort;
            var kort_over = antall_delte_kort + 1;
            var kort_plass_over = "dealer_card_" + kort_over;
            var kort_node = document.getElementById(sjekk_kort);
            if (kort_node !== null){ //true hvis sjekk_kort finnes
                if (antall_delte_kort >2){ //alle unntatt de to laveste kortene skal ha class card_under_xx
                    kort_node.setAttribute('id', kort_plass_over); //ENDRER id attributt til neste kortplass
                }else if (antall_delte_kort == 2){ //som over pluss skifte bilde
                    // først skifte til src="xx_under.png"
                    var src_value = kort_node.getAttribute('src'); //verdien inne i attributtet src som streng
                    var src_value_ny = src_value.replace('.png', '_under.png');
                    kort_node.setAttribute('src', src_value_ny);
                    kort_node.setAttribute('class', 'card card_under_right'); //angir dette kortet skal ligge UNDER
                    //deretter skifte id som over
                    kort_node.setAttribute('id', kort_plass_over); //ENDRER id attributt til neste kortplass (3)
                } else if (antall_delte_kort == 1){
                    kort_node.setAttribute('id', kort_plass_over); //ENDRER id attributt til neste kortplass (2)
                }
            }
        }
        
        // så må det nye kortet plasseres inn i DOM (vi har flyttet id 1 til 2 over)
        nytt_bildekort.setAttribute('id', 'dealer_card_1');
        var hvor_vil_vi_ha_kortet = document.getElementById('dealer_space');
        hvor_vil_vi_ha_kortet.appendChild(nytt_bildekort);
        dealer_kort_nr ++;
    }
    
    /*------------------------------------------------------*/
    /*  Koden som setter inn kort til spillerens side:      */
    /*------------------------------------------------------*/
    else if (kort_eier == "player"){
        var bilde_adresse = "./cards/" + kort_id + ".png";      //alle id-er er i samsvar med adresse
        var nytt_bildekort = document.createElement('img');     //lag nytt img-element
        nytt_bildekort.setAttribute('src', bilde_adresse);
        nytt_bildekort.setAttribute('alt', kort_navn);          //hva skjermlesere leser opp
        nytt_bildekort.setAttribute('class', 'card card_left'); //'left' for player
        
        // så må kort som allerede er tegnet flyttes et hakk opp i id (player_card_xx)
        for (antall_delte_kort = spiller_kort_nr; antall_delte_kort > 0; antall_delte_kort--){
            var sjekk_kort = "player_card_" + antall_delte_kort;
            var kort_over = antall_delte_kort + 1;
            var kort_plass_over = "player_card_" + kort_over;
            var kort_node = document.getElementById(sjekk_kort);
            if (kort_node != null){ //true hvis sjekk_kort finnes
                if (antall_delte_kort >2){ //alle unntatt de to laveste kortene skal ha class card_under_xx
                    kort_node.setAttribute('id', kort_plass_over); //ENDRER id attributt til neste kortplass
                }else if (antall_delte_kort == 2){ //som over pluss skifte bilde og klasse
                    // først skifte til src="xx_under.png"
                    var src_value = kort_node.getAttribute('src'); //verdien inne i attributtet src som streng
                    var src_value_ny = src_value.replace('.png', '_under.png');
                    kort_node.setAttribute('src', src_value_ny);
                    kort_node.setAttribute('class', 'card card_under_left'); //angir dette kortet skal ligge UNDER
                    //deretter skifte id som over
                    kort_node.setAttribute('id', kort_plass_over); //ENDRER id attributt til neste kortplass (3)
                } else if (antall_delte_kort == 1){
                    kort_node.setAttribute('id', kort_plass_over); //ENDRER id attributt til neste kortplass (2)
                }
            }
        }
        
        // så må det nye kortet plasseres inn i DOM (vi har flyttet id 1 til 2 over)
        nytt_bildekort.setAttribute('id', 'player_card_1');
        var hvor_vil_vi_ha_kortet = document.getElementById('player_space');
        hvor_vil_vi_ha_kortet.appendChild(nytt_bildekort);
        spiller_kort_nr ++;
    }
    else alert('Ikke angitt hvor kortet skal tegnes: dealer/ player ...');
}

function flipCard(){
    //erstatte bilde med "baksiden opp" til det kortet vi skjulte under utdeling av kortene
    var bakside = document.getElementById('backside');              //referanse til kort med baksiden opp
    document.getElementById('dealer_space').removeChild(bakside);   //fjerner kortet
    var skjult_kort = document.getElementById('hidden_card');       //referanse til det skjulte kortet
    skjult_kort.setAttribute('id', 'dealer_card_2');                //dealer har ALLTID to kort når kortene snus
    //vise dealerens sum nå når kortene til dealer er vist
	
	/*
    var dealer_sum_boks = document.getElementById('cards_sum_dealer');
    var dealer_sum = dSum(); //kaller funksjon i spillmotor
    var ny_tekst_node = document.createTextNode(dealer_sum);
    var gammel_tekst_node = dealer_sum_boks.firstChild;
    dealer_sum_boks.replaceChild(ny_tekst_node, gammel_tekst_node);
	*/
}

function ryddBordet(){
    var holder_kort = document.getElementById('dealer_space');
    var first_kort = holder_kort.firstChild;
    while(first_kort){
        holder_kort.removeChild(first_kort);
        first_kort = holder_kort.firstChild;
    }
    
    //tegne inn git squid igjen
    var new_squid = document.createElement('img');
    new_squid.setAttribute('src', './cards/git.png');
    new_squid.setAttribute('alt', 'Deck with picture og Git Squid');
    new_squid.setAttribute('id', 'backside');
    new_squid.setAttribute('class', 'card card_right');
    holder_kort.appendChild(new_squid);
    
    //fjerne players kort

    holder_kort = document.getElementById('player_space');
    first_kort = holder_kort.firstChild;
    while(first_kort){
        holder_kort.removeChild(first_kort);
        first_kort = holder_kort.firstChild;
    }
}

//
//AJAX delen
//

function postScore(){
var navnElem = document.getElementById("navn");
var name = navnElem.value;
var score = cash;

$.ajax({
	    url: 'highscore.php',
		dataType: 'json',
		type: 'post',
		data: 'name='+name+'&score='+score,
		success: function(data){
		    console.log(data.response);
		    alert("Skåren din har blitt postet");
		}
	 
	 });

}

function getScore(){

$.getJSON('list.json', function(data){
      var utskrift = "";
	
	  for(var i = 0; i < data.players.length; i++){
	  utskrift += "Plass: " + (i + 1) + "  Navn: " + data.players[i].name + " Highscore: " + data.players[i].highscore + " \n";
	  }
	  
       alert(utskrift);
  
   })//:
}

/*
function sjekkScore(){

$.getJSON('list.json', function(data){
	
	for(var i = 0; i < data.players.length; i++){
	    if( score > data.player[i].highscore){
	        alert("Highscore");
		    break;
	        }
	  
	    }
	 
   })//:
   
}
*/
