/*-------------------------------------------------------------------*/
/* Dette skriptet skal legge til kort og annen data i spillerområdet */
/* Skrevet i ren javascript uten bruk av JQuery --------------------*/
/*-------------------------------------------------------------------*/

var spillerKortNr = 0; //hvor mange kort er delt ut til spiller
var dealerKortNr = 0; //hvor mange kort er delt ut til dealer

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
            if (kort_node !== null){ //true hvis sjekk_kort finnes
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
    skjult_kort.setAttribute('id', 'dealer_card_2');                //skjer ALLTID etter at to kort er delt til dealer
}