<!DOCTYPE html>
<html>
    <head>
        <title>lectureGaming</title>
        <meta charset=UTF-8/>
        <link rel="stylesheet" type="text/css" href="./struktur/casino.css" title="Casino" />
    </head>
    <body>
<?php
session_start();

//hver del av siden ligger i egen fil slik at flere kan redigere simultant
include './struktur/header.html';
include './innhold/spill.php';
include './struktur/footer.html';

?>
    </body>
</html>
