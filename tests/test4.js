let teller = 0;
document.getElementById("kopTekst").innerText = "Dit is de koptekst";
document.getElementById("HuidigNummmer").innerText = teller + "";

function Plus(){
    teller++;
    document.getElementById("HuidigNummmer").innerText = teller+"";
    console.log(teller);
}

function Min(){
    teller--;
    document.getElementById("HuidigNummmer").innerText = teller+"";
    console.log(teller);

}

