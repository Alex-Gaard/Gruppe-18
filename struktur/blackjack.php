<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>lectureBlackjack</title>
        <link rel="stylesheet" type="text/css" href="./casino.css" title="Casino">
    </head>
    <body>
        <?php
session_start();
include 'header.html';
?>
        <article>
            <h1>Dealer:</h1>
            <div id="dealer-space">
            <img src="./cards/git.png" alt="Deck with picture og Git Squid" id="backside" class="card_right card">
            </div>
            <div id="cards_sum_dealer"></div>
            <fieldset id="stake_boks" class="cash">
                <legend>Stake</legend>
                $<span id="stake_player_1"></stake>
            </fieldset>
            
            <h1>You:</h1>
            <div id="player-space">
            </div>
            <div id="cards_sum_player"></div>
            <fieldset id="bank_boks" class="cash">
                <legend>Bank</legend>
                $<span id="bank_player_1">200</span>
            </fieldset>
            <button id="Deal" onclick="deal()">Deal</button>
        </article>
        <?php
include 'footer.html';
?>
    </body>
</html>
