


var kort = new Array();
var valgt = new Array();
var temp = -100;
var valgTemp = 0;
var finnes = true;
var kortTemp = 0;

var dealerSum = 0;
var playerSum = 0;

var cash =  100;
var bet = 0;
var elem = document.getElementById("bet");
var locked;
var won;

var dealerHand = new Array(0,0,0,0,0);
var playerHand = new Array(0,0,0,0,0);

$("#cash").text(cash);

$("#bet").click(function() {
if(locked != true){
elem.value = "";
}
});

$("#lockBet").click(function() {

try{
//fungerer ikke hvis du skriver inn ting som 1 + 1 = 2 osv
 if(isNaN(parseInt(elem.value))) throw "This is not a number";
 
if(parseInt(elem.value) < 1 || parseInt(elem.value) > cash){
elem.value = "Place a bet";
alert("Tallet du oppga e ikke godkjent :( ");
}else{
locked = true;
bet = parseInt(elem.value);
cash = cash - bet;
$("#deal").attr('disabled', false);
$("#lockBet").attr('disabled', true);
$("#bet").attr('readonly', true);
$(this).attr('disable', true);
}
 
}catch(err){
alert("Du oppga ikke et tall");
elem.value = "Vennligst skriv inn et tall";
}

$("#cash").text(cash);
});



$("#hit").attr('disabled', true);
$("#stand").attr('disabled', true);
$("#restart").attr('disabled', true);
$("#deal").attr('disabled', true);


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


function hit(antHits) {
    
    for(var i = 0; i < antHits; i++){
	
       temp = valgt[a];
	
	   while(temp == valgt[a]){
	        temp = Math.floor(Math.random() * kort.length);
	        for(var a = 0; a < valgt.length; a++){
	           if(valgt[a] == temp){ 
			      temp = valgt[a];
			      break;
	              }
	
	        }//end of for
	
	    }//end of while

	
	valgt[valgTemp] = temp;
    valgTemp++;

	return temp;
	
    
	}//end of for

}//end of hit



$("#deal").click(function() {

$("#hit").attr('disabled', false);
$("#stand").attr('disabled', false);

kortTemp = kort[hit(1)];
$("#dkort1").text(kortTemp);
dealerHand[0] = cleanse(kortTemp);

kortTemp = kort[hit(1)];
$("#pkort1").text(kortTemp);
playerHand[0] = cleanse(kortTemp);

kortTemp = kort[hit(1)];
$("#pkort2").text(kortTemp);
playerHand[1] = cleanse(kortTemp);

$("#dealersum").text(dSum());
$("#playersum").text(pSum());
//Putt dette i en function senere
if(playerSum == 21){
alert("you won");
won = true;
$("#restart").attr('disabled', false);
$("#stand").attr('disabled', true);
$("#hit").attr('disabled', true);
$("#deal").attr('disabled', true);
}
resultat();
});//end of deal


$("#hit").click(function() {
var s3 = $("#pkort3").text();
var s4 = $("#pkort4").text();
var s5 = $("#pkort5").text();

if(s3 == "player3"){
kortTemp = kort[hit(1)]
$("#pkort3").text(kortTemp);
playerHand[2] = cleanse(kortTemp);

}else if(s4 == "player4"){
kortTemp = kort[hit(1)]
$("#pkort4").text(kort[hit(1)]);
playerHand[3] = cleanse(kortTemp);

}else if(s5 == "player5"){
kortTemp = kort[hit(1)]
$("#pkort5").text(kort[hit(1)]);
playerHand[4] = cleanse(kortTemp);
}
$("#playersum").text(pSum());
//Putt dette i en function senere
if(playerSum > 21){
alert("you lost");
$("#restart").attr('disabled', false);
$("#hit").attr('disabled', true);
$("#deal").attr('disabled', true);
$("#stand").attr('disabled', true);
won = false;
}
if(playerSum == 21){
alert("you won");
$("#restart").attr('disabled', false);
$("#hit").attr('disabled', true);
$("#deal").attr('disabled', true);
$("#stand").attr('disabled', true);
won = true;
}
resultat();
});//end of hit

$("#stand").click(function() {

$(this).attr('disabled', true);
$("#restart").attr('disabled', false);
$("#hit").attr('disabled', true);
$("#deal").attr('disabled', true);

var stop = false;

kortTemp = kort[hit(1)];
$("#dkort2").text(kortTemp);
dealerHand[1] = cleanse(kortTemp);
$("#dealersum").text(dSum());

if(dSum() <= 21 && dSum() > pSum() && stop == false){
alert("you have lost");
won = false;
stop = true;
}else if(dSum() > 21 && stop == false){
stop = true;
won = true;
alert("you have won");
}

if(dSum() < 21 && stop == false){
kortTemp = kort[hit(1)];
$("#dkort3").text(kortTemp);
dealerHand[2] = cleanse(kortTemp);
$("#dealersum").text(dSum());
}

if(dSum() <= 21 && dSum() > pSum() && stop == false){
alert("you have lost");
won = false;
stop = true;
}else if(dSum() > 21 && stop == false){
stop = true;
won = true;
alert("you have won");
}

if(dSum() < 21 && stop == false){
kortTemp = kort[hit(1)];
$("#dkort4").text(kortTemp);
dealerHand[3] = cleanse(kortTemp);
$("#dealersum").text(dSum());
}

if(dSum() <= 21 && dSum() > pSum() && stop == false){
alert("you have lost");
won = false;
stop = true;
}else if(dSum() > 21 && stop == false){
stop = true;
alert("you have won");
won = false;
}

if(dSum() < 21 && stop == false){
kortTemp = kort[hit(1)];
$("#dkort5").text(kortTemp);
dealerHand[4] = cleanse(kortTemp);
$("#dealersum").text(dSum());
}

if(dSum() <= 21 && dSum() > pSum() && stop == false){
alert("you have lost");
won = false;
stop = true;
}else if(dSum() > 21 && stop == false){
stop = true;
won = true;
alert("you have won");
}

resultat();
});//end of stand

$("#restart").click(function() {
playerSum = 0;
dealerSum = 0;

$("#playersum").text("0");
$("#dealersum").text("0");

for(var i = 0; i < playerHand.length; i++){
playerHand[i] = 0;
dealerHand[i] = 0;
}
$("#dkort1").text("dealer1");
$("#dkort2").text("dealer2");
$("#dkort3").text("dealer3");
$("#dkort4").text("dealer4");
$("#dkort5").text("dealer5");

$("#pkort1").text("player1");
$("#pkort2").text("player2");
$("#pkort3").text("player3");
$("#pkort4").text("player4");
$("#pkort5").text("player5");

$(this).attr('disabled', true);
$("#hit").attr('disabled', true);
$("#stand").attr('disabled', true);
$("#lockBet").attr('disabled',false);
$("#bet").attr('readonly', false);




locked = false;
won = null;

});//end of restart

function cleanse(string){
var string;
var ny;

if(string.indexOf("c") >= 0){
ny = string.replace("c","");
}

if(string.indexOf("h") >= 0){
ny = string.replace("h","");
}

if(string.indexOf("d") >= 0){
ny = string.replace("d","");
}

if(string.indexOf("s") >= 0){
ny = string.replace("s","");
}

if(parseInt(ny) >= 10 && parseInt(ny) != 14){
ny = 10;
}

if(parseInt(ny) == 14){
ny = 11;
}

return ny;
}


function pSum(){
var x = 0;

for(var i = 0; i < playerHand.length; i++){
x += parseInt(playerHand[i]);
}

if(x > 21){
 for(var i = 0; i < playerHand.length; i++){
 if(playerHand[i] == 11){
 playerHand[i] = 1;
 alert("player ace endret til 1");
 break;
 }
 }
}

x = 0;

for(var i = 0; i < playerHand.length; i++){
x += parseInt(playerHand[i]);
}

playerSum = x;
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
 alert("dealer ace endret til 1");
 break;
 }
 }
}

x = 0;

for(var i = 0; i < dealerHand.length; i++){
x += parseInt(dealerHand[i]);
}


dealerSum = x;
return x;
}


function utskrift(){
var s;
for(var i = 0; i < playerHand.length; i++){
s = s + playerHand[i] + " ";

}
alert(s);
}

function resultat(){

if(won == true){
cash = cash + bet * 2;
$("#cash").text(cash);
}else if(cash == 0 && won == false){
var answer = confirm("Game over, do you want to try once more?");
if(answer){
cash = 100;
bet = 0;

playerSum = 0;
dealerSum = 0;

$("#playersum").text("0");
$("#dealersum").text("0");

for(var i = 0; i < playerHand.length; i++){
playerHand[i] = 0;
dealerHand[i] = 0;
}
$("#dkort1").text("dealer1");
$("#dkort2").text("dealer2");
$("#dkort3").text("dealer3");
$("#dkort4").text("dealer4");
$("#dkort5").text("dealer5");

$("#pkort1").text("player1");
$("#pkort2").text("player2");
$("#pkort3").text("player3");
$("#pkort4").text("player4");
$("#pkort5").text("player5");

$(this).attr('disabled', true);
$("#hit").attr('disabled', true);
$("#stand").attr('disabled', true);
$("#lockBet").attr('disabled',false);
$("#bet").attr('readonly', false);
$("#restart").attr('disabled', true)




locked = false;
won = null;
$("#cash").text(cash);
}else{

$(this).attr('disabled', true);
$("#hit").attr('disabled', true);
$("#stand").attr('disabled', true);
$("#lockBet").attr('disabled',true);
$("#bet").attr('readonly', true);
$("#restart").attr('readonly', true);

}//end of else

}//end of else if

}


