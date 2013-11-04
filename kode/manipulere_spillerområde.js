//dette skriptet skal legge til kort og annen data i spillerområdet

var spillerKortNr = 0; //hvor mange kort er delt ut til spiller
var dealerKortNr = 0; //hvor mange kort er delt ut til dealer

//test
var A = "dealer";
var B = "player";
var C = "d7";
var C2= "7 of Diamonds";
document.getElementById("Hit").onclick = settInnKort(A, C, C2);
//test slutt

function lagKortDealer(kortID, kortNavn, kortPlassering){ //lager img element
    var bildeAdresse = "./cards/" + kortID + ".png";
    var imgID = "dealer_card_" + kortPlassering;
    var nyttKort = '<img href="' + bildeAdresse + '" alt="' + kortNavn;
    nyttKort += '" id="' + imgID + '" class="card card_right"/>';
    return nyttKort;
}
function lagKortSpiller(kortID, kortNavn, kortPlassering){ //lager img element
    var bildeAdresse = "./cards/" + kortID + ".png";
    var imgID = "player_card_" + kortPlassering;
    var nyttKort = '<img href="' + bildeAdresse + '" alt="' + kortNavn;
    nyttKort += '" id="' + imgID + '" class="card card_right"/>';
    return nyttKort;
}

function settInnKort(kortEier, kortID, kortNavn){
    if (kortEier == "dealer") { //sjekke hvem som får delt kort?
        if (dealerKortNr == 0) { //sjekke om vedkommende har fått kort før?
            var kort = lagKortDealer(kortID, kortNavn, "1");
            //finne rett sted å sette inn kort:
            document.getElementById("dealer_space").write(kort);
        } else { //kommer hit hvis DEALER har fått kort før:
            
            //denne biten øker id-en til eksisterende kort...
            var kortNr = 1; //antar det er minst ett kort delt ut
            var dealerKortNr = "dealer_card_" + kortNr;
            while (document.getElementById(dealerKortNr)) { //bryter når id dealer_card_X ikke finnes
                kortNr++;
                dealerKortNr = "dealer_card_" + kortNr;
            }
            while (kortNr > 1){
                kortNrMinus = kortNr-1; //setter £kortNr til siste eksisterende kort
                dealerKortNrMinus = "dealer_card_" + kortNrMinus;
                document.getElementById(dealerKortNrMinus).id = dealerKortNr;
                dealerKortNr = "dealer_card_" + kortNrMinus;
                kortNr --;
            }
            
            //her kommer endelig det nye kortet
            var kort = lagKortDealer(kortID, kortNavn, "1");
            document.getElementById("dealer_space").write(kort); //setter inn nytt kort i første posisjon
        }
    } else { //hvis IKKE dealer da er det player1 eller noen andre
        if (spillerKortNr == 0) { //sjekke om vedkommende har fått kort før?
            var kort = lagKortSpiller(kortID, kortNavn, "1");
            //finne rett sted å sette inn kort:
            document.getElementById("player_space").write(kort);        
        } else { //kommer hit hvis SPILLER har fått kort før:

            //denne biten øker id-en til eksisterende kort...
            var kortNr = 1; //antar det er minst ett kort delt ut
            var spillerKortNr = "player_card_" + kortNr;
            while (document.getElementById(spillerKortNr)) { //bryter når id dealer_card_X ikke finnes
                kortNr++;
                spillerKortNr = "player_card_" + kortNr;
            }
            while (kortNr > 1){
                var kortNrMinus = kortNr-1; //setter £kortNr til siste eksisterende kort
                var spillerKortNrMinus = "player_card_" + kortNrMinus;
                document.getElementById(spillerKortNrMinus).id = spillerKortNr;
                spillerKortNr = "player_card_" + kortNrMinus;
                kortNr --;
            }

            //her kommer endelig det nye kortet
            var kort = lagKortSpiller(kortID, kortNavn, "1");
            document.getElementById("player_space").write(kort); //setter inn nytt kort i første posisjon
        }
    }
}
