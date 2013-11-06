<!DOCTYPE html>
<html>
    <head>
        <title>lectureGaming</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" type="text/css" href="./struktur/casino.css" title="Casino" />
        <script src="./kode/manipulere_spilleromraade.js"></script>
    </head>
    <body>
<header>
    <a href="index.php"><h1>lectureGaming</h1></a>
    <nav>
        <h1>Main Menu</h1>
        <ul>
            <li><a href="struktur/blackjack.php">lectureBlackJack</a></li>
            <li><a href="struktur/highscores.php">High Scores</a></li>
            <li><a href="struktur/about_us.php">About Us</a></li>
        </ul>
        <hr/>
    </nav>
</header>
        <h2>Welcome to lectureBlackjack</h2>
        <h2>~ When the lecture calls for it ~</h2><br>
        <img src="lectureGames_forside.gif" id="forsidebilde"><br><br>
        <div id="centerbutton">
            <button class="centerbutton">Logg inn</button>
            <button class="centerbutton">Tutorial/Help</button><br><br>
        </div> 
   <?php
session_start();
include './struktur/footer.html';
?>
    </body>
</html>
