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
    <h1>High Scores</h1>
    <table>
        <tr>
            <td>1.</td>
            <td><?php echo $navn[0]; ?></td>
            <td><?php echo $score[0]; ?></td>
        </tr>
        <tr>
            <td>2.</td>
            <td><?php echo $navn[1]; ?></td>
            <td><?php echo $score[1]; ?></td>
        </tr>
        <tr>
            <td>3.</td>
            <td><?php echo $navn[2]; ?></td>
            <td><?php echo $score[2]; ?></td>
        </tr>
        <tr>
            <td>4.</td>
            <td><?php echo $navn[3]; ?></td>
            <td><?php echo $score[3]; ?></td>
        </tr>
        <tr>
            <td>5.</td>
            <td><?php echo $navn[4]; ?></td>
            <td><?php echo $score[4]; ?></td>
        </tr>
        <tr>
            <td>6.</td>
            <td><?php echo $navn[5]; ?></td>
            <td><?php echo $score[5]; ?></td>
        </tr>
        <tr>
            <td>7.</td>
            <td><?php echo $navn[6]; ?></td>
            <td><?php echo $score[6]; ?></td>
        </tr>
        <tr>
            <td>8.</td>
            <td><?php echo $navn[7]; ?></td>
            <td><?php echo $score[7]; ?></td>
        </tr>
        <tr>
            <td>9.</td>
            <td><?php echo $navn[8]; ?></td>
            <td><?php echo $score[8]; ?></td>
        </tr>
        <tr>
            <td>10.</td>
            <td><?php echo $navn[9]; ?></td>
            <td><?php echo $score[9]; ?></td>
        </tr>
    </table>
</article>
