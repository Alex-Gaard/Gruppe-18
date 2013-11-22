<?php
// åpner filen, som dytter innholdet inn som en lang streng inn som ett element i et array
$json = file("./list.json");
// tolker strengen (som er i json) inn i et array for de 10 elementene det skal ha
$players = json_decode($json[0], true);

$navn = array();
$score = array();

foreach ($players as $plass) {
    foreach ($plass as $plassIgjen) {
        foreach ($plassIgjen as $key => $value) {
            if($key == 'name') $navn[] = $value;
            if($key == 'highscore') $score[] = $value;            
        }
    }
}
?>

<article>
 <fieldset>
  <legend id="highscores">Highscores</legend>
  <table>
        <tbody>
            <tr id="nr1">
            <td id="space_left">1.</td>
            <td>Alex</td>
            <td id="space_right">650</td>
        </tr>
        <tr id="nr2">
            <td>2.</td>
            <td>Kjeks</td>
            <td>600</td>
        </tr>
        <tr id="nr3">
            <td>3.</td>
            <td>Olav</td>
            <td>575</td>
        </tr>
        <tr>
            <td>4.</td>
            <td>Alex</td>
            <td>550</td>
        </tr>
        <tr>
            <td>5.</td>
            <td>Olav</td>
            <td>500</td>
        </tr>
        <tr>
            <td>6.</td>
            <td>Olav</td>
            <td>500</td>
        </tr>
        <tr>
            <td>7.</td>
            <td>Olav</td>
            <td>450</td>
        </tr>
        <tr>
            <td>8.</td>
            <td>Olav</td>
            <td>450</td>
        </tr>
        <tr>
            <td>9.</td>
            <td>Olav</td>
            <td>425</td>
        </tr>
        <tr>
            <td>10.</td>
            <td>Alex</td>
            <td>400</td>
        </tr>
    </tbody></table>
 </fieldset>
    <h2>Your achievements</h2>
    <p>None?</p>
</article>
