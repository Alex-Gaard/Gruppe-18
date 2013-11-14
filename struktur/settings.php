<article>
    <h1>Game settings</h1>
    <p>
        Number of decks: 
    <select name='nrDecks'>
        <option value='1'>1 deck</option>
        <option value='2'>2 decks</option>
        <option value='3'>3 decks</option>
        <option value='4'>4 decks</option>
        <option value='5'>5 decks</option>
        <option value='6'>6 decks</option>
        <option value='7'>7 decks</option>
        <option value='8'>8 decks</option>
    </select><br/>
        <input name='softSeventeen' type='checkbox'> Soft 17 <br/>
        <input name='fiveCardWin' type='checkbox'> 5 card win <br/>
        <br/>
        <button class='centerbutton' onclick='setSettings()'>Set settings</button>
    </p>
    <hr id='hr_bottom'/>
</article>

<script type = "text/javascript">



if(localStorage["soft_17"] == "true"){
document.getElementById("soft17").checked = true;
}else{
document.getElementById("soft17").checked = false;
}

if(localStorage["5CardWin"] == "true"){
document.getElementById("5CardWin").checked = true;
}else{
document.getElementById("5CardWin").checked = false;
}


if(localStorage["nr_Decks"] != undefined){
document.getElementById("nrDecks").selectedIndex = parseInt(localStorage["nr_Decks"]) - 1;
}else{
document.getElementById("nrDecks").selectedIndex = 0;
}




function setRules(){

localStorage.setItem("soft_17", document.getElementById("soft17").checked);

localStorage.setItem("5CardWin", document.getElementById("5CardWin").checked);

localStorage.setItem("nr_Decks", document.getElementById("nrDecks").value);

alert("The rules have been set");

}

</script>
