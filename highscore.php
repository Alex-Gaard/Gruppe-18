<?php
header('Content-type: text/javascript');
$name = "";
$score = -100;
$index = -1;

if(isset($_POST['name'],$_POST['score'])){
$name = $_POST['name'];
$score = $_POST['score'];
}

$temp_arr = array();
$temp_arr2 = array();
$json_arr = json_decode(file_get_contents('list.json'), true);

$temp_arr = $json_arr;
$temp_arr2 = $json_arr;

for($i = 0; $i < 10; $i++){
if($temp_arr["players"][$i]["highscore"] < $score){
$temp_arr["players"][$i]["name"] = $name;
$temp_arr["players"][$i]["highscore"] = $score;
$index = $i;


for($a = $index; $a < 9; $a++){
$temp_arr["players"][$index + 1]["name"] = $temp_arr2["players"][$index]["name"];
$temp_arr["players"][$index + 1]["highscore"] = $temp_arr2["players"][$index]["highscore"];
$index++;
}
break;
}//end of if

}//end of for


file_put_contents('list.json',json_encode($temp_arr));
echo json_encode($temp_arr);


?>
