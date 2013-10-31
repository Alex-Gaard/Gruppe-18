<!DOCTYPE html>
<html>
    <head>
        <title>lectureGaming</title>
        <meta charset=UTF-8/>
        <link rel="stylesheet" type="text/css" href="./struktur/casino.css" title="Casino" />
        <script src="./kode/manipulere_spillerområde.js"></script>
    </head>
    <body>
<?php
session_start();

//hver del av siden ligger i egen fil slik at flere kan redigere simultant
include './struktur/header.html';
include './struktur/spill.php';
include './struktur/footer.html';

?>
    </body>
</html>
