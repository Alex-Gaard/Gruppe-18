//Array for kortstokken
var kort = new Array();

//Arrayer for verdiene til kort som har blitt trukket
var dealerHand = new Array();
var playerHand = new Array();

//variabler for hvilke regler som skal brukes
var card5 = false; 
var soft17 = false;
var nrDecks = 1;

//variabler til checkScore
var place;
var inScore = false;

//variabler for å kjøre forskjellige utfall i spillet
var bet = 0;
var won;
var equal;
var fortsett = 0;
var stop = false;
var phase = 1;

//variabler til hentKort()
var valgt = new Array();
var temp = -100;
var valgTemp = 0;
var kortTemp = 0;

//Antall kort trukket for spiller og dealer
var playerHits = 2;
var dealerHits = 2;

//Variabler for trekking av kort
var alt;
var spiller_kort_nr = 0; //hvor mange kort er delt ut til spiller
var dealer_kort_nr = 0; //hvor mange kort er delt ut til dealer

//Navn og verdier for kortstokken blir satt i separate arrayer
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


//Setter "cash" til 200 hvis "cash" ikke har blitt satt fra før, eller hvis "cash" er mindre enn 200
function setCash(){

    if( localStorage["cash"] == undefined || localStorage["cash"] == "" || localStorage["cash"] < 200){
        localStorage.setItem("cash", 200);
    }else{
        $("#bank_player").text(localStorage["cash"]);
        }

}//end of setCash

//Sjekker om tastetrykkene til brukeren er riktig for å utføre forskjellige funksjoner på siden
$(document).keydown(function(e) {
	
    if(e.keyCode == 13 && phase == 1){
	    deal();
	    }
	else if(e.keyCode == 13 && phase == 3){
	    restart();
		}
	else if(e.keyCode == 32 && phase == 2){
		startHit();
		}
	else if(e.keyCode == 13 && phase == 2){
		hold();
		}
	else if(e.keyCode == 68 && phase == 2){
		doubleDown();
		}
	else if(e.keyCode != 2 && phase == 4){
		quit();
		}		
				
        }
    );
		
//Hvis reglene ikke er satt, vil localStorage variablene automatisk bli satt til default reglene til spillet, dvs at "5 cards to win" og "soft 17"
//ikke blir tatt i bruk, og spillet vil kun bruke 1 kortstokk
if(localStorage["5CardWin"] == undefined && localStorage["soft_17"] == undefined && localStorage["nr_Decks"] == undefined ){
    localStorage["5CardWin"] = card5;
    localStorage["soft_17"] = soft17;
	localStorage["nr_Decks"] = nrDecks;
    }

//Setter reglene for spilet, ut ifra hva spilleren har oppgit på "settings" - siden
function setSettings(){

    if(localStorage["5CardWin"] == "true"){
        card5 = true;
        }
	else{
        card5 = false;
        }

    if(localStorage["soft_17"] == "true"){
        soft17 = true;
        }    
    else{
        soft17 = false;
        }

    nrDecks = parseInt(localStorage["nr_Decks"]);

}

function nrOfDecks(){
var nyKort = new Array();

if(kort.length > 52){
nyKort = kort.slice(0,52);
kort = nyKort;
}

if(nrDecks != 1 && kort.length < 53){
    nyKort = kort;
    for(var i = 0; i < nrDecks - 1; i++){
        kort = kort.concat(nyKort);
        }

    }

}//end of nrOfDecks

	
//Returnerer et tilfeldig tall
function hentKort() {
 
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


//Sjekker først om innsatsen er godkjent, hvis dette er tilfellet blir to kort utdelt til både spilleren og dealeren,
//kun det andre kortet som dealeren har trukket blir vist på spillebrettet
function deal(){
	
    var elem = document.getElementById("innsats");
	var elem2 = document.getElementById("spill_resultat");

	try{
        if(isNaN(parseInt(elem.value))) throw "This is not a number";
		
            if(parseInt(elem.value) < 1 || parseInt(elem.value) > parseInt(localStorage["cash"])){
			    
                elem2.innerHTML = "Bet cannot be higher than the bank, or 0 and lower";
				elem.value = "";
				elem.focus();
                }else{
				    setSettings();
				    nrOfDecks();
				    elem2.innerHTML = "";
                    bet = parseInt(elem.value);
					fortsett = 1;
					phase = 2;
                    
				    var cashTemp = parseInt(localStorage["cash"]);
                    cashTemp -= bet;
					localStorage.setItem("cash", cashTemp);
					
					buttonsBlackJack(2);
					$("#stake_player").text(bet);
	                $("#bank_player").text(cashTemp);

                    }
 
    }catch(e){
	    alert(elem.value);
        elem2.innerHTML = "Please enter a valid number";
        elem.value = "";
		elem.focus();
        }
		
    if(fortsett == 1){

    for(var i = 0; i < 2; i++){
	    kortTemp = kort[hentKort()];
        settInnKort("dealer", kortTemp, kort_array_navn[kortTemp]);
	    dealerHand[i] = cleanse(kortTemp);
	
	    kortTemp = kort[hentKort()];
        settInnKort("player", kortTemp, kort_array_navn[kortTemp]);
	    playerHand[i] = cleanse(kortTemp);
	   
	}
	$("#dealerSum").text(dSum() - dealerHand[0]);
	$("#playerSum").text(pSum());
   
 
    if(pSum() == 21){
        display(1);
        won = true;
		buttonsBlackJack(3);
		resultat();
		return;
        }
		
	buttonsBlackJack(2);

}//end of if

	
}//end of deal

//Trekker et nytt kort til spilleren hver gang "hit"-knappen blir brukt, eller hvis brukeren trykker "space"-knappen
function startHit() {
   
    kortTemp = kort[hentKort()];
    settInnKort("player", kortTemp, kort_array_navn[kortTemp]);
	playerHand[playerHits] = cleanse(kortTemp);
	$("#playerSum").text(pSum());
    playerHits++;

    if(pSum() > 21){
        display(2);
        won = false;
        resultat();
        }
    else if(pSum() == 21 || playerHand.length == 5 && card5 == true){
        display(1);
        won = true;
        resultat();
        }

}//end of startHit

function hold() {
  
    flipCard();
	$("#dealerSum").text(dSum());
	
	if(dSum() > pSum()){
	    stop = true;
            won = false;
	    }
		
	if(soft17 == true && dSum() >= 17 && pSum() == dSum()){
	    stop = true;
            equal = true;
	    }
   
	sjekkDealer();
		
	while(stop == false){
	    if(dSum() < 21 && stop == false){
            kortTemp = kort[hentKort()];
	        settInnKort("dealer", kortTemp, kort_array_navn[kortTemp]);
	        dealerHand[dealerHits] = cleanse(kortTemp);
                setTimeout(function(){
                    $("#dealerSum").text(dSum());
                }, 300);
		dealerHits++;
		    }
			
		sjekkDealer();
	    }
	
    resultat();
	
}//end of hold

//Setter variablene på siden tilbake til sin opprinnelige verdi og gjør spillet for en ny runde
function restart() {
    var elem2 = document.getElementById("spill_resultat");  
	
    ryddBordet();
    $("#playerSum").text("0");
    $("#dealerSum").text("0");
	$("#stake_player").text("0");

    for(var i = 0; i < playerHand.length; i++){
        playerHand[i] = 0;
        }
		
	for(var i = 0; i < dealerHand.length; i++){
	    dealerHand[i] = 0;
	    }
		
    for(var i = 0; i < valgt.length; i++){
	    valgt[i] = 0;
	    }
	
	if(parseInt(localStorage["cash"]) == 0){
		localStorage.setItem("cash", 200);
		$("#bank_player").text(localStorage["cash"]);
	    }
		
	playerHits = 2;
	dealerHits = 2;
    valgTemp = 0;
    spiller_kort_nr = 0;
	dealer_kort_nr = 0;
    won = null;
	equal = false;
	stop = false;
	fortsett = 0;
	buttonsBlackJack(1);
	elem2.innerHTML = "";
        elem2.style.display = "none";
	phase = 1;

}//end of restart

//Hvis spilleren sin skår er lik 0, vil brukeren bli ført tilbake til forsiden hvis han/hun trykker på knappen
//Hvis ikke så vil skåren bli "postet" til highscores.php 
function quit(){
    
	phase = 1;
    if(parseInt(localStorage["cash"]) == 0){
        window.location.replace("index.php");
    }else{
        postScore();
    }
}

//Fjerner bokstaven fra "string" og returnerer verdien til string
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

//Finner summen av kortene til spilleren
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

//Finner summen av kortene til dealeren
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

//Sjekker resultatet av runden(hvem som vant eller tapte) og skriver ut dette på skjermen
function resultat(){    
    var cashTemp = parseInt(localStorage["cash"]);
	if(won == true && pSum() !=  21){
        cashTemp += bet * 2;
		localStorage.setItem("cash", cashTemp);
        $("#bank_player").text(cashTemp);
		buttonsBlackJack(3);
	    checkScore();
        }
	else if(card5 == true && playerHand.length == 5){
	    cashTemp += bet * 2;
	    localStorage.setItem("cash", cashTemp);
        $("#bank_player").text(cashTemp);
		won = true;
		buttonsBlackJack(3);
	    checkScore();
	    }
	else if(won == true && pSum() ==  21){
		cashTemp += Math.ceil(bet * 3/2);
		localStorage.setItem("cash", cashTemp);
        $("#bank_player").text(cashTemp);
		buttonsBlackJack(3);
	    checkScore();
		}
	else if(equal == true ){
	    cashTemp += bet;
	    localStorage.setItem("cash", cashTemp);
        $("#bank_player").text(cashTemp);
		buttonsBlackJack(3);
	    checkScore();
	    }
	else if(cashTemp == 0 && won == false){
	    display(3);
		phase = 4;
		buttonsBlackJack(4);
	    checkScore();
	    }
	else if(won == false){
	    display(2);
	    buttonsBlackJack(3);
	    checkScore();
	    }
	
	if(won == true || won == false || equal == true){
	if(phase != 4)
	phase = 3;
	}

}//end of resultat

//Funksjon for "Double Down"-knappen, hvis pengesummen til spilleren er for lav vil spilleren bli informert om dette
function doubleDown(){

   var cashTemp = parseInt(localStorage["cash"]);
   if(cashTemp >= bet){
	
	    cashTemp -= bet;
		localStorage.setItem("cash", cashTemp);
		$("#bank_player").text(cashTemp);
	    bet *= 2;
		$("#stake_player").text(bet);
		kortTemp = kort[hentKort()];
        settInnKort("player", kortTemp, kort_array_navn[kortTemp]);
		playerHand[playerHits] = cleanse(kortTemp);
		$("#playerSum").text(pSum());
		
		if(pSum() < 21){
		    hold();
		    $("#dealerSum").text(dSum());
		    }
		else if(pSum() > 21){
		    won = false;
			stop = true;
			display(2);
			resultat();
		    }
	    else{
		    won = true;
			stop = true;
			display(1);
			resultat();
		    }
		
	}else{
	    alert("You do not have enough money to use Double Down");
	}
	
}//end of doubleDown

//Sjekker og sammenligner skåren til dealer med skåren til spilleren
function sjekkDealer(){
 
	if(soft17 == true){ // kjører denne delen hvis soft17 regelen er satt til sant
	    //Sjekker om dealeren har trukket et ess
		var gotAce = false;
        for(var i = 0; i < dealerHand.length; i++){
	        if(dealerHand[i] == 11){
		        gotAce = true;
			    break;
		        }
	        }
	
	    if(gotAce == false && dSum() >= 17 && stop == false){
		    stop = true;
			if(dSum() > pSum()  && dSum() <= 21){
			    won = false;
				display(2);
			    }
			else if(dSum() < pSum() && dSum() >= 17 || dSum() > 21){
				won = true;
				display(1);
				}
			else if(dSum() <= 21 && dealerHand.length == 5 && card5 == true){
	            display(2);
                won = false;
                stop = true;
	            }
			else{
				won = false;
				equal = true;
				display(4);
				}		
		}
		else if(gotAce == true && dSum() >= 17 &&  stop == false){
			    stop = true;
				if(dSum() > pSum() && dSum() <= 21){
				    won = false;
				    display(2);
				    }
				else if(dSum() == pSum()){
				    won = false;
					equal = true;
					display(4);
	
				    }
				else if(dSum() > 21){
				    won = true;
					display(1);
				
				    }
				else if(dSum() <= 21 && dealerHand.length == 5 && card5 == true){
	                display(2);
                    won = false;
                    stop = true;
	                }
			
			    }//end of else if
	
	
	}else{ // kjører denne delen hvis soft17 regelen er satt til usant
	
    if(dSum() <= 21 && dSum() > pSum() && stop == false){
        display(2);
        won = false;
        stop = true;
		}
    else if(dSum() > 21 && stop == false){
        stop = true;
        won = true;
        display(1);
        }
	else if(dealerHand.length == 5 && card5 == true){
	    display(2);
        won = false;
        stop = true;
	    }
	
	}//end of else
    
}//end of sjekkDealer

//Skriver resultatet av runden ut på skjermen
function display(f){
 setTimeout(function(){
    var elem2 = document.getElementById("spill_resultat");  
	
	if(f == 1){ 
		elem2.innerHTML = "You have won!";
	    }
	else if(f == 2){
		elem2.innerHTML = "You have lost!";
	    }
	else if(f == 3){
	    elem2.innerHTML = "Game over, press play again to play more, or press quit to exit the game";
	    }
	else{
	    elem2.innerHTML = "It is a draw!";
	    }
    elem2.style.display = "block";
 }, 600);	
}


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
        setTimeout(function(){
			hvor_vil_vi_ha_kortet.appendChild(nytt_bildekort);
        }, 300);
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


/*-------------------------------------------------------------------*/
/* Endre hvilke knapper som skal være tegnet til enhver tid: --------*/
/* 1 = Bare vis deal-knappen ----------------------------------------*/
/* 2 = Vis hit + hold + double down ---------------------------------*/
/* 3 = Vis Spill igjen-knappen --------------------------------------*/
/*-------------------------------------------------------------------*/

function buttonsBlackJack(n){
    var knappe_holder = document.getElementById('button_holder');
    //fjerne ALLE knapper
    var first_knapp = knappe_holder.firstChild;
    while (first_knapp){
        knappe_holder.removeChild(first_knapp);
        first_knapp = knappe_holder.firstChild;
    }
    //tegne NYE knapper
            var sats = document.getElementById('innsats');
    switch (n){
        case 1:
            var knappe_node = document.createElement('button');
            knappe_node.setAttribute('id', 'deal');
            knappe_node.setAttribute('onclick', 'deal()');
            var knappetekst = document.createTextNode("Deal!");
            knappe_node.appendChild(knappetekst);
            knappe_holder.appendChild(knappe_node);
            sats.readOnly = false;
            sats.focus();
            break;
        case 2:
            var knappe_node = document.createElement('button');
            knappe_node.setAttribute('id', 'hit');
            knappe_node.setAttribute('onclick', 'startHit()');
            var knappetekst = document.createTextNode("Hit");
            knappe_node.appendChild(knappetekst);
            knappe_holder.appendChild(knappe_node);
            
            knappe_node = document.createElement('button');
            knappe_node.setAttribute('id', 'stand');
            knappe_node.setAttribute('onclick', 'hold()');
            var knappetekst = document.createTextNode("Stand");
            knappe_node.appendChild(knappetekst);
            knappe_holder.appendChild(knappe_node);
            
            knappe_node = document.createElement('button');
            knappe_node.setAttribute('id', 'double_down');
            knappe_node.setAttribute('onclick', 'doubleDown()');
            var knappetekst = document.createTextNode("Double Down");
            knappe_node.appendChild(knappetekst);
            knappe_holder.appendChild(knappe_node);

            sats.readOnly = true;
            break;
        case 3:
            var knappe_node = document.createElement('button');
            knappe_node.setAttribute('id', 'restart');
            knappe_node.setAttribute('onclick', 'restart()');
            var knappetekst = document.createTextNode("Play again");
            knappe_node.appendChild(knappetekst);
            knappe_holder.appendChild(knappe_node);
            break;
		case 4:
            var knappe_node = document.createElement('button');
            knappe_node.setAttribute('id', 'restart');
            knappe_node.setAttribute('onclick', 'restart()');
            var knappetekst = document.createTextNode("Play again");
            knappe_node.appendChild(knappetekst);
            knappe_holder.appendChild(knappe_node);
            
            var knappe_node = document.createElement('button');
            knappe_node.setAttribute('id', 'quit');
            knappe_node.setAttribute('onclick', 'quit()');
            var knappetekst = document.createTextNode("Quit");
            knappe_node.appendChild(knappetekst);
            knappe_holder.appendChild(knappe_node);
            break;
        default:
            alert("Feil inne i knappefunksjonen.");
            restart();
            break;
    }
}

//AJAX funksjoner

//Poster navn og skår til highscores.php, hvis skåren er høy nok vil highscores.php legge skåren til i highscorelisten
function postScore(){
    var name = getLoggedInAs();
    var score = parseInt(localStorage["cash"]);

    $.ajax({
	    url: './struktur/highscores.php',
		dataType: 'json',
		type: 'post',
		data: 'name='+name+'&score='+score,
		success: function(data){
		    alert("Skåren din har blitt postet");
			window.location.replace('?page=highscores');
		}
	 
	 });
}

/*
Sjekker scoren til spilleren mot highscorene for å se om 
spilleren kvalifiserer til en plass på listen, hvis dette er tilfellet, setter "place" lik highscore-plassen
til spilleren
*/
function checkScore(){
	var place = -1;
    $.getJSON("./struktur/list.json", function(data){
	var cashTemp = parseInt(localStorage["cash"]);
	    for(var i = 0; i < data.players.length; i++){
		    if(cashTemp > data.players[i].highscore){
			    place = i + 1;
				inScore = true;
				break;
			}else{
			    inScore = false; 
				}
	        
	        }
			
	    if(inScore == true){
		    phase = 4;
            buttonsBlackJack(4);
			alert("Gratulerer, scoren din var høy nok til å nå highscoren, hvis du trykker quit kan du lagre scoren din på plass nr." + place + " eller trykk play again for en sjanse til å få høyere score");
		    }
	 
   });
	
}
