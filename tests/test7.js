let getal = 0;
document.getElementById("in").addEventListener("mouseover", teller)

function teller(){
    getal++;
    document.getElementById("count").innerText = getal;

}

