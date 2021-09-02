let boodschappen = [];
document.getElementById('rememberGroc').addEventListener("click", Bbutton)

function Bbutton () {

    boodschappen.push(document.getElementById('boodschappenField').value)
    document.getElementById('boodschappenlijst').innerText = boodschappen ;
    document.getElementById('boodschappenField').value = "";

}