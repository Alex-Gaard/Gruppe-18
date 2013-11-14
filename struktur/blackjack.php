<article style="background-color: #393;">
    <h1 style="color: #393; font-size: 0;">Gaming table</h1>
    <!-- Start på område for kort og knapper -->
    <h2>Dealer:</h2>
    <div id="dealer_space">
    <img src="./cards/git.png" alt="Deck with picture og Git Squid" id="backside" class="card_right card">
    </div>
    <div id="cards_sum_dealer" class="cards_sum" title='Sum of dealer cards'>
        <span id = "dealerSum">0</span>
    </div>
    <fieldset id="stake_boks" class="cash">
        <legend>Stake</legend>
        $<span id="stake_player">0</span>
    </fieldset>
    <div id="spill_resultat"></div>
    <hr/><!-- -------------------------------------------------------------- -->
    <h2>You:</h2>
    <div id="player_space">
    </div>
    <div id="cards_sum_player" class="cards_sum" title='Sum of your cards'>
        <span id = "playerSum">0</span>
    </div>
    <fieldset id="bank_boks" class="cash">
        <legend>Bank</legend>
        $<span id="bank_player" >200</span>
    </fieldset>
    <div id="button_holder">
	<button id = "deal" onclick = "deal()">Deal</button>
    </div>
    	<input type = "text" id = "input" value = "100">
	<button style = "float:right" id = "postScore" onclick = "postScore()">Post score</button>
	<button style = "float:right" id = "getScore" onclick = "getScore()">Get score</button>
	<input style = "float:right" type = "text" id = "navn" value = "skriv inn navn">
			
    <!-- slutt på område for kort og knapper -->
    <hr id="hr_bottom" />
</article>
<script> setCash(); </script>

