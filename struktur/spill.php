<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <article>
            <h1>Dealer:</h1>
            <div id="dealer-space">
            <img src="./cards/s4_under.png" alt="Four of Spades" id="dealer_card_5" class="card_under_right card">
            <img src="./cards/s1_under.png" alt="Ace of Spades" id="dealer_card_4" class="card_under_right card">
            <img src="./cards/d1_under.png" alt="Ace of Diamonds" id="dealer_card_3" class="card_under_right card">
            <img src="./cards/h1.png" alt="Ace of Hearts" id="dealer_card_2" class="card_right card">
            <img src="./cards/c1.png" alt="Ace of Clubs" id="dealer_card_1" class="card_right card">
            </div>
            <div id="cards_sum_dealer"></div>
            <fieldset id="stake_player1" class="cash">
                <legend>Stake</legend>
                $35
            </fieldset>
            
            <h1>You:</h1>
            <div id="player-space">
            <img src="./cards/s4_under.png" alt="Four of Spades" id="player_card_5" class="card_under_left card">
            <img src="./cards/s1_under.png" alt="Ace of Spades" id="player_card_4" class="card_under_left card">
            <img src="./cards/d1_under.png" alt="Ace of Diamonds" id="player_card_3" class="card_under_left card">
            <img src="./cards/h1.png" alt="Ace of Hearts" id="player_card_2" class="card_left card">
            <img src="./cards/c1.png" alt="Ace of Clubs" id="player_card_1" class="card_left card">
            </div>
            <div id="cards_sum_player"></div>
            <fieldset id="bank_player1" class="cash">
                <legend>Bank</legend>
                $200
            </fieldset>
            <button id="Hit">Hit</button>
            <button id="Hold">Hold</button>
            <button id="Double-Down">Double Down</button>
        </article>
    </body>
</html>
