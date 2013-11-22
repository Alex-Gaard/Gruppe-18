<!DOCTYPE html>
<html>
    <head>
        <title>lectureGaming</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" type="text/css" href="./struktur/casino.css" title="Casino" />
        <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.3.min.js"></script>
        <script charset="utf-8" type="text/javascript" src="./kode/spillmotor.js"></script>
	<script charset="utf-8" type="text/javascript" src="./kode/login.js"></script>
	<script charset="utf-8" type="text/javascript" src="./kode/cookie_single.js"></script>
	<script charset="utf-8" type="text/javascript" src="./kode/loggedinas.js"></script>
    </head>
    <body>
<?php
include './struktur/header.html'; //Sidenavn og meny

//Mater inn hovedinnhold:
if (isset($_REQUEST['page'])) { //sjekk om ?page er angitt i URL
    $page = $_REQUEST['page'];
    if ($page == "0" || $page == "login") {include './struktur/login.php';}
    elseif ($page == 1 || $page == "BlackJack") {include './struktur/blackjack.php';}
    elseif ($page == 2 || $page == "tutorial") {include './struktur/tutorial.php';}
    elseif ($page == 3 || $page == "rules") {include './struktur/rules.php';}
    elseif ($page == 4 || $page == "settings") {include './struktur/settings.php';}
    elseif ($page == 5 || $page == "highscores") {include './struktur/highscore.php';}
    elseif ($page == 6 || $page == "about_us") {include './struktur/about_us.php';}
    elseif ($page == 7 || $page == "terms") {include './struktur/policy.php';}
    elseif ($page == 8 || $page == "credits") {include './struktur/credits.html';}
    elseif ($page == 9 || $page == "login_new") {include './struktur/login.html';}
    else {include './struktur/start.html';} //hvis feil page-verdi blir angitt
}else {include './struktur/start.html';} //hvis ingen page-verdi er angitt
//Slutt hovedinnhold

include './struktur/footer.html'; //copyright notice
?>
    </body>
</html>
